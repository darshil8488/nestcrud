import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument, USER_MODEL } from "src/schema/user/user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel(USER_MODEL) private readonly userModel : Model<UserDocument>){
        console.log(this.userModel);
    }


    async create(createUserDto){
        try {
            const user = await this.userModel.create(createUserDto);
            return user;
        } catch (error) {
            if(error.name === "ValidationError"){
                throw new BadRequestException(error.error);
            }
            throw new ServiceUnavailableException()
        }
    }

    async findAll()
    {
        const users = await this.userModel.find();
        return users 
    }

    async findOne(id){
        const users = await this.userModel.findById(id);
        if(!users){
            throw new NotFoundException("User Not Found");
        }
        return users;
    }

    async update(id , updateUserDto){
        const users = await this.userModel.findByIdAndUpdate(id , updateUserDto , {new : true});
        if(!users){
            throw new NotFoundException("User Not Found");
        }
        return users;
    }

    async remove(id){
        const users = await this.userModel.findByIdAndDelete(id);
        if(!users){
            throw new NotFoundException("User Not Found");
        }
        return users;
    }
}
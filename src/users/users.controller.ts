import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UserContoller{
    constructor(private readonly userServise : UsersService){}

    @Post()
    create(@Body() createUserDto){
        return this.userServise.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.userServise.findAll()
    }

    @Get("/:id")
    findOne(@Param("id") id : string){
        return this.userServise.findOne(id)
    }

    @Put("/:id")
    update(@Param("id") id:string , @Body() updateUserDto){
        this.userServise.update(id , updateUserDto);
    }

    @Delete("id")
    remove(@Param("id") id:string){
        this.userServise.remove(id);
    }
}
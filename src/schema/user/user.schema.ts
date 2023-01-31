import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { type } from "os";
import { ACCOUNT_STATUS, ACCOUNT_TYPE } from "src/constance";
import { address, AddressSchema } from "../common/address.schema";

@Schema({
    timestamps : true,
})
export class user{

    @Prop({
        require : true,
    })
    name: string;

    @Prop({required : true})
    email: string;

    @Prop({required: true , select : false})
    password: string;

    @Prop()
    age: number;

    @Prop()
    phone: string

    @Prop({
        type:String,
        enum: Object.keys(ACCOUNT_STATUS),
        default : ACCOUNT_STATUS.ACTIVE
    })
    status : ACCOUNT_STATUS
    
    @Prop({
        type:String,
        enum : Object.keys(ACCOUNT_TYPE),
        required : true,
        immutable : true
    })
    accountType : ACCOUNT_TYPE

    @Prop({default: []})
    social: string[];

    @Prop({default : false})
    isEmailVerified: boolean


    @Prop({type:AddressSchema , required:true})
    address : address;
}

const schema = SchemaFactory.createForClass(user);
export type UserDocument = user & Document;
export const userSchema = schema;
export const USER_MODEL = user.name;
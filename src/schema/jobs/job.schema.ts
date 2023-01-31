import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { type } from "os";
import { JOBTYPE } from "src/constance/job.constsance";
import { address, AddressSchema } from "../common/address.schema";
import { user, USER_MODEL } from "../user/user.schema";

@Schema({
    timestamps: true,
})
export class job{

    @Prop({
        type : Types.ObjectId , ref : USER_MODEL , required:true
    })
    employer :  Types.ObjectId | user; 

    @Prop({required : true})
    compnyName: string;

    @Prop({required : true})
    title : string;

    @Prop({required : true})
    description: string;

    @Prop({required : true})
    experience : number;

    @Prop({default : []})
    tags : string[];

    @Prop()
    salary : string;

    @Prop({
        type : String,
        enum:Object.keys(JOBTYPE),
        required : true,
    })
    jobType : JOBTYPE;


    @Prop({
        type : AddressSchema,
        required : true,
    })
    location : address;
}

export type JobDocument = job & Document;
export const jobSchema = SchemaFactory.createForClass(job)
export const JOB_MODEL = job.name;
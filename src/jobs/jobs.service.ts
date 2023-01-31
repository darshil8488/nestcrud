import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JobDocument, JOB_MODEL } from "src/schema/jobs/job.schema";

@Injectable()
export class JobsService{
    constructor(@InjectModel(JOB_MODEL) private readonly jobsModel: Model<JobDocument>){
        console.log(this.jobsModel);
    }
}
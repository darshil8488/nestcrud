import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { jobSchema, JOB_MODEL } from "./jobs/job.schema";
import { userSchema, USER_MODEL } from "./user/user.schema";

const MODELS = [
    {name :JOB_MODEL , schema : jobSchema},
    {name :USER_MODEL , schema : userSchema},
]

@Global()
@Module({
    imports : [MongooseModule.forFeature(MODELS)],
    exports : [MongooseModule],
})
export class MongooseModelModule{}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { activitie } from '../schemas/activities.schema';
import { Model } from 'mongoose';
import { createActivitieDto } from 'src/dto/create-activitie.dto';
import { updateActivitieDto } from 'src/dto/update-activitie.dto';

@Injectable()
export class ActivityService {
    constructor(@InjectModel(activitie.name) private activitieModel: Model<activitie>) {}
  
    findAll() {
       return this.activitieModel.find();
    }

    async create(createActivitie: createActivitieDto) {
        const newActivitie = new this.activitieModel(createActivitie);
        return newActivitie.save();
    }

    async findOne(id: string) {
        return this.activitieModel.findById(id);
    }

    async delete(id: string) {
        return this.activitieModel.findByIdAndDelete(id);
    }

    async update(id: string, activitie: updateActivitieDto) {
        return this.activitieModel.findByIdAndUpdate(id, activitie);
    }
}

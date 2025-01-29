import { Module } from '@nestjs/common';
import { ActivitiesController } from './Activities.controller';  
import { ActivityService } from './activities.service';
import { MongooseModule } from '@nestjs/mongoose';
import { activitie, activitieSchema } from '../schemas/activities.schema'

@Module({
  imports: [
            MongooseModule.forFeature([
              {
                name: activitie.name,
                schema: activitieSchema,
              },
            ]),
  ],

  controllers: [ActivitiesController],
  providers: [ActivityService]
})
export class ActivitiesModule {}

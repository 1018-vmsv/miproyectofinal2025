import { Module } from '@nestjs/common';
import { ActivitiesModule } from './activities/activities.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://victor:1018@cluster0.3bylq.mongodb.net/?retryWrites=true&w=majority',
    {
      dbName: 'producto-ropa', 
    }
  ),
           ActivitiesModule],
})
export class AppModule {}



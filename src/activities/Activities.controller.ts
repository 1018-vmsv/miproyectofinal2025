import { Controller, Get, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { ActivityService } from './activities.service';
import { createActivitieDto } from 'src/dto/create-activitie.dto';
import { updateActivitieDto } from 'src/dto/update-activitie.dto';
@Controller('activities')
export class ActivitiesController {
    constructor(private activityService: ActivityService){} 

    @Post('/')
    create(@Body() body:createActivitieDto){
   
    console.log(body);
   
    return this.activityService.create(body);
    }

    @Get()
    findAll() { 
        return this.activityService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) { 
        return this.activityService.findOne(id); 
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:updateActivitieDto) { 
        return this.activityService.update(id, body); 
    }

    @Delete(':id')
    delete(@Param('id') id: string) { 
        return this.activityService.delete(id); 
    }
}

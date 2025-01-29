import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { ActivityService } from './activities.service';
import { createActivitieDto } from 'src/dto/create-activitie.dto';
import { updateActivitieDto } from 'src/dto/update-activitie.dto';

@Controller('activities')
export class ActivitiesController {
    constructor(private activityService: ActivityService) {} 

    @Post()
    @HttpCode(201) // Cambiado a 201 Created
    async create(@Body() body: createActivitieDto) {
        try {
            const newActivity = await this.activityService.create(body);
            return { message: 'Actividad creada con éxito', result: newActivity };
        } catch (error) {
            if (error.code === 11000) {
                throw new ConflictException('La actividad ya existe');
            }
            throw new Error(`Error al crear la actividad: ${error.message}`);
        } 
    }

    @Get()
    findAll() { 
        return this.activityService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string) {
        try{
            const activity = await this.activityService.findOne(id);
            if(!activity) {
                throw new NotFoundException('La actividad no existe');
            }
            return activity; } catch (error) {throw error;}
        } 
           
        
    

    @Put(':id')
    async update(@Param('id') id:string, @Body() body: updateActivitieDto) {
        try {
            const activity = await this.activityService.update(id, body);
            if(!activity) {
                throw new NotFoundException('La actividad no existe');
            }
            return activity;
        } catch (error) {
            throw new Error(`Error al actualizar la actividad: ${error.message}`);
        }      
    }

    @Delete(':id')
    async delete(@Param('id') id:string) {
        try {
            const activity = await this.activityService.delete(id);
            if(!activity) {
                throw new NotFoundException('La actividad no existe');
            }
            return { message: 'Actividad eliminada con éxito' };
        } catch (error) {
            throw new Error(`Error al eliminar la actividad: ${error.message}`);
        }
    }
}

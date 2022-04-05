import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
import { query } from 'express';

@Controller('car')
export class CarController {
    constructor(private carservice:CarService){}
    
    @Get()
    public getCars(){
        return this.carservice.getCars();
    }
    @Post()
    public postCars(@Body() car:CarDto){
        return this.carservice.postCars(car);
    }
    @Get(':id')
    public async getCarsById(@Param('id') id:number){
        const result =  await this.carservice.getCarsById(id);
        return result;

    }
    @Delete(':id')
    public async deleteCarsById(@Param('id') id:number){
        const result= await this.carservice.deleteCarsById(id);
        return result;
    }
    @Put(':id')
    public async putCarsById(@Param('id') id:number, @Query() query){
        const propertyName=query.property_name;
        const propertyValue=query.property_value;
        const result = await this.carservice.putCarsById(id,propertyName,propertyValue);
        return result; 
    }
}

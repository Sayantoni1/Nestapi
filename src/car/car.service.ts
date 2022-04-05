import {HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import{CARS} from './car.mock';

@Injectable()
export class CarService {
    private cars=CARS;

    public getCars(){
        return this.cars; 
    }
    public postCars(car){
        this.cars.push(car); 
        return this.cars;
    }
    public getCarsById(id:number):Promise<any>{
        const carId = Number(id);
        return new Promise((resolve) => {
            const car=this.cars.find((item) => (item.id===carId));
            if(!car){
                throw new HttpException('NotFound',404);
            }else{
                return resolve(car);} 
        }) ;     
    }
    
    public deleteCarsById(id:number):Promise<any>{
        const carId =Number(id);
        return new Promise((resolve) => {
            const index=this.cars.findIndex((item) => (item.id===carId));
        if(index==-1){
            throw new HttpException('NotFound',404);
        }else{
            this.cars.splice(index,1);
            return resolve(this.cars);}
        });
        }
    public putCarsById(id:number,propertyName:string,propertyValue:string):Promise<any>{
        const carId =Number(id);
        return new Promise((resolve) => {
            const index=this.cars.findIndex((item) => (item.id===carId));
        if(index==-1){
            throw new HttpException('NotFound',404);
        }else{
            this.cars[index][propertyName]=propertyValue;
            return resolve(this.cars[index]);
        }
        });
    }        
}
// import { Test, TestingModule } from '@nestjs/testing';
// import { CarController } from './car.controller';
// import { CarService } from './car.service';

// describe('CarController', () => {
//   let controller: CarController;

//   // const mockCarService ={

//   // }

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CarController],
//       providers:[CarService],
//     }).compile();

//     controller = module.get<CarController>(CarController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   // it('should get all users',()=>{
//   //   expect(controller.getCars({id:1})).toEqual({

//     // })
//   //})
// });

import { CarController } from './car.controller';
import { CarService } from './car.service';

describe('CatsController', () => {
  let carController: CarController;
  let carService: CarService;

  beforeEach(() => {
    carService = new CarService();
    carController = new CarController(carService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [
        {
          id: 1,
          brand: 'testBMW',
          color: 'Gold',
          model: 'BMW X5'
        },
      ];
      jest.spyOn(carService, 'getCars').mockImplementation(() => result);

      expect(await carController.getCars()).toBe(result);
    });
  });
});





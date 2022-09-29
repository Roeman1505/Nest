import { CreateUserDto } from './../dtos/CreateUser.dto';
import { ArgumentMetadata, Injectable, PipeTransform, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside ValidateCreateUserPipe!');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt =parseInt(value.age.toString());

    if(isNaN(parseAgeToInt)){
      console.log(`${value.age} is not a Number`);
      throw new HttpException('Invalid Data Type for Property age.Expected Number',HttpStatus.BAD_REQUEST);
    }
  
    console.log(`${parseAgeToInt} is a number.Returning.......`)
      return {...value , age: parseAgeToInt};

    
  }
}

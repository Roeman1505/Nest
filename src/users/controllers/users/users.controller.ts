import { ValidateCreateUserPipe } from './../../pipes/validate-create-user.pipe';
import { CreateUserDto } from './../../dtos/CreateUser.dto';
import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Post,
    Query,
    Req,
    Res,
    UseGuards,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/users/services/users/users.service';
import { AuthGuard } from 'src/users/guard/auth.guard';
@Controller('users')
//This Guard is for the user controller
// @UseGuards(AuthGuard)
export class UsersController {
    // INJECTION OF SERVICES
constructor(private userService:UsersService){}



    @Get()
    @UseGuards(AuthGuard)
    // getUser() {
    //     return [{
    //         id: 1,
    //         name: 'John',
    //         email: 'john@example.com'
    //     }];
    // }

    // Using Query Parameter
    getUser() {
           return this.userService.fetchUsers();
    }





    // @Get('posts')
    // getPosts() {
    //     return [{

    //         id: 1,
    //         name: 'John',
    //         email: 'john@example.com',
    //         post: [{
    //             id: 1,
    //             title: 'Post 1',
    //         },
    //         {
    //             id: 1,
    //             title: 'Post 2',
    //         }]


    //     }];
    // }
    // @Get('posts/comments')
    // getUserPostComments(){
    //     return[{
    //         post_id:1,
    //         title:'Post 1',
    //         comments:[]
    //     }]
    // }


    @Post('create')
    // createUser(@Req() request: Request, @Res() response:Response)
    //Validation of the fields is done on top of the function
    @UsePipes(new ValidationPipe())




    // @Body Param
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        //  console.log(request.body);
        //  response.send('Created')
        // console.log(userData);
        console.log(userData.age.toPrecision());

       return this.userService.createUser(userData);
        

        // For validation we need to install additional package
        // 1: npm i class-validator class-transformer




    }

    // @Param parameters
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        // return this.userService.fetchUserById(id);
        //Check the user if is present
        
        const user = this.userService.fetchUserById(id);
        if (!user)
           throw new HttpException('User Not Found',HttpStatus.BAD_REQUEST);
        return(user);
   
    }





}

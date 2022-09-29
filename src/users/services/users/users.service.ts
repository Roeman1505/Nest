import { CreateUserType } from './../../utils/types';
import { Injectable } from '@nestjs/common';


// Service class is responsible for handling Business Logic
@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Robinson', email: 'robin1505@gmail.com' },
        { username: 'Roeman', email: 'roeman@gmail.com' },
        { username: 'Oram', email: 'oram@gmail.com' },
        { username: 'Zerokey', email: 'zerokey@gmail.com' }



];


    fetchUsers(){
    
    return this.fakeUsers;
}
createUser(userDetails:CreateUserType){
this.fakeUsers.push(userDetails);
return;


}
fetchUserById(id:number){
    // return{id,username:'Robinson', email: 'robin@gmail.com'}
    return null;
}


}

import { Controller, Get, Param, Post, Query, ParseIntPipe, DefaultValuePipe } from "@nestjs/common";
import { UsersService } from './users.service';

//http://localhost:3000/users/1

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Query('limit',new DefaultValuePipe (10), ParseIntPipe ) limit: number,
        @Query('page', new DefaultValuePipe (1), ParseIntPipe, ) page: number) {
        const usersService = new UsersService();

        return usersService.getAllUsers();

    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const usersService = new UsersService();
        return usersService.getUsersById(+id);
    }

    @Post()
    createUser() {
        const user = { id: 3, name: 'Alice', age: 34, gender: 'female', isMarried: false };
        const usersService = new UsersService();
        usersService.createUser(user);
        return 'User created successfully';
    }
}
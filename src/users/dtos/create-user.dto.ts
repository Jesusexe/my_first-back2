import { IsEmail, IsNotEmpty, IsOptional, IsString, max, MinLength } from "class-validator";

 export class CreateUserDto{
    id: number;

    @IsString({message: 'name should be a string value'})
    @IsNotEmpty()
    @MinLength(3, {message: 'name should have a minimun of 3 characters.'})
    name: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsEmail()
    email: string;

    
    isMarried: boolean;
 }
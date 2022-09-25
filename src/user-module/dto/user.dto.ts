import { IsEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    company: string;

    @IsString()
    location: string;
}
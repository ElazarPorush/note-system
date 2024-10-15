import {IsString, IsEmail, MinLength} from 'class-validator'

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    @MinLength(6, {message: "Password is too short, must be at least 6 chars"})
    password: string;

    @IsEmail({}, {message: "Invalid email format"})
    email: string;
}

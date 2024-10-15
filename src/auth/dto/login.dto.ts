import { IsString, MinLength } from "class-validator";

export class loginDTO {
    @IsString()
    username: string;
    @IsString()
    @MinLength(6, {message: "password shorter then 6 chars"})
    password: string;
}
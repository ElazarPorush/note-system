import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { loginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(login: loginDTO) {
    return 'This action adds a new auth';
  }

}

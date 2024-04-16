import { Injectable } from '@nestjs/common';
import { Cheese } from '@cheesus/contracts';

@Injectable()
export class AppService {
  getHello(): string {
    const cheese: Cheese
    return 'Hello World!';
  }
}

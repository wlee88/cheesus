import { Injectable } from '@nestjs/common';
import { Cheese } from '@cheesus/contracts';

@Injectable()
export class AppService {
  getHello(): string {
    const cheese: Cheese = {
      name: 'Cheddar',
      color: 'yellow',
      type: 'hard',
      pricePerKilo: 10,
      description: 'A hard, sharp-tasting cheese that is off-white in color.',
      imageUrl: 'https://www.thecheeseweb.com/7-types-of-cheese',
    }
    return 'Hello World!';
  }
}

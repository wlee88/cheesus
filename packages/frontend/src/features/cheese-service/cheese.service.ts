import { Injectable } from '@angular/core';
import { initClient } from '@ts-rest/core';
import { Cheese, contract } from '@cheesus/contracts';

export interface CreateCheeseRequest {
  name: string;
  pricePerKilo: number;
  description: string;
  imageUrl: string;
  color: string;
}

export type ApiClient = typeof contract


export interface UpdateCheeseRequest extends CreateCheeseRequest { id: number }
@Injectable()
export class CheeseService {
  // https://ts-rest.com/docs/core/fetch
  client: any;
  constructor() {
    // TODO: make baseURL read from central config service which reads from env variable
    this.client = initClient(contract, {
      baseUrl: 'http://localhost:3000',
      baseHeaders: {},
    });

  }
  async getCheese(id: number) {
    const result = this.client.cheeses.getCheese({ query: { id } });
    if (result.status === 200) {
      return result.body;
    }
  }
  async getCheeses(filter?: { color: string}): Promise<Cheese[]> {
    const result = await this.client.cheeses.getCheeses({ query: filter })
    if (result.status === 200) {
      return result.body;
    }
    return []
  }
  async createCheese(cheese: CreateCheeseRequest) {
    return this.client.cheeses.createCheese({ body: cheese });
  }
  async updateCheese(id: number, cheese: UpdateCheeseRequest) {
    return this.client.cheeses.updateCheese({ query: { id }, body: cheese });
  }
}

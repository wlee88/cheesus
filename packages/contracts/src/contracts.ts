// contract for our API router. If you want to add/modify more endpoints, you can add them here.

import { initContract } from '@ts-rest/core';
import { cheesesContract } from './cheeses.contract';

const c = initContract()


export const contract = c.router(
    {
        cheeses: cheesesContract
    }
)

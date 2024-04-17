import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import { ErrorResponseSchema } from './error.contract';

const c = initContract()
export const CheeseSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    pricePerKilo: z.number(),
    description: z.string(),
    imageUrl: z.string().url(),
    type: z.enum(['fresh', 'aged', 'soft-white-rind', 'semi-soft', 'hard', 'blue', 'flavour-added']),
    color: z.enum(['orange', 'yellow', 'white', 'blue']),
})

export type Cheese = z.infer<typeof CheeseSchema>

const singularPath = '/cheese'
const multiplePath = '/cheeses'

export const cheesesContract = c.router(
    {
        getCheese: {
            method: 'GET',
            path: singularPath,
            responses: {
                [200]: CheeseSchema,
                [404]: null
            },
            summary: 'Get the cheese by id',
        },
        // TODO: support pagination and filtering
        getCheeses: {
            method: 'GET',
            path: multiplePath,
            responses: {
                [200]: z.array(CheeseSchema),
            },
            summary: 'Get all cheeses',
        },
        createCheese: {
            method: 'POST',
            path: singularPath,
            body: CheeseSchema,
            responses: {
                [201]: CheeseSchema,
                [400]: ErrorResponseSchema,
            },
            summary: 'Create a new cheese',
        },
        updateCheese: {
            method: 'PUT',
            path: `${singularPath}/:id`,
            body: CheeseSchema.partial(),
            responses: {
                [200]: CheeseSchema,
                [400]: ErrorResponseSchema,
                [404]: null,
            },
            summary: 'Update cheese',
        }
    },
    {
        strictStatusCodes: true,
    },
)

import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import { ErrorResponseSchema } from './error.contract';

const c = initContract()

export const CheeseSchema = z.object({
    id: z.number(),
    name: z.string(),
    pricePerKilo: z.number(),
    description: z.string(),
    imageUrl: z.string().url(),
    // TODO validation on these
    type: z.string(),
    color: z.string(),
})

export const CreateCheeseRequestSchema = CheeseSchema.omit({ id: true })

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
            query: z.object({ id: z.number() }),
            summary: 'Get the cheese by id',
        },
        // TODO: support pagination and filtering
        getCheeses: {
            method: 'GET',
            path: multiplePath,
            responses: {
                [200]: z.array(CheeseSchema),
                [500]: ErrorResponseSchema
            },
            summary: 'Get all cheeses',
        },
        createCheese: {
            method: 'POST',
            path: singularPath,
            body: CreateCheeseRequestSchema,
            responses: {
                [201]: CheeseSchema,
                [400]: ErrorResponseSchema,
                [500]: ErrorResponseSchema
            },
            summary: 'Create a new cheese',
        },
        updateCheese: {
            method: 'PUT',
            path: `${singularPath}/:id`,
            body: CheeseSchema.partial(),
            responses: {
                [200]: CheeseSchema,
                [404]: ErrorResponseSchema,
                [500]: null,
            },
            summary: 'Update cheese',
        },
        deleteCheese: {
            method: 'DELETE',
            path: singularPath,
            query: z.object({ id: z.number() }),
            responses: {
                [204]: z.undefined(),
                [404]: ErrorResponseSchema,
                [500]: ErrorResponseSchema,
            },
            body: null,
            summary: 'Delete a hearing section',
        },
        report: {
            method: 'GET',
            path: `${singularPath}/report`,
            responses: {
                [200]: z.array(CheeseSchema),
                [500]: ErrorResponseSchema
            },

        }
    },
    {
        strictStatusCodes: true,
    },
)

import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const HealthSchema = z.object({
    version: z.string(),
    gitSha: z.string(),
    release: z.string(),
    dependencies: z.object({
        regionalApiHealthStatus: z.number(),
    }),
})

export const healthContract = c.router(
    {
        getHealth: {
            method: 'GET',
            path: '/health',
            responses: {
                [200]: HealthSchema,
                [500]: HealthSchema,
            },
            summary: 'Perform a health check and return version information',
        },
    },
    {
        strictStatusCodes: true,
    },
)

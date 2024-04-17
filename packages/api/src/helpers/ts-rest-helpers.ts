import { AppRoute, AppRouter } from '@ts-rest/core'
import { tsRestHandler } from '@ts-rest/nest'

export type Handler<T extends AppRoute | AppRouter> = ReturnType<typeof tsRestHandler<T>>

export type HandlerResponse<T extends AppRoute> = Promise<Awaited<ReturnType<Handler<T>>>>

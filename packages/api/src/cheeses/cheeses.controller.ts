import {
    nestControllerContract,
    NestControllerInterface,
    NestRequestShapes,
    TsRest, tsRestHandler, TsRestHandler,
    TsRestRequest
} from '@ts-rest/nest';
import { cheesesContract, contract } from '@cheesus/contracts';
import { Controller, HttpStatus } from '@nestjs/common';
import { CheesesService } from './cheeses.service';
import { Handler } from '../helpers/ts-rest-helpers'


const c = nestControllerContract(cheesesContract)

type Contract = typeof c

@Controller()
export class CheesesController {
    constructor(private readonly cheesesService: CheesesService) {
    }

    @TsRestHandler(c)
    handler(): Handler<Contract> {
        return tsRestHandler(c, {
            createCheese: async ( {body }) => {
                try {
                    const createResult = await this.cheesesService.create(body)
                    return {
                        status: HttpStatus.CREATED,
                        body: createResult as any
                    }

                } catch (error) {
                    return {
                        status: 400,
                        body: {
                            error: 'Internal server error'
                        }
                    }
                }
            },
            getCheeses: async () => {
                const cheeses = await this.cheesesService.getAll()
                return {
                    status: 200,
                    body: cheeses
                }
            },
            getCheese: async ({query}) => {
                const cheese = await this.cheesesService.get(query.id)
                if (!cheese) {
                    return {
                        status: HttpStatus.NOT_FOUND,
                        body: {
                            error: 'Cheese not found'
                        }
                    }
                }
                return {
                    status: HttpStatus.OK,
                    body: cheese
                }
            },
            updateCheese: async ({params, body}) => {
                // TODO: validation for params id - as it comes through as string. Zod transform required earlier
                const id = Number(params.id)
                try {
                    const updateResult = await this.cheesesService.update(Number(id), body)
                    if (!updateResult.affected) {
                        return {
                            status: 404,
                            body: {
                                error: 'Cheese not found'
                            }
                        }
                    }
                    return {
                        status: 200,
                        body: await this.cheesesService.get(id)
                    }
                } catch (error) {
                    return {
                        status: 500,
                        body: {
                            error: 'Internal server error'
                        }
                    }
                }
            },
            deleteCheese: async ({query}) => {
                try {
                    const deleteResult = await this.cheesesService.remove(query.id)
                    if (!deleteResult.affected) {
                        return {
                            status: 404,
                            body: {
                                error: 'Cheese not found'
                            }
                        }
                    }
                    return {
                        status: 204,
                        body: undefined
                    }
                } catch (error) {
                    return {
                        status: 500,
                        body: {
                            error: 'Internal server error'
                        }
                    }
                }
            }
        })
    }
}
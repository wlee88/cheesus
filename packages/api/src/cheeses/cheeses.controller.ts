import {
    nestControllerContract,
    NestRequestShapes,
    TsRest,
    TsRestRequest
} from '@ts-rest/nest';
import { cheesesContract, contract } from '@cheesus/contracts';
import { Controller, HttpStatus } from '@nestjs/common';
import { CheesesService } from './cheeses.service';


const c = nestControllerContract(cheesesContract)
type RequestShapes = NestRequestShapes<typeof c>;

type Contract = typeof c

@Controller()
export class CheesesController {
    constructor(private readonly cheesesService: CheesesService) {}

    @TsRest(c.createCheese)
    async createCheese(@TsRestRequest() { body }: RequestShapes['createCheese']) {
        try {
            const createResult = await this.cheesesService.create(body)
            return {
                status: 201,
                body: createResult as any
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

    @TsRest(c.getCheeses)
    async getCheeses(@TsRestRequest() { query }: RequestShapes['getCheeses']) {
        try {
            const cheeses = await this.cheesesService.getBy(query)
            return {
                status: 200,
                body: cheeses.length ? cheeses : []
            }
        }
        catch(error) {
            return {
                status: 500,
                body: {
                    error: 'Internal server error'
                }
            }
        }
    }

    @TsRest(c.getCheese)
    async getCheese(@TsRestRequest() { query }: RequestShapes['getCheese']) {
        try {
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
        }
        catch(error) {
            return {
                status: 500,
                body: {
                    error: 'Internal server error'
                }
            }
        }
    }

    @TsRest(c.updateCheese)
    async updateCheese(@TsRestRequest() { params, body }: RequestShapes['updateCheese']) {
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
    }

    @TsRest(c.deleteCheese)
    async deleteCheese(@TsRestRequest() { query }: RequestShapes['deleteCheese']) {
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
}
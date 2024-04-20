import {
    nestControllerContract,
    NestRequestShapes,
    TsRest,
    TsRestRequest
} from '@ts-rest/nest';
import { cheesesContract, contract } from '@cheesus/contracts';
import { Controller, HttpStatus } from '@nestjs/common';
import { CheesesService } from './cheeses.service';
import { GenericLogger } from '../logger/logger.service';


const c = nestControllerContract(cheesesContract)
type RequestShapes = NestRequestShapes<typeof c>;

type Contract = typeof c

@Controller()
export class CheesesController {
    constructor(private readonly cheesesService: CheesesService, private readonly logger: GenericLogger) {}

    @TsRest(c.createCheese)
    async createCheese(@TsRestRequest() { body }: RequestShapes['createCheese']) {
        this.logger.verbose('Creating cheese', body)
        try {
            const createResult = await this.cheesesService.create(body)
            return {
                status: 201,
                body: createResult as any
            }

        } catch (error) {
            this.logger.error('Error creating cheese', error)
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
        this.logger.verbose('Getting cheeses', query)
        try {
            const cheeses = await this.cheesesService.getBy(query)
            return {
                status: 200,
                body: cheeses.length ? cheeses : []
            }
        }
        catch(error) {
            this.logger.error('Error getting cheeses', error)
            return {
                status: 500,
                body: {
                    error: 'Internal server error'
                }
            }
        }
    }

    @TsRest(c.getCheese)
    async getCheese(@TsRestRequest() { params }: RequestShapes['getCheese']) {
        this.logger.verbose('Getting cheese', params)
        try {
            const cheese = await this.cheesesService.get(params.id)
            if (!cheese) {
                this.logger.warn('Cheese not found', params)
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
            this.logger.error('Error getting cheese', error)
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
        const { id } = params

        this.logger.verbose('Updating cheese', { id, body })
        try {
            const updateResult = await this.cheesesService.update(Number(id), body)
            if (!updateResult.affected) {
                this.logger.warn('Cheese not found', { id, body })
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
            this.logger.error('Error updating cheese', error)

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
            this.logger.verbose('Deleting cheese', query)
            const deleteResult = await this.cheesesService.remove(query.id)
            if (!deleteResult.affected) {
                this.logger.warn('Cheese not found', query)
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
            this.logger.error('Error deleting cheese', error)
            return {
                status: 500,
                body: {
                    error: 'Internal server error'
                }
            }
        }
    }
}
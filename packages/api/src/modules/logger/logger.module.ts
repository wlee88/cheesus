import { Module } from '@nestjs/common';
import { GenericLogger } from './logger.service';

@Module({
    providers: [GenericLogger],
    exports: [GenericLogger]
})
export class LoggerModule{}

import { Injectable, LoggerService } from '@nestjs/common';

/**
 * Very simple logger service that only console.logs. This could be changed/replaced to send to some third party
 * service such as Sentry or Sumologic.
 *
 * It doesn't have any fancy context/name setting for now - but could have.
 */
@Injectable()
export class GenericLogger implements LoggerService {
    /**
     * Write a 'log' level log.
     */
    log(message: any) {
        console.log(message)
    }

    /**
     * Write a 'fatal' level log.
     */
    fatal(message: any, ...optionalParams: any[]) {
        console.error(message)
    }

    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]) {
        console.error(message)
    }

    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) {
        console.warn(message)
    }

    /**
     * Write a 'debug' level log.
     */
    debug?(message: any, ...optionalParams: any[]) {
        console.debug(message)
    }

    /**
     * Write a 'verbose' level log.
     */
    verbose?(message: any, ...optionalParams: any[]) {
        console.info(message)
    }
}

import { SetMetadata } from '@nestjs/common';

/**
 *
 * @param roles
 * @constructor
 */
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

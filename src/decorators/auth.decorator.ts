import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import {RolesGuard} from "../role.guard";


function ApiBearerAuth() {
  return undefined;
}

function ApiUnauthorizedResponse(param: { description: string }) {
  return undefined;
}

export function Auth(...roles: []) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}

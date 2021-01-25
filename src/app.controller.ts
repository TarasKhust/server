import {Controller, Get, Request, Post, UseGuards, Logger} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {AppService} from "./app.service";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name)
  constructor(private authService: AuthService, private readonly appService: AppService) {}

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  //
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
  @Get()
  getHello(): string {
    this.logger.log("GET hello")
    return this.appService.getHello()
  }
}
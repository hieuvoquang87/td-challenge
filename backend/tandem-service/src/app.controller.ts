import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

enum ResultCode {
  OK    = 'OK',
  ERROR = 'ERROR'
}

interface GetReqResponse {
  result: ResultCode
  data?: number[]
  message?: string 
}

interface PostReqResponse {
  result: ResultCode
  data?: number[]
  message?: string 
}

@Controller('data-sets')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('next')
  async getNextDataSet(): Promise<GetReqResponse> {
    try {
      const resultData = await this.appService.getNextDataSet()
      return {
        result: ResultCode.OK,
        data: resultData
      };
    } catch (e) {
      return {
        result: ResultCode.ERROR,
        message: e.message
      };
    }
  }

  @Post('data-point')
  async setNewDataPoint(@Body() body: { input: number }): Promise<PostReqResponse> {
    try {
      const resultData = await this.appService.updateCurrentDataSet(Number(body.input))
      return {
        result: ResultCode.OK,
        data: resultData
      }
    } catch (e) {
      return {
        result: ResultCode.ERROR,
        message: e.message
      };
    }
  }
}

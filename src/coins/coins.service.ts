import { Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class CoinsService {
	@GrpcMethod('CoinsService', 'SayHello')
	sayHello(data: any): { message: string } {
		return { message: 'Hello, World!' };
	}
}
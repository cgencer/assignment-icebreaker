import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloService } from './hello/hello.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'hello',
          protoPath: './hello.proto',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, HelloService],
})
export class AppModule {}
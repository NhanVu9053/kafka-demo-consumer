import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'consumer-demo',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'consumer-demo-client',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'kafkademo-group1',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

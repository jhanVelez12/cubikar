import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';

//Service
import { UsersService } from './users/users.service'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/authentication'),
    UsersModule,
    AuthModule,
    ClientesModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}

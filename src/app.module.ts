import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Emergency } from './emergencies/emergency.entity';
import { EmergenciesModule } from './emergencies/emergencies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, 
      ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    }),

    EmergenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

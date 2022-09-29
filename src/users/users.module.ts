import { AnotherMiddleware } from './middlewares/another.middleware';
import { ExampleMiddleware } from './middlewares/example.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      //  Apply middleware for specific route
      // .apply(ExampleMiddleware).forRoutes('users');

      //  Apply middleware for specific Controller
      // .apply(ExampleMiddleware).forRoutes(UsersController);

      //Apply Middleware for specific path
      .apply(ExampleMiddleware).forRoutes(
        {
        path: 'users',
        method: RequestMethod.GET,
      },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        }

      ).apply(AnotherMiddleware).forRoutes(
        {
          path: 'users',
          method: RequestMethod.GET,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        }


      );
  }
}
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('INTERCEPTOR: Logging...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`Elapsed... ${Date.now() - now}ms`)),
      );
  }
}

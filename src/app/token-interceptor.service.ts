import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req,next){
    let authentificationService = this.injector.get(AuthentificationService)

    let tokenizedReq = req.clone({
      setHeaders: {
       Authorization: 'Bearer ${authentificationService.getToken()}'
      }
    })
    return next.handle(tokenizedReq)
  }
}
 
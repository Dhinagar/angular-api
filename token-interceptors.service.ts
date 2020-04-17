import { AuthserviceService } from "./auth/authservice.service";
import { HttpInterceptor } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorsService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req, next) {
    let authService = this.injector.get(AuthserviceService);
    let tokenizedReq = req.clone({
      headers: req.headers.set(
        "Authorization",
        "bearer " + authService.getToken()
      )
    });
    return next.handle(tokenizedReq);
  }
}

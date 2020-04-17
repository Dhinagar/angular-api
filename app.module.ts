import { EventserviceService } from "./event/eventservice.service";
import { AuthserviceService } from "./auth/authservice.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfilesComponent } from "./profiles/profiles.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { EventComponent } from "./event/event.component";
import { TokenInterceptorsService } from "./token-interceptors.service";
import { AuthGuard } from "./auth.guard";
import { HomeService } from "./home.service";
import { CountryService } from "./country.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    LoginComponent,
    RegisterComponent,
    ProfilesComponent,
    EventComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthserviceService,
    HomeService,
    CountryService,
    EventserviceService,
    AuthGuard,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorsService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

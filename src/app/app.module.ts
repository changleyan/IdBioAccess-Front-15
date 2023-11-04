import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";


import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {AuthComponent} from "./layouts/auth/auth.component";

import {DashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {SettingsComponent} from "./views/admin/settings/settings.component";
import {TablesComponent} from "./views/admin/tables/tables.component";


import {LoginComponent} from "./views/auth/login/login.component";
import {RegisterComponent} from "./views/auth/register/register.component";

import {ProfileComponent} from "./views/profile/profile.component";


import {ComponentsModule} from "@components/components.module";
import {AdminComponent} from "@app/layouts/admin/admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {httpInterceptorProviders} from "@app/_helpers/http.interceptor";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    AuthComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {
}

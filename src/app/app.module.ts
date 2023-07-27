import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { UsersComponent } from './shared/component/users/users.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ProducteditComponent } from './shared/component/product/productedit/productedit.component';
import { UserComponent } from './shared/component/user/user.component';
import { UsereditComponent } from './shared/component/users/useredit/useredit.component';
import { LoginComponent } from './shared/component/login/login.component';
import { NavDirective } from './shared/directive/nav.directive';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ProducteditComponent,
    UserComponent,
    UsereditComponent,
    LoginComponent,
    NavDirective,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

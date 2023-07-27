import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductComponent } from './shared/component/product/product.component';
import { UsersComponent } from './shared/component/users/users.component';
import { AboutComponent } from './shared/component/about/about.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { ProducteditComponent } from './shared/component/product/productedit/productedit.component';
import { UserComponent } from './shared/component/user/user.component';
import { UsereditComponent } from './shared/component/users/useredit/useredit.component';
import { AuthGuard } from './shared/servcies/auth.guard';
import { LoginComponent } from './shared/component/login/login.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';
import { UseroleGuard } from './shared/servcies/userrole.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    
  },
  {
    path: 'about', component: AboutComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'products', component: ProductsComponent,
    canActivate : [UseroleGuard],
   data : {
    userRole : "ADMIN"
   },
   
    children: [
      { path: ':id', component: ProductComponent },
      { path: ':id/edit', component: ProducteditComponent }
    ]
  },
  {path : '', component:LoginComponent},
  // {path : 'products/:id' , component : ProductComponent},
  // {path : 'products/:id/edit' , component : ProducteditComponent},
  {path:'pagenotfound' , component:PagenotfoundComponent,
     data : {errormsg : "page not found"}
},
  {
    path: 'users', component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: ':id', component: UserComponent },
      { path: ':id/edit', component: UsereditComponent }
    ]

  }



  // {path : 'users/:id' , component : UserComponent},
  // {path : 'users/:id/edit' , component : UsereditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddItemComponent } from './components/admin-add-item/admin-add-item.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminViewItemComponent } from './components/admin-view-item/admin-view-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminAuthGuard } from './Guards/admin-auth.guard';
import { UserAuthGuard } from './Guards/user-auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'user-login',pathMatch:'full'},
  {path:'user-login',component:UserLoginComponent},
  {path:'user-dashboard',component:UserDashboardComponent,canActivate:[UserAuthGuard],children:[
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:"products",component:ProductsComponent},
    {path:"cart",component:CartComponent},
    {path:"**",redirectTo:'user-login',pathMatch:"full"}
  ]},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminAuthGuard],children:[
    {path:'',redirectTo:'add-item',pathMatch:'full'},
    {path:"add-item",component:AdminAddItemComponent},
    {path:"view-item",component:AdminViewItemComponent},
    {path:"**",redirectTo:'admin-login',pathMatch:"full"}
  ]},
  {path:'admin-login',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminAddItemComponent } from './components/admin-add-item/admin-add-item.component';
import { AdminViewItemComponent } from './components/admin-view-item/admin-view-item.component';
import { AdminEditItemComponent } from './components/admin-edit-item/admin-edit-item.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    AdminLoginComponent,
    HeaderComponent,
    UserDashboardComponent,
    ProductsComponent,
    CartComponent,
    AdminAddItemComponent,
    AdminViewItemComponent,
    AdminEditItemComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useValue:JWT_OPTIONS
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

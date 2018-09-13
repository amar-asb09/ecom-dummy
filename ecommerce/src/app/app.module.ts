import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './auth.service';
import { EditProfileComponent } from './home/edit-profile/edit-profile.component';
import { QuestionableBooleanPipe } from './pipes';
import { CartComponent } from './home/cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProductDetailsComponent,
    LogoutComponent,
    EditProfileComponent,
    QuestionableBooleanPipe,
    CartComponent,
    MyOrdersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ AuthService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

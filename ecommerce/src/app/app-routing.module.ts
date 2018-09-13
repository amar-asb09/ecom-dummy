import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LoginComponent
} from './login/login.component';
import {
  RegisterComponent
} from './register/register.component';
import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
import {
  HomeComponent
} from './home/home.component';
import {
  LayoutComponent
} from './layout/layout.component';
import {
  CutomersDetailsComponent
} from './layout/cutomers-details/cutomers-details.component';
import {
  AdminPannelComponent
} from './layout/admin-pannel/admin-pannel.component';
import {
  ProductsComponent
} from './layout/products/products.component';
import {
  RevenueComponent
} from './layout/revenue/revenue.component';
import {
  NofiticationComponent
} from './layout/nofitication/nofitication.component';
import {
  CurrentIssuesComponent
} from './layout/current-issues/current-issues.component';
import {
  BugsReportComponent
} from './layout/bugs-report/bugs-report.component';
import {
  SettingsComponent
} from './layout/settings/settings.component';
import {
  OrdersComponent
} from './layout/orders/orders.component';
import {
  StatisticcsComponent
} from './layout/statisticcs/statisticcs.component';
import {
  ProductDetailsComponent
} from './home/product-details/product-details.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import {EditProfileComponent } from './home/edit-profile/edit-profile.component'
import { CartComponent } from './home/cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';


const routes: Routes = [
  //default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children :[
      {
        path: 'profile', component:ProfileComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'editProfile', component:EditProfileComponent,
        canActivate :[AuthGuard]
      },
      {
        path: 'cart', component:CartComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'my-orders', component:MyOrdersComponent,
        canActivate :[AuthGuard]
      }
    ]
  },
  {
    path: 'admin-panel',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [{
        path: 'dashboard',
        component: AdminPannelComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'customers',
        component: CutomersDetailsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'revenue',
        component: RevenueComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'notification',
        component: NofiticationComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'issues',
        component: CurrentIssuesComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'bugs',
        component: BugsReportComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate : [AuthGuard]
      },
      {
        path: 'statistics',
        component: StatisticcsComponent,
        canActivate : [AuthGuard]
      }
    ]
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  //for invalid routes
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [LoginComponent,
  RegisterComponent,
  PageNotFoundComponent,
  AdminPannelComponent,
  HomeComponent,
  CutomersDetailsComponent,
  LayoutComponent,
  ProductsComponent,
  RevenueComponent,
  NofiticationComponent,
  BugsReportComponent,
  CurrentIssuesComponent,
  OrdersComponent,
  SettingsComponent,
  StatisticcsComponent,
  ProductDetailsComponent,
  ProfileComponent,
  LogoutComponent,
  EditProfileComponent,
  MyOrdersComponent
];

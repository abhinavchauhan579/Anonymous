import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditViewCustomerComponent } from './customer-details/edit-view-customer/edit-view-customer.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginPageComponent},
  {path:'customer', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

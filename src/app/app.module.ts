import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RejisterComponent } from './rejister/rejister.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { PaymentActivityComponent } from './payment-activity/payment-activity.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { PersonalBankingComponent } from './personal-banking/personal-banking.component';
import { CorporateComponent } from './corporate/corporate.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RejisterComponent,
    TransactionComponent,
    WithdrawComponent,
    TransferComponent,
    PaymentActivityComponent,
    CheckBalanceComponent,
    PersonalBankingComponent,
    CorporateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,

    NgbAlertModule,
    RouterModule.forRoot([
      {
      path:"",
      pathMatch:"full",
      redirectTo:"/home"
      },
      {
        path: 'login',
        component: LoginComponent
      },{
        path:'home',
        component:HomeComponent
      },
    {
      path:'rejister',
      component:RejisterComponent
      
    },
    {
      path:'transaction',
      component:TransactionComponent
    },
    {
      path:'withdraw',
      component:WithdrawComponent
    },
    {
      path:'transfer',
      component:TransferComponent
    },
    {
      path:'payment-activity',
      component:PaymentActivityComponent
    },
    {
      path:'check-balance',
      component:CheckBalanceComponent
    },
    {
      path:'personal-banking',
      component:PersonalBankingComponent
    },
    {
      path:'corporate',
      component:CorporateComponent
    }
  ])
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

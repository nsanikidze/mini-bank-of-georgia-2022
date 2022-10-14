import { NgModule } from '@angular/core';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {CreateAccountComponent} from './accounts/create-account/create-account.component';
import {AccountsComponent} from './accounts/accounts.component';
import {OperationsComponent} from './operations/operations.component';
import {SharedModule} from '../../../shared/shared.module';
import {AuthGuard} from '../../../shared/auth-guard.guard';
import {ClientGuard} from '../../client-guard.guard';



@NgModule({
  declarations: [KrnicpComponent, CreateAccountComponent, AccountsComponent, OperationsComponent],
  imports: [SharedModule],
  providers: [AuthGuard, ClientGuard]
})
export class KrnModule {}

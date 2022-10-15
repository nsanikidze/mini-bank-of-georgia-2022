import { NgModule } from '@angular/core';
import {KrnicpComponent} from './krnicp/krnicp.component';
import {CreateAccountComponent} from './accounts/create-account/create-account.component';
import {AccountsComponent} from './accounts/accounts.component';
import {OperationsComponent} from './operations/operations.component';
import {SharedModule} from '../../../shared/shared.module';
import {KrnRoutingModule} from './krn-routing.module';
import {KrnComponent} from './krn.component';



@NgModule({
  declarations: [KrnComponent, KrnicpComponent, CreateAccountComponent, AccountsComponent, OperationsComponent],
  imports: [SharedModule, KrnRoutingModule]
})
export class KrnModule {}

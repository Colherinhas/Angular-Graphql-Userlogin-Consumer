import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from '../../../graphql/graphql.module';
import { AuthService } from '../auth/auth.service';
import { CreateUserComponent } from './create-user.component';
import { CreateUserService } from './create-user.service';

@NgModule({
  declarations: [CreateUserComponent],
  imports: [GraphQLModule, FormsModule, CommonModule, RouterModule],
  providers: [CreateUserService, AuthService],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}

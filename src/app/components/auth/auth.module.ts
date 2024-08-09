import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from '../../../graphql/graphql.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [GraphQLModule, FormsModule, CommonModule, RouterModule],
  providers: [AuthComponent, AuthService],
  exports: [AuthComponent],
})
export class AuthModule {}

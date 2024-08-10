import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from '../../../graphql/graphql.module';
import { UpdateUserDataComponent } from './update-user-data.component';
import { UpdateUserDataService } from './update-user-data.service';

@NgModule({
  declarations: [UpdateUserDataComponent],
  imports: [GraphQLModule, FormsModule, CommonModule],
  providers: [UpdateUserDataService],
  exports: [UpdateUserDataComponent],
})
export class UpdateUserDataModule {}

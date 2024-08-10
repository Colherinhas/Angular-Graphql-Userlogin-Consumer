import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GraphQLModule } from '../../../graphql/graphql.module';
import { CreateRepoComponent } from './create-repo.component';
import { CreateRepoService } from './create-repo.service';

@NgModule({
  declarations: [CreateRepoComponent],
  imports: [GraphQLModule, FormsModule, CommonModule, RouterModule],
  providers: [CreateRepoComponent, CreateRepoService],
  exports: [CreateRepoComponent],
})
export class CreateRepoModule {}

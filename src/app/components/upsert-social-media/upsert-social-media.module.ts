import { CommonModule, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GraphQLModule } from '../../../graphql/graphql.module';
import { UpsertSocialMediaComponent } from './upsert-social-media.component';
import { UpsertSocialMediaService } from './upsert-social-media.service';

@NgModule({
  declarations: [UpsertSocialMediaComponent],
  imports: [GraphQLModule, FormsModule, TitleCasePipe, CommonModule],
  providers: [UpsertSocialMediaService],
  exports: [UpsertSocialMediaComponent],
})
export class UpsertSocialMediaModule {}

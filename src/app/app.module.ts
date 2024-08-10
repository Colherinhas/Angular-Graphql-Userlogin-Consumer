import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthModule } from './components/auth/auth.module';
import { CreateRepoModule } from './components/create-repo/create-repo.module';
import { CreateUserModule } from './components/create-user/create-user.module';
import { HomeModule } from './components/home/home.module';
import { UpdateUserDataModule } from './components/update-user-data/update-user-data.module';
import { UpsertSocialMediaModule } from './components/upsert-social-media/upsert-social-media.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    ApolloModule,
    AppRoutingModule,
    BrowserModule,
    // ReactiveFormsModule,

    AuthModule,
    HomeModule,
    CreateUserModule,
    CreateRepoModule,
    UpdateUserDataModule,
    UpsertSocialMediaModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

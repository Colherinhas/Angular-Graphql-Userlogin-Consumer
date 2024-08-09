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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from '../graphql/graphql.module';
import { AuthModule } from './components/auth/auth.module';
import { CreateUserModule } from './components/create-user/create-user.module';
import { HomeModule } from './components/home/home.module';
import { UpdateUserDataModule } from './components/update-user-data/update-user-data.module';
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    ApolloModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    GraphQLModule,
    ReactiveFormsModule,

    AuthModule,
    HomeModule,
    UpdateUserDataModule,
    CreateUserModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}

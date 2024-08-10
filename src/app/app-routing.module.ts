import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CreateRepoComponent } from './components/create-repo/create-repo.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateUserDataComponent } from './components/update-user-data/update-user-data.component';
import { UpsertSocialMediaComponent } from './components/upsert-social-media/upsert-social-media.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'addSocial', component: UpsertSocialMediaComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'createuser', component: CreateUserComponent },
  { path: 'createRepo', component: CreateRepoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'update', component: UpdateUserDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

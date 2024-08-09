import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  @Inject(AuthService)
  private readonly $auth: AuthService = inject(AuthService);
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  email = ``;
  password = ``;

  onSubmit() {
    this.$auth.login(this.email, this.password).subscribe((data) => {
      const userSession = {
        user: data.login.user,
      };
      localStorage.setItem('token', JSON.stringify(data.login.accessToken));
      localStorage.setItem('userSession', JSON.stringify(userSession));

      this.$router.navigate(['home']);
    });
  }
}

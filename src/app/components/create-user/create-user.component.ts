import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent {
  @Inject(CreateUserService)
  private readonly $createUser: CreateUserService = inject(CreateUserService);
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  name = '';
  address = '';
  phone = '';
  photoUrl = '';
  email = '';
  password = '';
  cpf = '';

  onSubmit() {
    const data = {
      name: this.name,
      password: this.password,
      email: this.email,
      cpf: this.cpf,
      address: this.address,
      phone: this.phone,
      photoUrl: this.photoUrl,
    };
    this.$createUser.createUser(data).subscribe((data) => {
      this.$router.navigate(['auth']);
    });
  }

  onLoginClick() {
    this.$router.navigate(['auth']);
  }
}

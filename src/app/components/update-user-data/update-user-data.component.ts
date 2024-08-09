import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateUserDataService } from './update-user-data.service';

@Component({
  selector: 'app-update-user-data',
  templateUrl: './update-user-data.component.html',
  styleUrls: ['./update-user-data.component.scss'],
})
export class UpdateUserDataComponent implements OnInit {
  @Inject(UpdateUserDataService)
  private readonly $update: UpdateUserDataService = inject(
    UpdateUserDataService
  );
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  id: string = '';
  name: string = '';
  address: string = '';
  photoUrl: string = '';
  phone: string = '';
  token: string = '';

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const userSession = localStorage.getItem('userSession');
    const btoken = localStorage.getItem('token') as string;
    console.log('userSession:', userSession);
    if (userSession) {
      const userSessionNow = JSON.parse(userSession);
      const user = userSessionNow.user;

      this.id = user.id;
      this.token = btoken;
      this.name = user.name;
      this.address = user.address;
      this.photoUrl = user.photoUrl;
      this.phone = user.phone;
    }
  }

  onSubmit() {
    const data = {
      id: this.id,
      token: this.token,
      name: this.name,
      address: this.address,
      photoUrl: this.photoUrl,
      phone: this.phone,
    };
    console.log('submitted data:', data);
    this.$update.updateUser(data).subscribe((response) => {
      console.log('updateUser response:', response);
      this.$router.navigate(['home']);
    });
  }
}

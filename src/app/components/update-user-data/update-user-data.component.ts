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

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
      const userSessionNow = JSON.parse(userSession);
      const user = userSessionNow.user;

      this.id = user.id;
      this.name = user.name;
      this.address = user.address;
      this.photoUrl = user.photoUrl;
      this.phone = user.phone;
    }
  }

  onSubmit() {
    const data = {
      id: this.id,
      name: this.name,
      address: this.address,
      photoUrl: this.photoUrl,
      phone: this.phone,
    };
    this.$update.updateUser(data).subscribe((response) => {
      this.$router.navigate(['home']);
    });
  }

  onDeleteSubmit() {
    const variables = { id: this.id };
    this.$update.deleteUser(variables).subscribe((response) => {
      console.log('Deleted user.');
      this.$router.navigate(['auth']);
    });
  }

  back() {
    this.$router.navigate(['home']);
  }
}

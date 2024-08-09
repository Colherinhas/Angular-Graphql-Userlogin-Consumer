import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FIND_USER_BY_ID } from '../../../graphql/collections/queries/find-user.query';
import { GraphQLService } from '../../../graphql/graphql.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Inject(GraphQLService)
  private readonly $graphql: GraphQLService = inject(GraphQLService);
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  user: any;
  id: any;

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    const userSession = localStorage.getItem('userSession');
    if (!userSession) {
      return;
    }
    const sessionData = JSON.parse(userSession);
    this.id = sessionData.user.id;
    console.log('id:', this.id);
    this.$graphql.query(FIND_USER_BY_ID, { id: this.id }).subscribe((data) => {
      this.user = data.user;
    });
  }

  getIconPath(socialMedia: string): any {
    switch (socialMedia.toLowerCase()) {
      case 'instagram':
        return '../../assets/icons/instagram.svg';
      case 'facebook':
        return '../../assets/icons/facebook.svg';
      case 'linkedin':
        return '../../assets/icons/linkedin.svg';
      case 'github':
        return '../../assets/icons/github.svg';
      default:
        return '../../assets/icons/default.svg';
    }
  }

  navigateToUpdateUser() {
    this.$router.navigate(['update']);
  }
}

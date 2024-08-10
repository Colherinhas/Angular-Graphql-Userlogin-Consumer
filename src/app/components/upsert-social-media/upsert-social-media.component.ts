import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SocialMediaEnum } from './social-media.enum';
import { UpsertSocialMediaService } from './upsert-social-media.service';

@Component({
  selector: 'app-upsert-social-media',
  templateUrl: './upsert-social-media.component.html',
  styleUrls: ['./upsert-social-media.component.scss'],
})
export class UpsertSocialMediaComponent {
  @Inject(UpsertSocialMediaService)
  private readonly $social: UpsertSocialMediaService = inject(
    UpsertSocialMediaService
  );
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  link = '';
  socialMedias: { value: SocialMediaEnum; label: string }[] = [
    { value: SocialMediaEnum.FACEBOOK, label: 'Facebook' },
    { value: SocialMediaEnum.GITHUB, label: 'GitHub' },
    { value: SocialMediaEnum.INSTAGRAM, label: 'Instagram' },
    { value: SocialMediaEnum.LINKEDIN, label: 'LinkedIn' },
  ];
  socialMediaSelected: string = '';

  onSubmit() {
    const userSession = JSON.parse(
      localStorage.getItem('userSession') as string
    );
    const data = {
      link: this.link,
      socialMedia: this.socialMediaSelected,
      userId: userSession.user.id,
    };
    this.$social.upsertSocialMedia(data).subscribe((response) => {
      this.$router.navigate(['home']);
    });
  }
}

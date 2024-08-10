import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRepoService } from './create-repo.service';
import { ProgrammingLanguagesOptions } from './language-options';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.scss'],
})
export class CreateRepoComponent {
  @Inject(CreateRepoService)
  private readonly $repoService: CreateRepoService = inject(CreateRepoService);
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  link = '';
  language = '';
  selectedLanguage = '';

  programmingLanguages = ProgrammingLanguagesOptions;

  onSubmit() {
    const userSession = JSON.parse(
      localStorage.getItem('userSession') as string
    );
    const data = {
      link: this.link,
      language: this.selectedLanguage,
      userId: userSession?.user?.id,
    };
    this.$repoService.createRepo(data).subscribe((data) => {
      this.$router.navigate(['home']);
    });
  }
}

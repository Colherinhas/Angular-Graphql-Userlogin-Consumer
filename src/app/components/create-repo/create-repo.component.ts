import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRepoService } from './create-repo.service';
import { programmingLanguages } from './language-options';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrl: './create-repo.component.scss',
})
export class CreateRepoComponent {
  @Inject(CreateRepoService)
  private readonly $repo: CreateRepoService = inject(CreateRepoService);
  @Inject(Router)
  private readonly $router: Router = inject(Router);

  userId = '';
  link = '';
  language: string[] = [];
  programmingLanguages = programmingLanguages;

  onSubmit() {
    const userSession = JSON.parse(
      localStorage.getItem('userSession') as string
    );
    this.userId = userSession.user.id;
    if (this.isFormValid()) {
      const data = {
        userId: this.userId,
        link: this.link,
        language: this.language,
      };
      console.log('data:', data);
      this.$repo.createRepo(data).subscribe(() => {
        this.$router.navigate(['home']);
      });
    } else {
      console.warn('Formulário inválido. Verifique todos os campos.');
    }
  }
  private isFormValid(): boolean {
    return this.link.trim() !== '' && this.language.length > 0;
  }
}

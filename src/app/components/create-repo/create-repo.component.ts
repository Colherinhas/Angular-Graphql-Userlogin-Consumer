import { Component, inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRepoService } from './create-repo.service';
import { ProgrammingLanguages } from './language-options';

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
  selectedLanguages: string[] = [];

  programmingLanguagesOptions: { value: string; label: string }[] = [
    {
      value: ProgrammingLanguages.JavaScript,
      label: ProgrammingLanguages.JavaScript,
    },
    { value: ProgrammingLanguages.Python, label: ProgrammingLanguages.Python },
    { value: ProgrammingLanguages.Java, label: ProgrammingLanguages.Java },
    { value: ProgrammingLanguages.CSHARP, label: ProgrammingLanguages.CSHARP },
    {
      value: ProgrammingLanguages.CPLUSPLUS,
      label: ProgrammingLanguages.CPLUSPLUS,
    },
    { value: ProgrammingLanguages.PHP, label: ProgrammingLanguages.PHP },
    {
      value: ProgrammingLanguages.TypeScript,
      label: ProgrammingLanguages.TypeScript,
    },
    { value: ProgrammingLanguages.Ruby, label: ProgrammingLanguages.Ruby },
    { value: ProgrammingLanguages.Swift, label: ProgrammingLanguages.Swift },
    { value: ProgrammingLanguages.Go, label: ProgrammingLanguages.Go },
    { value: ProgrammingLanguages.Kotlin, label: ProgrammingLanguages.Kotlin },
    { value: ProgrammingLanguages.Rust, label: ProgrammingLanguages.Rust },
    { value: ProgrammingLanguages.Dart, label: ProgrammingLanguages.Dart },
    { value: ProgrammingLanguages.Scala, label: ProgrammingLanguages.Scala },
    {
      value: ProgrammingLanguages.ShellScripting,
      label: ProgrammingLanguages.ShellScripting,
    },
    { value: ProgrammingLanguages.Perl, label: ProgrammingLanguages.Perl },
    {
      value: ProgrammingLanguages.ObjectiveC,
      label: ProgrammingLanguages.ObjectiveC,
    },
    { value: ProgrammingLanguages.R, label: ProgrammingLanguages.R },
    { value: ProgrammingLanguages.Elixir, label: ProgrammingLanguages.Elixir },
    {
      value: ProgrammingLanguages.Haskell,
      label: ProgrammingLanguages.Haskell,
    },
  ];

  onSubmit() {
    const userSession = JSON.parse(
      localStorage.getItem('userSession') as string
    );
    const data = {
      link: this.link,
      language: this.selectedLanguages,
      userId: userSession?.user?.id,
    };
    this.$repoService.createRepo(data).subscribe((response) => {
      this.$router.navigate(['home']);
    });
  }
}

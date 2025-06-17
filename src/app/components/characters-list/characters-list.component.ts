import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
@Component({
  selector: 'app-characters-list',
  imports: [],
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})
export class CharactersListComponent {
characters: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private rmService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.rmService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters = data.results;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
}

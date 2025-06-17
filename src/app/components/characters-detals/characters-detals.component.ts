import { Component } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
@Component({
  selector: 'app-characters-detals',
  imports: [],
  templateUrl: './characters-detals.component.html',
  styleUrl: './characters-detals.component.scss'
})
export class CharactersDetalsComponent {
character: any = null;
  id: number | null = null;
  loading = false;
  error: string | null = null;

  constructor(private rmService: RickAndMortyService) {}

  search() {
    this.error = null;
    this.character = null;
    if (!this.id || this.id <= 0 || !Number.isInteger(this.id)) {
      this.error = "Veuillez saisir un ID entier positif.";
      return;
    }
    this.loading = true;
    this.rmService.getCharacterById(this.id).subscribe({
      next: (data) => {
        this.character = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      }
    });
  }
}

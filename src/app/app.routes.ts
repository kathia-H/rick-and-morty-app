import { Routes } from '@angular/router';
import{CharactersListComponent} from './components/characters-list/characters-list.component';
import { CharactersDetalsComponent } from './components/characters-detals/characters-detals.component';

export const routes: Routes = [

    {path: '', redirectTo: 'characters', pathMatch: 'full'},

    { path: 'characters', component: CharactersListComponent  },

    {path: 'details', component: CharactersDetalsComponent   }
];

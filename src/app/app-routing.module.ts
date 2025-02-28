import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { GenreInfoComponent } from './genre-info/genre-info.component';

const routes: Routes = [
  {path: "", component: HomeComponent, title: "MusicLocker - Listen to your fav songs"},
  {path: "search", component: SearchComponent, title: "MusicLocker - Find a song or artist"},
  {path: "favourites", component: FavouriteComponent, title: "MusicLocker - Check your liked stuff"},
  {path: "signup", component: LoginComponent, title: "MusicLocker - Sign up"},
  {path: "song/:id", component: SongInfoComponent},
  {path: "artist/:id", component: ArtistInfoComponent},
  {path: "genre/:id", component: GenreInfoComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

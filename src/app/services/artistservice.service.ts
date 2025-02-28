import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistserviceService {

  constructor(private http: HttpClient) { }

  // 🔹 Obtener 100 artistas (20 por petición)
  getArtists(): Observable<any> {
    const requests = [];
    for (let i = 0; i < 5; i++) {
      requests.push(this.http.get(`/api/search/artist?q=a&index=${i * 20}&limit=20`));
    }
    return forkJoin(requests); // Ejecuta todas las peticiones en paralelo
  }

  //Datos del artista
  getArtist(id: number): Observable<any>{
    return this.http.get(`/api/artist/${id}`);
  }

  //Funcion para la búsqueda de artistas
  searchArtist(artist: string): Observable<any>{
    return this.http.get(`/api/search/artist?q=${artist}&limit=10`);
  }

  artistAlbums(id: number, limit: number): Observable<any>{
    return this.http.get(`/api/artist/${id}/albums?limit=${limit}`);
  }

  artistSongs(id: number, limit: number): Observable<any>{
    return this.http.get(`/api/artist/${id}/top?limit=${limit}`);
  }

  genreArtists(genre_id: number): Observable<any>{
    return this.http.get(`/api/genre/${genre_id}/artists`);
  }
}

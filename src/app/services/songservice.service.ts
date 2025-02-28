import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongserviceService {

  constructor(private http: HttpClient) { }

  // 🔹 Obtener 100 canciones (20 por petición)
  getTracks(): Observable<any> {
    const requests = [];
    for (let i = 0; i < 5; i++) {
      requests.push(this.http.get(`/api/search?q=a&index=${i * 20}&limit=20`));
    }
    return forkJoin(requests);
  }

  searchSong(song: string): Observable<any>{
    return this.http.get(`/api/search/track?q=${song}&limit=10`);
  }

  getGenres(): Observable<any>{
    return this.http.get("/api/genre");
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LyricserviceService {

  constructor(private http: HttpClient) { }

  getLyrics(artist: string, title: string): Observable<any>{
    return this.http.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  }
}

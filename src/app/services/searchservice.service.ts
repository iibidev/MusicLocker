import { Injectable } from '@angular/core';
import { BehaviorSubject, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor() {
    this.searchesSubject.next(this.getSearches());
  }

  private searchesSubject = new BehaviorSubject<Array<any>>([]);

  searches$ = this.searchesSubject.asObservable();

  private getSearches(): Array<any>{
    let data = localStorage.getItem("lastSearches");
    return data ? JSON.parse(data) : [];
  }

  setSearch(search: any){
    let searches = this.getSearches();
    let exists = searches.find((s: any) => s.id == search.id);
    if(exists){
      searches.splice(searches.indexOf(exists), 1);
    }else if(searches.length == 12){
      searches.splice(searches.length - 1, 1);
    }
    searches.unshift(search);
    localStorage.setItem("lastSearches", JSON.stringify(searches));
    this.searchesSubject.next(searches);
  }

  removeSearch(index: any){
    let searches = this.getSearches();
    searches.splice(index, 1);
    localStorage.setItem("lastSearches", JSON.stringify(searches));
    this.searchesSubject.next(searches);
  }
}

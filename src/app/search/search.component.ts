import { Component, OnInit } from '@angular/core';
import { SongserviceService } from '../services/songservice.service';
import { SearchserviceService } from '../services/searchservice.service';
import { ArtistserviceService } from '../services/artistservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  genres: any[] =[];
  searching: boolean = false;
  lastSearches: any[] = [];
  searchText: string = "";
  songs: any[] = [];
  searchOption: string = "1";
  artists: any[] = [];

  constructor(private songService: SongserviceService, private searchService: SearchserviceService,
    private artistService: ArtistserviceService
  ){}

  ngOnInit(): void {
    this.songService.getGenres().subscribe(data =>{
      //splice is for removing the first element of the array: "all" genre.
      this.genres = data.data.splice(1, data.data.length-1);
    });
    this.searchService.searches$.subscribe(data =>{
      this.lastSearches = data;      
    });
  }

  changeToSearching(){
    this.searching = true;
  }

  notSearching(){
    this.searching = false;
    this.searchText = "";
    this.songs = [];
    this.artists = [];
  }

  searchSong(){
    if(this.searchText.trim() != ""){
      if(this.searchOption == "1"){
        this.songService.searchSong(this.searchText).subscribe(data =>{
          this.songs = data.data;
        });
      }else if(this.searchOption == "2"){
        this.artistService.searchArtist(this.searchText).subscribe(data =>{
          this.artists = data.data;
          console.log(this.artists);
        });
      }
    }
  }

  lastSearch(search: any){
    this.searchService.setSearch(search);    
  }

  removeLastSearch(index: any, el: HTMLElement){
    el.classList.add("removedAnimation");
    setTimeout(()=>{
      this.searchService.removeSearch(index);
    }, 390);
  }

}

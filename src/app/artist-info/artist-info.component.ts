import { Component, OnInit } from '@angular/core';
import { ArtistserviceService } from '../services/artistservice.service';
import { ActivatedRoute } from '@angular/router';
import { SongserviceService } from '../services/songservice.service';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent implements OnInit{

  artist: any = {picture_medium: "", link: "", nb_fan: "", name: ""};
  albums: any[] = [];
  songs: any[] = [];

  constructor(private artistService: ArtistserviceService, private route: ActivatedRoute, private songService: SongserviceService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param =>{
      const artist_id = param.get('id');
      this.artistService.getArtist(Number(artist_id)).subscribe(data =>{
        this.artist = data;
        console.log(this.artist);
             
      });

      this.artistService.artistSongs(Number(artist_id), 5).subscribe(data =>{
        this.songs = data.data;
        console.log(this.songs);
        
      });

      this.artistService.artistAlbums(Number(artist_id), 0).subscribe(data =>{
        this.albums = data.data;
        console.log(this.albums);
        
      });
    });
  }

  transformToMinutes(secs: number){
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

}

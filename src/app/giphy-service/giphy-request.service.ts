// import { Giphy } from './../giphy';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyRequestService {

  gifs = new BehaviorSubject<any>([]);
  limit = 25;

  constructor(private http: HttpClient) {}

  public getTrendingGifs() {
      return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.ApiKey}&limit=` + this.limit + `&rating=g`)
   }

  public searchGifs(gifName: string){
     return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.ApiKey}&limit=` + this.limit + `&rating=g`);
   }

   public increaseLimit(): void {
     this.limit += 10;
   }

   public resetLimit(): void {
     this.limit = 25;
   }
}

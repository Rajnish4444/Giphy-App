import { HttpClient } from '@angular/common/http';
import { GiphyRequestService } from './../giphy-service/giphy-request.service';
import { Component, OnInit } from '@angular/core';
import { Giphy } from '../giphy';

@Component({
  selector: 'app-giphy-list',
  templateUrl: './giphy-list.component.html',
  styleUrls: ['./giphy-list.component.css']
})
export class GiphyListComponent implements OnInit {
  giphies:Giphy[];
  getTrendingGifs: any;
  searchString = '';

  constructor(private giphyRequestService: GiphyRequestService, private http:HttpClient) {
   }

  ngOnInit(): void{
    this.getData();
  }

  public getMoreGIFs(): void {
    this.giphyRequestService.increaseLimit();
    this.getData();
  }

  public resetGIFs(): void {
    this.giphyRequestService.resetLimit();
    this.getData();
  }

  public getData(): void {
    if (this.searchString == "")
    {
      this.giphyRequestService.getTrendingGifs()
      .subscribe((response: any) => {
        this.giphies = response.data;
      });
    } else {
      this.giphyRequestService.searchGifs(this.searchString)
      .subscribe((response: any) => {
        this.giphies = response.data;
      });
    }
  }

  public search(search: string): void {
    this.searchString = search;
    this.getData();
  }
}

import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-data-render',
  templateUrl: './data-render.component.html',
  styleUrls: ['./data-render.component.css']
})
export class DataRenderComponent implements OnInit {

  title = '';
  status = '';
  pageId;
  constructor(private webService: WebService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const option = {
      id: 1
    };
    this.getTodoService(option);
  }

  getTodoService(option: any) {
    this.webService.httpGet(option).subscribe((response: any) => {
      console.log(response);
      this.title = response.title;
      this.status = response.completed;
      this.pageId = response.id;
      this.openSnackBar("Fetched data")
    },
    err => {
      this.openSnackBar("Something went wrong while fetching data from https://jsonplaceholder.typicode.com");
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 1000,
    });
  }

  previous() {
    if(this.pageId === 1) {
      this.openSnackBar("Can't go less than page number 1.")
    } else {
       const option = {
        id: this.pageId - 1
      };
      this.getTodoService(option);
    }
  }

  next() {
    const option = {
      id: this.pageId + 1
    };
    this.getTodoService(option);
  }

}

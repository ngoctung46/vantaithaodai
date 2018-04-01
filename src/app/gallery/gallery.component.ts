import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
  }
  reload() {
    location.reload();
  }
}

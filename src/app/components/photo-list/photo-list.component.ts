import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/Interfaces/Photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent {
  photos: Photo[] = [];
  filter: string = '';

  constructor(private activatedRouted: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.activatedRouted.snapshot.data['photos'];
  }

  onKey(event: any) {
    this.filter = event.target.value;
  }
}

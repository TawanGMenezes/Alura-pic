import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/Interfaces/Photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent {
  photos: Photo[] = [];
  constructor(
    private photoService: PhotoService,
    private activatedRouted: ActivatedRoute
  ) {}

  ngOnInit() {
    const userName = this.activatedRouted.snapshot.params['userName'];
    this.photoService
      .listFromUser(userName)
      .subscribe((photos) => (this.photos = photos));
  }
}

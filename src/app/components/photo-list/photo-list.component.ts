import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject, Subscription } from 'rxjs';
import { Photo } from 'src/app/Interfaces/Photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(private activatedRouted: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this.activatedRouted.snapshot.data['photos'];
    this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
  }

  onKey(event: any) {
    this.debounce.next(event.target.value);
    return this.debounce
      .pipe(debounceTime(300))
      .subscribe((filter) => (this.filter = filter));
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}

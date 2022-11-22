import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  description = 'Leão';
  url =
    'http://jornalgazetadooeste.com.br/wp-content/uploads/2019/10/o-leao-e-conhecido-como-o-rei-dos-animais_362fc95c8f7188a27c2a0a6f70f15579948c2dfc.jpg';
}

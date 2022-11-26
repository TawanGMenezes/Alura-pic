import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Photo } from '../Interfaces/Photo';
import { PhotoService } from '../services/photo.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotoService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Photo[]> {
    const userName = route.params['userName'];
    return this.service.listFromUserPaginated(userName, 1);
  }
}

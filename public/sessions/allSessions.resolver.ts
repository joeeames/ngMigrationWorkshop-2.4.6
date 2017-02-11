import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Sessions } from './sessions.service';

@Injectable()
export class AllSessionsResolver implements Resolve<any> {
  
  constructor(private sessions: Sessions) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    // console.log('hi there', route, state);
    var o = this.sessions.getAllSessions();
    o.subscribe(val => {
      // console.log('val', val);
    })
    return o;
  }
}
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})

export class MyNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {
   
  }
  dashboard=false;
  table=false
  public open(dashboard,table) {
    if(dashboard){
      this.dashboard=true;
      this.table=false
    }
    if(table){
      this.dashboard=false;
      this.table=true
    }
    // alert('dashboard'+ this.dashboard);
    // alert('table'+ this.table);
  }
  }


import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-appcongreso',
  templateUrl: './appcongreso.component.html',
  styleUrl: './appcongreso.component.css'
})
export class AppcongresoComponent implements OnInit {
@ViewChild(MatSidenav, {static:true})
sidenav!: MatSidenav;
constructor( private observer:BreakpointObserver ){

}
ngOnInit(): void {
  this.observer.observe(["(max-width: 800px)"]).subscribe((res)=>{
    if(res.matches){
      this.sidenav.mode = "over";
      this.sidenav.close();
    }else{
      this.sidenav.mode = "side";
      this.sidenav.open();
      
    }
  })
}

}

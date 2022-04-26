import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer ) {
      this.matIconRegistry.addSvgIcon(
        'github',
        this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
      );
    }
  title = 'test';
}

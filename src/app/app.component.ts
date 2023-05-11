import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IconService } from './shared/services/icon.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentApplicationVersion = environment.appVersion;

  constructor(private iconService: IconService) {
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }

}

import { Component, OnInit, NgModule } from '@angular/core';
import { faTimes, faCode } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  faStar = faStar
  faCloudUpload = faCloudUpload
  faWandMagicSparkles = faWandMagicSparkles
  faCode = faCode
  faMicrochip = faMicrochip
  faTimes = faTimes
  constructor() { }

  
  
  ngOnInit(): void {
    
  }
  
}

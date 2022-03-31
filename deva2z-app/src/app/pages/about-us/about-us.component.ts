import { Component, HostListener, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  faTimes = faTimes
  faCode = faCode
  faLaptopCode = faLaptopCode
  faBrain = faBrain
  constructor() { }

  ngOnInit(): void {
  }

}

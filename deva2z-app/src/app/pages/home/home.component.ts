import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  faFacebook = faFacebook
  faInstagram = faInstagram
  faTwitter = faTwitter
  faLinkedin = faLinkedin


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar-grid',
  templateUrl: './navbar-grid.component.html',
  styleUrls: ['./navbar-grid.component.scss']
})
export class NavbarGridComponent implements OnInit {

  faUsers = faUsers
  faMap = faMap
  faBriefcase = faBriefcase
  faBookOpen = faBookOpen
  faQuestion = faQuestion
  faImages = faImages

  constructor() { }

  ngOnInit(): void {
  }

}

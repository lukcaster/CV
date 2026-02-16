import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope, faHome, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [FaIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  faUser = faUser;
  faHome = faHome;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faCode = faCode;

  ngOnInit(): void {
  }
}

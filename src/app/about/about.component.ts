import { Component, OnInit } from '@angular/core';
import * as icons from '@fortawesome/angular-fontawesome';
import { FaIconComponent } from "../../../node_modules/@fortawesome/angular-fontawesome/icon/icon.component";

@Component({
  selector: 'app-about',
  imports: [FaIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  user: any;
  house: any;
  phone: any;
  comments: any;
  masks: any;

  ngOnInit(): void {
    this.masks = icons.FaConfig
  }
}

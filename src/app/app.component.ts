import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, AboutComponent]
})
export class AppComponent implements OnInit {
  title = 'CV';

  ngOnInit(): void {
    AOS.init()
  }
}

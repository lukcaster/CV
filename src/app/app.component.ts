import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import AOS from 'aos';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { SkillsComponent } from "./skills/skills.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HomeComponent, AboutComponent, SkillsComponent, MatButtonModule]
})
export class AppComponent implements OnInit {
  title = 'CV';

  ngOnInit(): void {
    AOS.init()
  }
}
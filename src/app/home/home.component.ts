import { NgStyle } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      const options = {
        strings: [
          'Łukasz Gruchała<br/>Automation Tester<br/>AI-using Tester'
        ],
        typeSpeed: 35,
        backSpeed: 400,
        loop: true,
        backDelay: 100,
        startDelay: 50,
        smartBackspace: false
      };

      const typed = new Typed('.typed', options);
      console.log('Typed initialized:', typed);
    }, 100);
  }
}

import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroChevronLeft } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-intro-pages',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    NgIconsModule,
    NgIconComponent
  ],
  providers: [
    provideIcons({ heroChevronLeft })
  ],
  templateUrl: './intro-pages.component.html',
  styleUrls: ['./intro-pages.component.css'],
})
export class IntroPagesComponent implements OnInit {


  showFirstDiv: boolean = true;
  showSecondDiv: boolean = false;
  showThridDiv: boolean = false;
  currentSlide: number = 1;
  currenttime: number =0;
  button1: any = 'Next';
  currentIntro: number = 1

  ngOnInit(): void {
    setTimeout(() => {
      this.currenttime=5
    }, 5);
    setTimeout(() => {
      this.showFirstDiv = false;
      this.showSecondDiv = true;
      this.currentIntro = 2;
      setTimeout(()=> {
        this.currenttime=2006
      }, 1);
      
    }, 2005);

  }


  isIntro(n: number): boolean{
    return this.currentIntro === n;
  }
  isgetStarted(n: number): boolean{
    return this.currentIntro === n;
  }

  animStarted(time: number): boolean{
    return this.currenttime===time
  }

  introShows(time: number): boolean{
    return this.currenttime===time
  }

  nextSlide(button: HTMLButtonElement): void {
    if(this.currentSlide == 2){
      button.innerText = 'Get Started';
      this.button1=button;
    }
    if (this.currentSlide < 3) {
      this.currentSlide++;
    } else if(this.currentSlide == 3){
      this.lastIntroPage()
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 1) {
      this.currentSlide--;
    }
    if (this.button1.innerText != 'Next') {
      this.button1.innerText = 'Next';
    }
  }

  isActiveSlide(slideNumber: number): boolean {
    return this.currentSlide === slideNumber;
  }

  backIntro(): void{ 
    location.reload();
  }
  lastIntroPage(): void{
    
    this.currentIntro = 3;
    setTimeout(()=> {
      this.currenttime=13
    }, 1);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { cssSortAz, cssProfile } from '@ng-icons/css.gg';
import { hugeHome02, hugeCalendar03, hugeClock01 } from '@ng-icons/huge-icons';
import { TaskModalComponent } from './task-modal/task-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NgIconComponent, TaskModalComponent],
  providers: [
    provideIcons({
      cssSortAz,
      hugeHome02,
      hugeCalendar03,
      hugeClock01,
      cssProfile,
    }),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  currenttime: number = 0;
  ngOnInit(): void {
    setTimeout(() => {
      this.currenttime = 5;
    }, 5);
    setTimeout(() => {
      setTimeout(() => {
        this.currenttime = 2006;
      }, 1);
    }, 2005);
  }
}

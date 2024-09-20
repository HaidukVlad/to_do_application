import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { cssTime, cssTag, cssFlagAlt, cssArrowRightO } from '@ng-icons/css.gg';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [NgIconComponent],
  providers: [
    provideIcons({ cssTime, cssTag, cssFlagAlt, cssArrowRightO })
  ],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @ViewChild('modalElement') modalElement!: ElementRef;
  isClickInside(target: HTMLElement): boolean {
    return this.modalElement.nativeElement.contains(target);
  }
}

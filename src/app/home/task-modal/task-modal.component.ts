import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [],
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.css'
})
export class TaskModalComponent {
  @ViewChild('modalElement') modalElement!: ElementRef;
  isClickInside(target: HTMLElement): boolean {
    return this.modalElement.nativeElement.contains(target);
  }
}

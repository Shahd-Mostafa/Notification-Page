import { NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @ViewChildren('i') myElements!: QueryList<ElementRef>;
  isClicked: boolean = true;
  isClickedColor: boolean = true;
  num: number = 3;
  toggleNotification(): void {
    this.isClicked = !this.isClicked;
    this.myElements.forEach((element) => {
      if (this.isClicked) {
        element.nativeElement.classList.add('notification');
        this.num = 3;
      } else {
        element.nativeElement.classList.remove('notification');
        this.num = 0;
      }
    });
  }
}

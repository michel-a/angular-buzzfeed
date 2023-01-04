import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-logo',
  templateUrl: './quizz-logo.component.html',
  styleUrls: ['./quizz-logo.component.css']
})
export class QuizzLogoComponent implements OnInit {

  @Input()
  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('body') body?: string = '';
  @Input('id') id: number = -1;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

@Input() actorName: string;
@Input() actorDescription: string;
@Input() actorImage: string;

  constructor() { }

  ngOnInit() {
  }

}

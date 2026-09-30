import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'



import { Member } from './member/memberComponent';

@Component({
  selector: 'app-root',
  imports: [Member, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'LAB';
}

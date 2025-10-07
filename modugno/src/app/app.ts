
import { Component, signal } from '@angular/core';
import { Pippo } from './pippo/pippo';
import { Topolino } from './topolino/topolino';
import { Paperino } from './paperino/paperino';

@Component({
  selector: 'app-root',
  imports: [Pippo, Topolino, Paperino],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('modugno');
}

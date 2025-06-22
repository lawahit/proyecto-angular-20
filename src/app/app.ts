import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SafePipe } from './safe-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,SafePipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'motos';
}

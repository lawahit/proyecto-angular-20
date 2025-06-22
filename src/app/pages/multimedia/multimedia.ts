import { Component } from '@angular/core';
import { SafePipe } from "../../safe-pipe";


@Component({
  selector: 'app-multimedia',
  imports: [SafePipe],
  templateUrl: './multimedia.html',
  styleUrls: ['./multimedia.css']
})
export class Multimedia {
  videoUrl = 'https://www.youtube.com/embed/YxlN6WI97z0';

}

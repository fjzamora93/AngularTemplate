import { Component, Inject } from '@angular/core';
import { PortraitComponent } from "./portrait/portrait.component";


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PortraitComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}

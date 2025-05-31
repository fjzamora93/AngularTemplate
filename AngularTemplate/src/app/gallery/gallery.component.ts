
import {Component, Inject} from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { Portrait } from './portrait.model';
import { PortraitService } from './portrait.service';
import { PortraitComponent } from './portrait/portrait.component';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MaterialModule, PortraitComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
    constructor(private portraitService: PortraitService) {};

    imageGallery : Portrait[] = this.portraitService.portraits;

    //Medimos los índices de las imágenes que se están mostrando (currentIndex para la central)
    firstIndex: number = 0;
    lastIndex: number = 3;
    currentImage?: Portrait;

    openImage(image: Portrait) {
        console.log("Opening image: " + image.src);
        this.currentImage = image;
    }

    nextImage() {
        this.firstIndex++;
        this.lastIndex++;
        if (this.lastIndex > this.imageGallery.length) {
            this.lastIndex = this.imageGallery.length;
            this.firstIndex = this.lastIndex - 3;
        }
    }

    previousImage() {
        this.firstIndex--;
        this.lastIndex--;
        if (this.firstIndex < 0 ) {
            this.firstIndex = 0;
            this.lastIndex = 3;
        }
    }

}

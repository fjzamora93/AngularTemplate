
import {Component, Inject} from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Portrait } from '../portrait.model';
import { PortraitService } from '../portrait.service';


@Component({
  selector: 'app-portrait',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './portrait.component.html',
  styleUrl: './portrait.component.css'
})
export class PortraitComponent {

}

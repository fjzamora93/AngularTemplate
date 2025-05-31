import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { GraphicsService } from './graphics.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-graphics',
  standalone: true,
  imports: [MaterialModule, ProgressBarComponent, ProgressSpinnerComponent, CommonModule],
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.css'
})
export class GraphicsComponent {
    constructor(public graphicService: GraphicsService) {};
}

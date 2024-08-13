import { AfterViewInit, Component, Input, ElementRef, OnDestroy } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicsService } from '../graphics.service';
import { Graphics } from '../graphics.model'

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'] // Corrige styleUrl a styleUrls
})
export class ProgressBarComponent implements AfterViewInit, OnDestroy {
  mode: ProgressBarMode = 'buffer';
  progressValue = 0;
  bufferValue = 0;
  finalValue: string = "20%";

  @Input() title: string = "Texto de muestra";
  @Input() delay: number = 500;
  @Input() targetValue: number = 80;
  @Input() duration: number = 3000;

  private observer: IntersectionObserver;

  constructor(private elementRef: ElementRef) {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadProgress();
          this.observer.unobserve(this.elementRef.nativeElement); // Dejar de observar después de iniciar
        }
      });
    });
  }

  ngAfterViewInit() {
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect(); // Limpia el observador cuando el componente se destruya
  }

  loadProgress() {
    const interval = 30; // Intervalo en milisegundos para la actualización
    const totalSteps = Math.ceil(this.duration / interval); // Número total de pasos
    const increment = this.targetValue / totalSteps; // Incremento por paso

    let currentStep = 0;

    setTimeout(() => {
      const timer = setInterval(() => {
        if (currentStep < totalSteps && this.progressValue < this.targetValue) {
          this.progressValue += increment;
          this.finalValue = Math.min(Math.round(this.progressValue), this.targetValue) + '%'; // Asegúrate de no sobrepasar el targetValue
          currentStep++;
        } else {
          this.progressValue = this.targetValue; 
          this.finalValue = this.progressValue + '%';
          clearInterval(timer);
        }
      }, interval);
    }, this.delay);
  }
}

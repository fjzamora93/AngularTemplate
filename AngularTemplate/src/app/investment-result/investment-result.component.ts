import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InvestmentService } from './investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
    @Input() investment?: InvestmentService | null = null;



}

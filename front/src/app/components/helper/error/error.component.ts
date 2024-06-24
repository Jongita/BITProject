import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  @Input()
  public isError:boolean=false;

  @Input()
  public text:String=""
}


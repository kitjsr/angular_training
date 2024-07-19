import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './publisher.component.html',
  styleUrl: './publisher.component.css'
})
export class PublisherComponent {
}

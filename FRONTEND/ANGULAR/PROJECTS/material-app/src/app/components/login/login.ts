import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard } from "@angular/material/card";
import { MatError, MatFormField, MatLabel,MatInput } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatCard, FormsModule, MatFormField, MatLabel, MatInput, MatError, CommonModule, MatButton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

onSubmit(arg0: any) {
console.log(arg0);
}

}

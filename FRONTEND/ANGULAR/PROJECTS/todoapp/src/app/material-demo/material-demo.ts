import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@Component({
  selector: 'app-material-demo',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],

  templateUrl: './material-demo.html',
  styleUrl: './material-demo.css'
})
export class MaterialDemo {
value = 'Clear me';

}

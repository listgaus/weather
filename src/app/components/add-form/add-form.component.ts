import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Input() options: string[];
  @Input() isListedError: Boolean = false;
  @Output() onCityPicked = new EventEmitter();

  citiesForm: FormGroup;
  name: string = '';
  units: string = ''; 

  ngOnInit(): void {
    this.citiesForm = new FormGroup({
       name: new FormControl(this.name, [Validators.required]),
       units: new FormControl(this.units, [Validators.required]),
    })
  }

  onSubmit(){
    this.onCityPicked.emit(this.citiesForm.value);
    this.citiesForm.reset();
  }
}

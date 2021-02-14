import {Component, Input} from '@angular/core';
import { CityInfo } from 'src/app/models/city';

@Component({
    selector: 'city-info',
    templateUrl: './city-info.component.html', 
    styleUrls: ['./city-info.component.scss'],
})
export class CityComponent {
    @Input() city: CityInfo;
    constructor() {
        console.log('city', this.city);
        
    }


}

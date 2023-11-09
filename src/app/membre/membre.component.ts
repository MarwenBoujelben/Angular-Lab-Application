import { Component } from '@angular/core';
import { GLOBAL } from '../appConfig';
import { Member } from 'src/Models/Member';
@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent {
  dataSource : Member[]=GLOBAL._DB.members;
displayedColumns: string[] = ['id', 'cin', 'name','type','cv','createddate','action'];

}

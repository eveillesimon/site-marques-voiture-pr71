import {Component, Input} from '@angular/core';
import {Model} from "../../models/model";
import {ModelService} from "../../services/model.service";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-model-card',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './model-card.component.html',
  styleUrl: './model-card.component.css'
})
export class ModelCardComponent{
  @Input() model!: Model;

  constructor() {
  }
}

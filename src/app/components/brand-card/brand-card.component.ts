import {Component, Input, OnInit} from '@angular/core';
import {Brand} from "../../models/brand";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './brand-card.component.html',
  styleUrl: './brand-card.component.css'
})
export class BrandCardComponent implements OnInit{
  @Input() brand!: Brand;
  constructor() {
  }
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {Brand} from "../../models/brand";
import {BrandService} from "../../services/brand.service";
import {BrandCardComponent} from "../brand-card/brand-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    BrandCardComponent,
    NgForOf
  ],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.css'
})
export class BrandsListComponent{
  brands: Brand[] = []

  constructor(private brandService: BrandService) {
    this.brandService.findAll().subscribe(data => {
      this.brands = data;
      console.log("coucou")
    });
  }
}

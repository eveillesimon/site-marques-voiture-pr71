import {Component, OnInit} from '@angular/core';
import {Model} from "../../models/model";
import {ModelService} from "../../services/model.service";
import {BrandCardComponent} from "../brand-card/brand-card.component";
import {NgForOf} from "@angular/common";
import {ModelCardComponent} from "../model-card/model-card.component";
import {ActivatedRoute} from "@angular/router";
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../models/brand";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [
    BrandCardComponent,
    NgForOf,
    ModelCardComponent
  ],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.css'
})
export class ModelsListComponent implements OnInit {
  public brand!: Brand;
  models: Model[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private modelService: ModelService,
              private brandService: BrandService) {
  }

  ngOnInit() {
    this.brandService.findByName(this.activatedRoute.snapshot.paramMap.get("name") || "")
      .pipe(switchMap(brands => {
        if (brands.length >= 1) {
          this.brand = brands[0];
          return this.modelService.findByBrand(this.brand.id);
        }
        alert("Brand name unknown");
        return this.modelService.findByBrand(1);
      }))
      .subscribe( models => { this.models = models; })
  }
}

import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Brand} from "../../models/brand";
import {BrandService} from "../../services/brand.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-brand-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-brand-form.component.html',
  styleUrl: './add-brand-form.component.css'
})
export class AddBrandFormComponent {
  form = new FormGroup(
    {
      id: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      market: new FormControl('', [Validators.required]),
      founder: new FormControl('', [Validators.required]),
      foundation: new FormControl(new Date(2024, 1), [Validators.required]),
      country: new FormControl('', [Validators.required]),
      image: new FormControl('')
    }
  )

  constructor(private brandService: BrandService,
              private router: Router) {
  }

  get id(): AbstractControl | null {
    return this.form.get('id');
  }
  get name(): AbstractControl | null {
    return this.form.get('name');
  }

  get market(): AbstractControl | null {
    return this.form.get('market');
  }

  get founder(): AbstractControl | null {
    return this.form.get('founder');
  }

  get foundation(): AbstractControl | null {
    return this.form.get('foundation');
  }

  get country(): AbstractControl | null {
    return this.form.get('country');
  }

  get image(): AbstractControl | null {
    return this.form.get('name');
  }

  onSubmit(): void {
    let brand: Brand = new Brand(
      this.id?.value ?? 0,
      this.name?.value ?? "",
      this.market?.value ?? "",
      this.founder?.value ?? "",
      this.foundation?.value ?? new Date(2024, 1),
      this.country?.value ?? "",
      this.image?.value ?? ""
    );

    console.log(brand);

    this.brandService.add(brand).subscribe(() => {
      console.log('Brand added');
      this.router.navigate(['/', 'brands']);
    });
  }
}

import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Model} from "../../models/model";
import {ModelService} from "../../services/model.service";
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../models/brand";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-model-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-model-form.component.html',
  styleUrl: './add-model-form.component.css'
})
export class AddModelFormComponent {
  constructor(private router: Router,
              private modelService: ModelService,
              private brandService: BrandService) {
  }

  form = new FormGroup(
    {
      id: new FormControl(0, [Validators.required]),
      brandId: new FormControl(0, [Validators.required]),
      name: new FormControl("", [Validators.required]),
      release: new FormControl(new Date(2024, 1), [Validators.required]),
      engine: new FormControl('', [Validators.required]),
      horsePower: new FormControl(0, [Validators.required]),
      image: new FormControl('')
    }
  )

  get id(): AbstractControl | null  {
    return this.form.get('id');
  }

  get brandId(): AbstractControl | null  {
    return this.form.get('brandId');
  }

  get name(): AbstractControl | null  {
    return this.form.get('name');
  }

  get release(): AbstractControl | null  {
    return this.form.get('release');
  }

  get engine(): AbstractControl | null {
    return this.form.get('engine')
  }

  get horsePower(): AbstractControl | null  {
    return this.form.get('horsePower');
  }

  get image(): AbstractControl | null {
    return this.form.get('image');
  }

  onSubmit(): void {
    let model: Model = new Model(
      this.id?.value ?? 0,
      this.brandId?.value ?? 0,
      this.name?.value ?? "",
      this.release?.value ?? new Date(2024, 1),
      this.engine?.value ?? "",
      this.horsePower?.value ?? 100,
      this.image?.value ?? ""
    );

    console.log(model);

    let brand: Brand;
    this.brandService.findById(model.brandId).subscribe(data => {
      brand = data;
    });

    this.modelService.add(model).subscribe(() => {
      console.log('Model added');
      this.router.navigate(['/', 'brands', '/', brand.name]);
    });
  }
}

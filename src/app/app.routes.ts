import { Routes } from '@angular/router';
import {BrandsListComponent} from "./components/brands-list/brands-list.component";
import {AddBrandFormComponent} from "./components/add-brand-form/add-brand-form.component";
import {ModelsListComponent} from "./components/models-list/models-list.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AddModelFormComponent} from "./components/add-model-form/add-model-form.component";

export const routes: Routes = [
  {path: "", redirectTo: "brands", pathMatch: "full"},
  {path: "contact", component: ContactComponent},
  {path: 'brands', component: BrandsListComponent},
  {path: 'addbrand', component: AddBrandFormComponent},
  {path: 'brands/:name', component: ModelsListComponent},
  {path: "addmodel", component: AddModelFormComponent}
];

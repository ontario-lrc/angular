import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsPageAlertComponent} from "./ods-page-alert.component";

@NgModule(
	{
		declarations: [OdsPageAlertComponent],
		exports: [OdsPageAlertComponent],
		imports: [CommonModule]
	}
)

export class OdsPageAlertModule{}
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsStepIndicatorComponent} from "./ods-step-indicator.component";

@NgModule(
	{
		declarations: [OdsStepIndicatorComponent],
		exports: [OdsStepIndicatorComponent],
		imports: [CommonModule]
	}
)

export class OdsStepIndicatorModule{}
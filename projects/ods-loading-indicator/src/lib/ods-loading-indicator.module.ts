import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsLoadingIndicatorComponent} from "./ods-loading-indicator.component";

@NgModule(
	{
		declarations: [OdsLoadingIndicatorComponent],
		exports: [OdsLoadingIndicatorComponent],
		imports: [CommonModule]
	}
)

export class OdsLoadingIndicatorModule{}
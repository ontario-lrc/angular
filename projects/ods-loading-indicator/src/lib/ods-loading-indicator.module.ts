import {NgModule} from "@angular/core";
import {OdsLoadingIndicatorComponent} from "./ods-loading-indicator.component";
import {CommonModule} from "@angular/common";

@NgModule(
{
	declarations:
	[
		OdsLoadingIndicatorComponent
	],
	imports:[CommonModule],
	exports:
	[
		OdsLoadingIndicatorComponent
	]
})

export class OdsLoadingIndicatorModule{}
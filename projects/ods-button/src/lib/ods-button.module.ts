import {NgModule} from "@angular/core";
import {OdsButtonComponent} from "./ods-button.component";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule(
{
	declarations:
	[
		OdsButtonComponent
	],
	imports:
	[
		MatTooltipModule
	],
	exports:
	[
		OdsButtonComponent
	]
})

export class OdsButtonModule{}
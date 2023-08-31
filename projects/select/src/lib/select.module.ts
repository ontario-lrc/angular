import {NgModule} from "@angular/core";
import {OdsSelectComponent} from "./select.component";
import {OdsHintExpanderModule} from "hint-expander";

@NgModule(
{
	declarations:
	[
		OdsSelectComponent
	],
	exports:
	[
		OdsSelectComponent
	],
	imports:
	[
		OdsHintExpanderModule
	]
})

export class OdsSelectModule{}
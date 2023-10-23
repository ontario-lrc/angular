import {NgModule} from "@angular/core";
import {OdsAccordionComponent} from "./accordion.component";
import {CommonModule} from "@angular/common";

@NgModule(
{
	declarations:
	[
		OdsAccordionComponent
	],
	imports:
	[
		CommonModule
	],
	exports:
	[
		OdsAccordionComponent
	]
})

export class AccordionModule{}
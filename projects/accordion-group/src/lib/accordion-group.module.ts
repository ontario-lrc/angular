import {NgModule} from "@angular/core";
import {OdsAccordionGroupComponent} from "./accordion-group.component";
import {AccordionGroupService} from "@ontario-lrc/angular-services/dist/accordion-group";

@NgModule(
{
	declarations:
	[
		OdsAccordionGroupComponent
	],
	imports:[],
	providers:
	[
		AccordionGroupService
	],
	exports:
	[
		OdsAccordionGroupComponent
	]
})

export class OdsAccordionGroupModule{}
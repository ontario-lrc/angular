import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsAccordionComponent} from "./ods-accordion.component";

@NgModule(
	{
		declarations: [OdsAccordionComponent],
		exports: [OdsAccordionComponent],
		imports: [CommonModule]
	}
)

export class OdsAccordionModule{}
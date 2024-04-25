import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsAccordionGroupComponent} from "./ods-accordion-group.component";

@NgModule(
	{
		declarations: [OdsAccordionGroupComponent],
		exports: [OdsAccordionGroupComponent],
		imports: [CommonModule]
	}
)

export class OdsAccordionGroupModule{}
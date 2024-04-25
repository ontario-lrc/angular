import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OdsBreadcrumbsComponent} from "./ods-breadcrumbs.component";
import {RouterModule} from "@angular/router";

@NgModule(
	{
		declarations: [OdsBreadcrumbsComponent],
		exports: [OdsBreadcrumbsComponent],
		imports:
		[
			CommonModule,
			RouterModule
		]
	}
)

export class OdsBreadcrumbsModule{}
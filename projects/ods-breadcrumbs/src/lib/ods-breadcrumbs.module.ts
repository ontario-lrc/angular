import {NgModule} from "@angular/core";
import {OdsBreadcrumbsComponent} from "./ods-breadcrumbs.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule(
{
	declarations:
	[
		OdsBreadcrumbsComponent
	],
	imports:
	[
		CommonModule,
		RouterModule
	],
	exports:
	[
		OdsBreadcrumbsComponent
	]
})

export class OdsBreadcrumbsModule{}
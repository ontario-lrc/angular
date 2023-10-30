import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsBreadcrumbsInterface} from "./ods-breadcrumbs.interface";

@Component(
{
	selector: "ods-breadcrumbs",
	templateUrl: "./ods-breadcrumbs.component.html",
	styleUrls: ["./ods-breadcrumbs.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OdsBreadcrumbsComponent
{
	@Input({required: true}) breadcrumbs!: OdsBreadcrumbsInterface[];

	constructor(){}
}
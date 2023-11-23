import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsBreadcrumbsType} from "./ods-breadcrumbs.type";

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
	@Input({required: true}) breadcrumbs!: OdsBreadcrumbsType[];

	constructor(){}
}
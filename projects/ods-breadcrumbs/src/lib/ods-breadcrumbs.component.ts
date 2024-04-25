import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsBreadcrumb} from "./ods-breadcrumb.interface";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-breadcrumbs",
		styleUrls: ["./ods-breadcrumbs.component.scss"],
		templateUrl: "./ods-breadcrumbs.component.html"
	}
)

export class OdsBreadcrumbsComponent
{
	@Input({required: true}) breadcrumbs!: OdsBreadcrumb[];
}
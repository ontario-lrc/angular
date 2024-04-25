import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsLoadingIndicatorType} from "./ods-loading-indicator.constants";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-loading-indicator",
		styleUrls: ["./ods-loading-indicator.component.scss"],
		templateUrl: "./ods-loading-indicator.component.html"
	}
)

export class OdsLoadingIndicatorComponent
{
	@Input({required: true}) type!: OdsLoadingIndicatorType;
}
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsLoadingIndicatorType} from "./ods-loading-indicator.component.constants";

@Component(
{
	selector: "ods-loading-indicator",
	templateUrl: "./ods-loading-indicator.component.html",
	styleUrls: ["./ods-loading-indicator.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsLoadingIndicatorComponent
{
	@Input({required: true}) type!: OdsLoadingIndicatorType;

	constructor(){}
}
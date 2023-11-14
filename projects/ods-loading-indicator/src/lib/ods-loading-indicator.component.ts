import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

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

const OdsLoadingIndicatorType =
{
	OVERLAY: "overlay" as "overlay",
	section: "section" as "section"
};

type OdsLoadingIndicatorType = (typeof OdsLoadingIndicatorType)[keyof typeof OdsLoadingIndicatorType];

export{OdsLoadingIndicatorType};
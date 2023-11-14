import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";

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

}
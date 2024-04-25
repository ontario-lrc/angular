import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-step-indicator",
		styleUrls: ["./ods-step-indicator.component.scss"],
		templateUrl: "./ods-step-indicator.component.html"
	}
)

export class OdsStepIndicatorComponent
{
	@Input() stepText!: string;
	@Input() hasBackButton: boolean = false;
	@Input() backText!: string;
	@Input() chevronLeftAltText!: string;
}
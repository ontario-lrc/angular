import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-step-indicator",
	templateUrl: "./ods-step-indicator.component.html",
	styleUrls: ["./ods-step-indicator.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsStepIndicatorComponent
{
	@Input() stepText!: string;
	@Input() hasBackButton: boolean = false;
	@Input() backText!: string;
	@Input() chevronLeftAltText!: string;
	
	constructor(){}
}
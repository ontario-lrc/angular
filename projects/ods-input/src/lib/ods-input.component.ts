import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-input",
	templateUrl: "./ods-input.component.html",
	styleUrls: ["./ods-input.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsInputComponent
{
	@Input() id!: string;
	@Input() type: string = "text";
	@Input() label: string = "Missing text";
	@Input() isRequired: boolean = false;
	@Input() requiredText!: string;
	@Input() hintText?: string;
	@Input() min?: number;
	@Input() max?: number;
	
	constructor(){}
}
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-input",
		templateUrl: "./ods-input.component.html"
	}
)

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

	protected get getInputHintText(): string
	{
		return `signIn-hint-text-${this.id}`;
	}

	protected get getInputId(): string
	{
		return `signIn-input-${this.id}`;
	}

	protected get getLabelFor(): string
	{
		return `signIn-input-${this.id}`;
	}
}
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-hint-expander",
		styleUrls: ["./ods-hint-expander.component.scss"],
		templateUrl: "./ods-hint-expander.component.html"
	}
)

export class OdsHintExpanderComponent
{
	@Input() id!: string;
	@Input() shortHintText!: string;
	@Input() longHintText!: string;
	@Input() chevronUpAltText!: string;
	@Input() chevronDownAltText!: string;

	protected get getHintExpanderButtonId(): string
	{
		return `hint-expander-button-${this.id}`;
	}

	protected get getHintExpanderContentId(): string
	{
		return `hint-expander-content-${this.id}`;
	}
}
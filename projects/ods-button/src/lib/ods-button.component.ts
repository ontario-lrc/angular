import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsButtonColour, OdsButtonDegree} from "./ods-button.constants";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-button",
		styleUrls: ["./ods-button.component.scss"],
		templateUrl: "./ods-button.component.html"
	}
)

export class OdsButtonComponent
{
	@Input() id!: string;
	@Input() degree: OdsButtonDegree = OdsButtonDegree.PRIMARY;
	@Input() colour: OdsButtonColour = OdsButtonColour.DEFAULT;
	@Input({required: true}) clickMethod!: () => void;

	protected executeClickMethod(): void
	{
		if(this.clickMethod)
		{
			this.clickMethod();
		}
	}
}
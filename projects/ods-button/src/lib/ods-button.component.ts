import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-button",
	templateUrl: "./ods-button.component.html",
	styleUrls: ["./ods-button.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsButtonComponent
{
	@Input() id!: string;
	@Input() degree: OdsButtonDegree = OdsButtonDegree.PRIMARY;
	@Input() colour: OdsButtonColour = OdsButtonColour.DEFAULT;
	@Input() text: string = "";

	@Output() onClick: EventEmitter<void> = new EventEmitter();

	constructor(){}
}

const OdsButtonDegree =
{
	PRIMARY: "primary" as "primary",
	SECONDARY: "secondary" as "secondary",
	TERTIARY: "tertiary" as "tertiary"
};

const OdsButtonColour =
{
	DEFAULT: "default" as "default",
	GREEN: "green" as "green",
	RED: "red" as "red"
};

type OdsButtonDegree = (typeof OdsButtonDegree)[keyof typeof OdsButtonDegree];
type OdsButtonColour = (typeof OdsButtonColour)[keyof typeof OdsButtonColour];

export{OdsButtonDegree};
export{OdsButtonColour};
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-select",
	templateUrl: "./select.component.html",
	styleUrls: ["./select.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsSelectComponent
{
	@Input() id!: string;
	@Input() label: string = "Missing text";
	@Input() isRequired: boolean = false;
	@Input() requiredText!: string;
	@Input() initOptionText!: string;
	@Input() options!: OdsSelectInterface[];
	@Input() hintExpanderID?: string;
	@Input() hintExpanderShortText?: string;
	@Input() hintExpanderLongCode?: string;

	@Output() onSelect: EventEmitter<void> = new EventEmitter();

	constructor(){}
}

export interface OdsSelectInterface
{
	value: string,
	text: string
}
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-select",
	templateUrl: "./ods-select.component.html",
	styleUrls: ["./ods-select.component.scss"],
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

	@Output() onSelect: EventEmitter<void> = new EventEmitter();

	constructor(){}
}

export interface OdsSelectInterface
{
	value: string,
	text: string
}
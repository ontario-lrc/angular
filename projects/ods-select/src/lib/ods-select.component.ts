import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from "@angular/core";
import {OdsSelectOption} from "./ods-select.interface";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-select",
		styleUrls: ["./ods-select.component.scss"],
		templateUrl: "./ods-select.component.html"
	}
)

export class OdsSelectComponent
{
	@Input() id!: string;
	@Input() label: string = "Missing text";
	@Input() isRequired: boolean = false;
	@Input() requiredText!: string;
	@Input() initOptionText!: string;
	@Input() options!: OdsSelectOption[];

	@Output() selected: EventEmitter<void> = new EventEmitter();

	protected get getDropdownIdAndName(): string
	{
		return `dropdown-${this.id}`;
	}
}
import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-hint-expander",
	templateUrl: "./hint-expander.component.html",
	styleUrls: ["./hint-expander.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsHintExpanderComponent
{
	@Input() id!: string;
	@Input() shortHintText!: string;
	@Input() longHintText!: string;
	@Input() chevronUpAltText!: string;
	@Input() chevronDownAltText!: string;
	
	constructor(){}
}
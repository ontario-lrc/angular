import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import {OdsPageAlertHeadingLevel, OdsPageAlertType} from "./ods-page-alert.constants";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-page-alert",
		styleUrls: ["./ods-page-alert.component.scss"],
		templateUrl: "./ods-page-alert.component.html"
	}
)

export class OdsPageAlertComponent
{
	@Input() type: OdsPageAlertType = OdsPageAlertType.INFORMATION;
	@Input({required: true}) headingLevel!: OdsPageAlertHeadingLevel;
	@Input({required: true}) heading!: string;
	@Input({required: true}) iconAltText!: string;
	@Input({required: true}) iconFolder!: string;

	protected get getIconPath(): string
	{
		return `${this.iconFolder}/ontario-icon-alert-${this.type}.svg`;
	}
}
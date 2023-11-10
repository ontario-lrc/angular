import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-page-alert",
	templateUrl: "./ods-page-alert.component.html",
	styleUrls: ["./ods-page-alert.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsPageAlertComponent
{
	@Input() type: OdsPageAlertType = OdsPageAlertType.INFORMATION;
	@Input({required: true}) headingLevel!: OdsPageAlertHeadingLevel;
	@Input({required: true}) heading!: string;
	@Input({required: true}) iconAltText!: string;
	@Input({required: true}) iconFolder!: string;
}

const OdsPageAlertType =
{
	INFORMATION: "information" as "information",
	WARNING: "warning" as "warning",
	SUCCESS: "success" as "success",
	ERROR: "error" as "error"
};

const OdsPageAlertHeadingLevel =
{
	H1: "h1" as "h1",
	H2: "h2" as "h2",
	H3: "h3" as "h3",
	H4: "h4" as "h4",
	H5: "h5" as "h5",
	H6: "h6" as "h6"
};

type OdsPageAlertType = (typeof OdsPageAlertType)[keyof typeof OdsPageAlertType];
type OdsPageAlertHeadingLevel = (typeof OdsPageAlertHeadingLevel)[keyof typeof OdsPageAlertHeadingLevel]

export{OdsPageAlertType};
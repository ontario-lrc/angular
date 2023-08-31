import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";

@Component(
{
	selector: "ods-page-alert",
	templateUrl: "./page-alert.component.html",
	styleUrls: ["./page-alert.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsPageAlertComponent
{
	@Input() type: OdsPageAlertType = OdsPageAlertType.INFORMATIONAL;
	@Input() heading!: string;
	@Input() message!: string;
	@Input() informationalAltTtext!: string;
	@Input() warningAltText!: string;
	@Input() successAltText!: string;
	@Input() errorAltText!: string;
}

const OdsPageAlertType =
{
	INFORMATIONAL: "informational" as "informational",
	WARNING: "warning" as "warning",
	SUCCESS: "success" as "success",
	ERROR: "error" as "error"
};

type OdsPageAlertType = (typeof OdsPageAlertType)[keyof typeof OdsPageAlertType];

export{OdsPageAlertType};
import {AfterViewInit, ChangeDetectionStrategy, Component, Host, Input, ModuleWithProviders, ViewEncapsulation} from "@angular/core";
import {OdsAccordionGroupService} from "@ontario-lrc/angular-services/dist/ods-accordion-group-service";

@Component(
{
	selector: "ods-accordion-group",
	templateUrl: "./ods-accordion-group.component.html",
	styleUrls: ["./ods-accordion-group.component.scss"],
	providers: [OdsAccordionGroupService],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsAccordionGroupComponent implements AfterViewInit
{
	@Input({required: true}) expandAll!: string;
	@Input({required: true}) collapseAll!: string;
	@Input({required: false}) onlyOneOpen: boolean = false;

	constructor(@Host() private _accordionGroupService: OdsAccordionGroupService){}

	ngAfterViewInit(): void
	{
		this._setup();
	}

	private _setup(): void
	{
		if(this.onlyOneOpen)
		{
			const accordions: HTMLButtonElement[] = this._accordionGroupService.getAccordionsInGroup;
			
			accordions.forEach((accordion: HTMLButtonElement) =>
			{
				this._accordionGroupService.setOnClickEvent = accordion;
			});
		}
	}
}
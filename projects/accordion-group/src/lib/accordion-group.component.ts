import {AfterViewInit, ChangeDetectionStrategy, Component, Host, Input, ModuleWithProviders, ViewEncapsulation} from "@angular/core";
import {AccordionGroupService} from "@ontario-lrc/angular-services/dist/accordion-group";

@Component(
{
	selector: "ods-accordion-group",
	templateUrl: "./accordion-group.component.html",
	styleUrls: ["./accordion-group.component.scss"],
	// providers: [AccordionGroupService],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsAccordionGroupComponent implements AfterViewInit
{
	@Input({required: true}) expandAll!: string;
	@Input({required: true}) collapseAll!: string;
	@Input({required: false}) onlyOneOpen: boolean = false;

	// constructor(@Host() private _accordionGroupService: AccordionGroupService){}
	constructor(private _accordionGroupService: AccordionGroupService){}

	ngAfterViewInit(): void
	{
		this._setup();
	}

	private _setup(): void
	{
		if(this.onlyOneOpen)
		{
			this._accordionGroupService.getAccordionsInGroup.forEach((accordion: HTMLButtonElement) =>
			{
				this._accordionGroupService.setOnClickEvent = accordion;
			});
		}
	}
}
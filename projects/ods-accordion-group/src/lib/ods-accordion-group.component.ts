import {AfterViewInit, ChangeDetectionStrategy, Component, Host, Injector, Input, ViewEncapsulation} from "@angular/core";
import {OdsAccordionGroupService} from "@ontario-lrc/angular-services/dist/ods-accordion-group-service";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		providers: [OdsAccordionGroupService],
		selector: "ods-accordion-group",
		styleUrls: ["./ods-accordion-group.component.scss"],
		templateUrl: "./ods-accordion-group.component.html"
	}
)

export class OdsAccordionGroupComponent implements AfterViewInit
{
	@Input({required: true}) expandAll!: string;
	@Input({required: true}) collapseAll!: string;
	@Input({required: false}) onlyOneOpen: boolean = false;

	#accordionGroupService: OdsAccordionGroupService;

	constructor(@Host() private _injector: Injector)
	{
		this.#accordionGroupService = this._injector.get(OdsAccordionGroupService);
	}

	ngAfterViewInit(): void
	{
		this._setup();
	}

	get getAccordionGroupService(): OdsAccordionGroupService
	{
		return this.#accordionGroupService;
	}

	private _setup(): void
	{
		if(this.onlyOneOpen)
		{
			const accordions: HTMLButtonElement[] = this.#accordionGroupService.getAccordionsInGroup;

			accordions.forEach((accordion: HTMLButtonElement) =>
			{
				this.#accordionGroupService.setOnClickEvent = accordion;
			});
		}
	}
}
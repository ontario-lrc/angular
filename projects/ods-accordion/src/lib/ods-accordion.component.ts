import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Injector, Input, OnInit, QueryList, Renderer2, ViewChildren, ViewEncapsulation, inject} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {LoadScriptService} from "@ontario-lrc/angular-services/dist/load-script-service";
import {OdsAccordionGroupService} from "@ontario-lrc/angular-services/dist/ods-accordion-group-service";
import {OdsAccordionHeadingLevel} from "./ods-accordion.constants";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-accordion",
		styleUrls: ["./ods-accordion.component.scss"],
		templateUrl: "./ods-accordion.component.html"
	}
)

export class OdsAccordionComponent implements OnInit, AfterViewInit
{
	@Input({required: true}) accordionID!: string;
	@Input({required: true}) headingLevel!: OdsAccordionHeadingLevel;
	@Input({required: true}) title!: string;
	@Input({required: true}) iconFolder!: string;
	@Input({required: true}) closeIconAlt!: string;
	@Input({required: true}) openIconAlt!: string;
	@Input({required: true}) ontarioExpandCollapseScriptLocation!: string;

	@ViewChildren("accordionGroup") accordionGroup!: QueryList<ElementRef<HTMLButtonElement>>;

	readonly #SCRIPT: string = "/ontario-expand-collapse.js";

	#scriptElement!: HTMLScriptElement | undefined;
	#loadScriptService: LoadScriptService;
	#renderer: Renderer2;
	#odsAccordionGroupService: OdsAccordionGroupService | null;
	#document: Document;

	constructor(private _injector: Injector)
	{
		this.#loadScriptService = this._injector.get(LoadScriptService);
		this.#renderer = this._injector.get(Renderer2);
		this.#odsAccordionGroupService = inject(OdsAccordionGroupService, {skipSelf: true}); // Old: this.#odsAccordionGroupService = this._injector.get(OdsAccordionGroupService, null, InjectFlags.SkipSelf);
		this.#document = this._injector.get(DOCUMENT);
	}

	ngOnInit(): void
	{
		this.#removeScript();
	}

	ngAfterViewInit(): void
	{
		this.#addScript();
		this.#setup();
	}

	protected closeAccordionPanel(): void
	{
		this.accordionGroup.last?.nativeElement.click();
	}

	protected get getAccordionId(): string
	{
		return `accordion-${this.accordionID}`;
	}

	protected get getAccordionContentId(): string
	{
		return `accordion-content-${this.accordionID}`;
	}

	protected get getAccordionButtonId(): string
	{
		return `accordion-button-id-${this.accordionID}`;
	}

	protected get getAccordionButtonAriaControls(): string
	{
		return `accordion-content-${this.accordionID}`;
	}

	protected get getChevronDownIcon(): string
	{
		return `${this.iconFolder}/ontario-icon-chevron-down.svg`;
	}

	protected get getChevronUpIcon(): string
	{
		return `${this.iconFolder}/ontario-icon-chevron-up.svg`;
	}

	#addScript(): void
	{
		const scripts: Array<HTMLScriptElement> = Array.from(this.#document.scripts),
			scriptFound: boolean = scripts.some((script: HTMLScriptElement) =>
			{
				if(script.src.includes(this.#SCRIPT))
				{
					this.#scriptElement = script;

					return true;
				}

				return false;
			});

		if(!scriptFound)
		{
			const scriptLocation: string = this.ontarioExpandCollapseScriptLocation + this.#SCRIPT;

			this.#scriptElement = this.#loadScriptService.loadScript(this.#renderer, scriptLocation);
		}
	}

	#removeScript(): void
	{
		if(this.#scriptElement)
		{
			this.#loadScriptService.removeScript(this.#renderer, this.#scriptElement);
		}
	}

	#setup(): void
	{
		if(!this.#odsAccordionGroupService)
		{
			throw new Error("No ODS Accordion Group Service found");
		}

		this.#odsAccordionGroupService.addToAccordionsInGroup = this.accordionGroup.last.nativeElement;
	}
}
import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, SkipSelf, ViewChildren, ViewEncapsulation} from "@angular/core";
import {LoadScriptService} from "@ontario-lrc/angular-services/dist/load-script";
import {AccordionGroupService} from "@ontario-lrc/angular-services/dist/accordion-group";

@Component(
{
	selector: "ods-accordion",
	templateUrl: "./ods-accordion.component.html",
	styleUrls: ["./ods-accordion.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsAccordionComponent implements OnInit, AfterViewInit
{
	@Input({required: true}) accordionID: string = "UNDEFINED";
	@Input({required: true}) headingLevel!: OdsAccordionHeadingLevel;
	@Input({required: true}) title!: string;
	@Input({required: true}) iconFolder!: string;
	@Input({required: true}) closeIconAlt!: string;
	@Input({required: true}) openIconAlt!: string;
	@Input({required: true}) ontarioExpandCollapseScriptLocation!: string;

	@Output() accordionTriggered: EventEmitter<ElementRef<HTMLButtonElement>> = new EventEmitter<ElementRef<HTMLButtonElement>>;

	@ViewChildren("accordionGroup") accordionGroup!: QueryList<ElementRef<HTMLButtonElement>>;

	private _script: string = "/ontario-expand-collapse.js";
	private _scriptElement!: HTMLScriptElement;

	// constructor(private _loadScriptService: LoadScriptService, private _renderer: Renderer2, @SkipSelf() private _accordionGroupService: AccordionGroupService){}
	constructor(private _loadScriptService: LoadScriptService, private _renderer: Renderer2, private _accordionGroupService: AccordionGroupService){}

	ngOnInit(): void
	{
		this._removeScript();
		this._addScript();
	}

	ngAfterViewInit(): void
	{
		this._addScript();
		this._setup();
	}

	protected closeAccordionPanel(): void
	{
		this.accordionGroup.last.nativeElement.click();
	}

	private _addScript(): void
	{
		Array.from(document.scripts).forEach((script: HTMLScriptElement) =>
		{
			if(script.src.includes(this._script))
			{
				this._scriptElement = script;
			}
		});

		if(!this._scriptElement)
		{
			this._scriptElement = this._loadScriptService.loadScript(this._renderer, (this.ontarioExpandCollapseScriptLocation + this._script));
		}
	}

	private _removeScript(): void
	{
		if(this._scriptElement)
		{
			this._loadScriptService.removeScript(this._renderer, this._scriptElement)
		}
	}

	private _setup(): void
	{
		this._accordionGroupService.addToAccordionsInGroup = this.accordionGroup.last.nativeElement;
	}
}

const OdsAccordionHeadingLevel =
{
	H1: "h1" as "h1",
	H2: "h2" as "h2",
	H3: "h3" as "h3",
	H4: "h4" as "h4",
	H5: "h5" as "h5",
	H6: "h6" as "h6"
};

type OdsAccordionHeadingLevel = (typeof OdsAccordionHeadingLevel)[keyof typeof OdsAccordionHeadingLevel]
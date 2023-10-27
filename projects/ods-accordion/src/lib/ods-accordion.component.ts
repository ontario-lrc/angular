import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, Renderer2, SkipSelf, ViewChildren, ViewEncapsulation} from "@angular/core";
import {LoadScriptService} from "@ontario-lrc/angular-services/dist/load-script-service";
import {OdsAccordionGroupService} from "@ontario-lrc/angular-services/dist/ods-accordion-group-service";

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
	@Input({required: true}) accordionID!: string;
	@Input({required: true}) headingLevel!: OdsAccordionHeadingLevel;
	@Input({required: true}) title!: string;
	@Input({required: true}) iconFolder!: string;
	@Input({required: true}) closeIconAlt!: string;
	@Input({required: true}) openIconAlt!: string;
	@Input({required: true}) ontarioExpandCollapseScriptLocation!: string;

	// @Output() accordionTriggered: EventEmitter<ElementRef<HTMLButtonElement>> = new EventEmitter<ElementRef<HTMLButtonElement>>;

	@ViewChildren("accordionGroup") accordionGroup!: QueryList<ElementRef<HTMLButtonElement>>;

	private readonly _script: string = "/ontario-expand-collapse.js";
	private _scriptElement!: HTMLScriptElement | undefined;

	constructor(private _loadScriptService: LoadScriptService, private _renderer: Renderer2, @SkipSelf() private _odsAccordionGroupService: OdsAccordionGroupService){}
	// constructor(private _loadScriptService: LoadScriptService, private _renderer: Renderer2, private _odsAccordionGroupService: OdsAccordionGroupService){}

	ngOnInit(): void
	{
		this._removeScript();
	}

	ngAfterViewInit(): void
	{
		this._addScript();
		this._setup();
	}

	protected closeAccordionPanel(): void
	{
		this._renderer.selectRootElement(this.accordionGroup.last?.nativeElement.click());
	}

	private _addScript(): void
	{
		// Array.from(document.scripts).forEach((script: HTMLScriptElement) =>
		// {
		// 	if(script.src.includes(this._script))
		// 	{
		// 		this._scriptElement = script;
		// 	}
		// });

		// if(!this._scriptElement)
		// {
		// 	this._scriptElement = this._loadScriptService.loadScript(this._renderer, (this.ontarioExpandCollapseScriptLocation + this._script));
		// }

		const scripts: Array<HTMLScriptElement> = Array.from(document.scripts);
		const scriptFound: boolean = scripts.some((script: HTMLScriptElement) =>
		{
			if(script.src.includes(this._script))
			{
				this._scriptElement = script;

				return true;
			}

			return false;
		});

		if(!scriptFound)
		{
			const scriptLocation: string = this.ontarioExpandCollapseScriptLocation + this._script;

			this._scriptElement = this._loadScriptService.loadScript(this._renderer, scriptLocation);
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
		this._odsAccordionGroupService.addToAccordionsInGroup = this.accordionGroup.last.nativeElement;
	}
}
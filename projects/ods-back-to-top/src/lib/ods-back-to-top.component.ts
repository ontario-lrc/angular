import {AfterViewInit, ChangeDetectionStrategy, Component, Injector, Input, Renderer2, ViewEncapsulation} from "@angular/core";
import {LoadScriptService} from "@ontario-lrc/angular-services/dist/load-script-service";

@Component(
	{
		changeDetection: ChangeDetectionStrategy.OnPush,
		encapsulation: ViewEncapsulation.None,
		selector: "ods-back-to-top",
		styleUrls: ["./ods-back-to-top.component.scss"],
		templateUrl: "./ods-back-to-top.component.html"
	}
)

export class OdsBackToTopComponent implements AfterViewInit
{
	@Input({required: true}) scriptFolder!: string;
	@Input({required: true}) iconFolder!: string;
	@Input({required: true}) iconAltText!: string;

	readonly #SCRIPT: string = "/back-to-top.js";

	#renderer: Renderer2;
	#loadScriptService: LoadScriptService;

	constructor(private _injector: Injector)
	{
		this.#renderer = this._injector.get(Renderer2);
		this.#loadScriptService = this._injector.get(LoadScriptService);
	}

	ngAfterViewInit(): void
	{
		const scriptLocation: string = this.scriptFolder + this.#SCRIPT;

		this.#loadScriptService.loadScript(this.#renderer, scriptLocation);
	}

	protected get getImageSrc(): string
	{
		return `${this.iconFolder}/ontario-icon-arrow-up.svg`;
	}
}
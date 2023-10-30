import {AfterViewInit, ChangeDetectionStrategy, Component, Input, Renderer2, ViewEncapsulation} from "@angular/core";
import {LoadScriptService} from "@ontario-lrc/angular-services/dist/load-script-service";

@Component(
{
	selector: 'ods-back-to-top',
	templateUrl: "./ods-back-to-top.component.html",
	styleUrls: ["./ods-back-to-top.component.scss"],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class OdsBackToTopComponent implements AfterViewInit
{
	@Input({required: true}) scriptFolder!: string;
	@Input({required: true}) text!: string;
	@Input({required: true}) iconFolder!: string;
	@Input({required: true}) iconAltText!: string;

	private readonly _script: string = "/back-to-top.js";

	constructor(private _renderer: Renderer2, private _loadScriptService: LoadScriptService){}

	ngAfterViewInit(): void
	{
		const scriptLocation: string = this.scriptFolder + this._script

		this._loadScriptService.loadScript(this._renderer, scriptLocation);
	}
}
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, NgModule } from '@angular/core';

class OdsHintExpanderComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: OdsHintExpanderComponent, selector: "ods-hint-expander", inputs: { id: "id", shortHintText: "shortHintText", longHintText: "longHintText", chevronUpAltText: "chevronUpAltText", chevronDownAltText: "chevronDownAltText" }, ngImport: i0, template: "<div class=\"ontario-hint-expander__container\">\r\n\t<button class=\"ontario-hint-expander__button\" id=\"hint-expander-button-{{id}}\" [attr.aria-controls]=\"'hint-expander-content-' + id\" aria-expanded=\"false\" data-toggle=\"ontario-collapse\">\r\n\t\t<span class=\"ontario-hint-expander__button-icon--close\">\r\n\t\t\t<img src=\"..\\assets\\ontario-icon-chevron-up.svg\" alt=\"{{chevronUpAltText}}\" aria-hidden=\"true\" />\r\n\t\t</span>\r\n\t\t\r\n\t\t<span class=\"ontario-hint-expander__button-icon--open\">\r\n\t\t\t<img src=\"..\\assets\\ontario-icon-chevron-down.svg\" alt=\"{{chevronDownAltText}}\" aria-hidden=\"true\" />\r\n\t\t</span>\r\n        \r\n\t\t<span innerHTML=\"{{shortHintText}}\">\r\n\t\t\t{{shortHintText}}\r\n\t\t</span>\r\n\t</button>\r\n\t\r\n\t<div class=\"ontario-hint-expander__content\" id=\"hint-expander-content-{{id}}\" [attr.aria-labelledby]=\"'hint-expander-button-' + id\" aria-hidden=\"true\" data-toggle=\"ontario-expander-content\" innerHTML=\"{{longHintText}}\">\r\n\t\t{{longHintText}}\r\n\t</div>\r\n</div>", styles: [".ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{box-shadow:0 0 0 4px #009adb;outline:4px solid transparent;transition:box-shadow .1s ease-in-out}.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem;width:100%;max-width:48rem}.ontario-hint a[x-apple-data-detectors]{color:inherit;cursor:none;text-decoration:none}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#06c;cursor:pointer;background:none;border:none;display:flex;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem;padding:0 .25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:.25rem}.ontario-hint-expander__button:hover{color:#00478f}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem 1.25rem;margin:0 0 1rem .25rem}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-input+.ontario-hint-expander__container{margin-top:-1.5rem!important}.ontario-checkboxes__item .ontario-hint-expander__container,.ontario-radios__item .ontario-hint-expander__container{margin-left:.5rem}.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:.75rem}@media screen and (max-width: 40em){.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:1rem}}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderComponent, decorators: [{
            type: Component,
            args: [{ selector: "ods-hint-expander", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ontario-hint-expander__container\">\r\n\t<button class=\"ontario-hint-expander__button\" id=\"hint-expander-button-{{id}}\" [attr.aria-controls]=\"'hint-expander-content-' + id\" aria-expanded=\"false\" data-toggle=\"ontario-collapse\">\r\n\t\t<span class=\"ontario-hint-expander__button-icon--close\">\r\n\t\t\t<img src=\"..\\assets\\ontario-icon-chevron-up.svg\" alt=\"{{chevronUpAltText}}\" aria-hidden=\"true\" />\r\n\t\t</span>\r\n\t\t\r\n\t\t<span class=\"ontario-hint-expander__button-icon--open\">\r\n\t\t\t<img src=\"..\\assets\\ontario-icon-chevron-down.svg\" alt=\"{{chevronDownAltText}}\" aria-hidden=\"true\" />\r\n\t\t</span>\r\n        \r\n\t\t<span innerHTML=\"{{shortHintText}}\">\r\n\t\t\t{{shortHintText}}\r\n\t\t</span>\r\n\t</button>\r\n\t\r\n\t<div class=\"ontario-hint-expander__content\" id=\"hint-expander-content-{{id}}\" [attr.aria-labelledby]=\"'hint-expander-button-' + id\" aria-hidden=\"true\" data-toggle=\"ontario-expander-content\" innerHTML=\"{{longHintText}}\">\r\n\t\t{{longHintText}}\r\n\t</div>\r\n</div>", styles: [".ontario-hint-expander__button:focus,.ontario-hint-expander__button:active{box-shadow:0 0 0 4px #009adb;outline:4px solid transparent;transition:box-shadow .1s ease-in-out}.ontario-hint{color:#4d4d4d;display:inline-block;margin:0 0 1rem;width:100%;max-width:48rem}.ontario-hint a[x-apple-data-detectors]{color:inherit;cursor:none;text-decoration:none}.ontario-hint-expander__container{max-width:48rem}.ontario-hint-expander__button{color:#06c;cursor:pointer;background:none;border:none;display:flex;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-size:1rem;text-align:left;margin:0 0 1rem;padding:0 .25rem 0 0}.ontario-hint-expander__button-icon--close{display:none;margin-right:.25rem}.ontario-hint-expander__button-icon--open{display:inline-block;margin-right:.25rem}.ontario-hint-expander__button:hover{color:#00478f}.ontario-hint-expander__button:active{color:#002142}.ontario-hint-expander__content{border-left:4px solid #cccccc;color:#1a1a1a;background-color:#f2f2f2;display:none;padding:1rem 1rem 1rem 1.25rem;margin:0 0 1rem .25rem}.ontario-hint-expander__content *:last-child{margin-bottom:0}.ontario-hint-expander__content img{width:100%}@media screen and (min-width: 40em){.ontario-hint-expander__content img{width:50%}}.ontario-hint-expander__content.ontario-expander__content--opened{display:block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--close{display:inline-block}.ontario-hint-expander__container.ontario-expander--active .ontario-hint-expander__button-icon--open{display:none}.ontario-input+.ontario-hint-expander__container{margin-top:-1.5rem!important}.ontario-checkboxes__item .ontario-hint-expander__container,.ontario-radios__item .ontario-hint-expander__container{margin-left:.5rem}.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:.75rem}@media screen and (max-width: 40em){.ontario-checkboxes__label+.ontario-hint-expander__container,.ontario-radios__label+.ontario-hint-expander__container{margin-top:1rem}}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { id: [{
                type: Input
            }], shortHintText: [{
                type: Input
            }], longHintText: [{
                type: Input
            }], chevronUpAltText: [{
                type: Input
            }], chevronDownAltText: [{
                type: Input
            }] } });

class OdsHintExpanderModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderModule, declarations: [OdsHintExpanderComponent], exports: [OdsHintExpanderComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: OdsHintExpanderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        OdsHintExpanderComponent
                    ],
                    imports: [],
                    exports: [
                        OdsHintExpanderComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of hint-expander
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OdsHintExpanderComponent, OdsHintExpanderModule };
//# sourceMappingURL=hint-expander.mjs.map

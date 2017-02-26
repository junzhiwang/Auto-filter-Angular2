System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ArtistUnitComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ArtistUnitComponent = (function () {
                function ArtistUnitComponent() {
                }
                return ArtistUnitComponent;
            }());
            ArtistUnitComponent = __decorate([
                core_1.Component({
                    selector: 'artist-unit',
                    templateUrl: '../partials/artistunit.html',
                    inputs: ['artist'],
                    styles: ["\n    img {\n    display: block;\n    float: left;\n    width: 60px;\n    -webkit-border-radius: 12px;\n    border-radius: 12px;\n    margin-right: 10px;\n    margin-bottom: 10px;\n  }", 'h2 { margin-top: 0;}'],
                })
            ], ArtistUnitComponent);
            exports_1("ArtistUnitComponent", ArtistUnitComponent);
        }
    };
});
//# sourceMappingURL=artistunit_component.js.map
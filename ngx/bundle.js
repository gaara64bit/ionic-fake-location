'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FakeLocation = /** @class */ (function (_super) {
    tslib.__extends(FakeLocation, _super);
    function FakeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeLocation.prototype.check = function (config) { return core.cordova(this, "check", { "callbackOrder": "reverse" }, arguments); };
    FakeLocation.pluginName = "FakeLocation";
    FakeLocation.plugin = "cordova-plugin-fakelocation";
    FakeLocation.pluginRef = "FakeLocation";
    FakeLocation.repo = "https://github.com/gaara64bit/cordova-plugin-fakelocation.git";
    FakeLocation.platforms = ["Android"];
    FakeLocation.decorators = [
        { type: core$1.Injectable }
    ];
    return FakeLocation;
}(core.IonicNativePlugin));

exports.FakeLocation = FakeLocation;

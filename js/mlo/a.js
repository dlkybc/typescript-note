"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c;
(function (c) {
    function aa() {
    }
    c.aa = aa;
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log('eat');
        };
        return Dog;
    }());
    c.Dog = Dog;
})(c = exports.c || (exports.c = {}));

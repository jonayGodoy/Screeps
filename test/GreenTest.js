var saludar = function () { return '¡Hola Mundo!'; };
var assert = require("assert");

describe('Hola mundo', function () {
    it('debe saludar al mundo', function () {
        assert.equal(saludar(), '¡Hola Mundo!');
    });
});


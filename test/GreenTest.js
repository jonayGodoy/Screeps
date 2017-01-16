var saludar = function () { return '¡Hola Mundo!'; };

describe('Hola mundo', function () {
    it('debe saludar al mundo', function () {
        expect(saludar()).toEqual('¡Hola Mundo!');
    });
});


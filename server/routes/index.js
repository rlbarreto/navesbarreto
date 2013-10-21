/*jslint node: true */
'use strict';
exports.meusCarros = function(req, res) {
    res.json([
        {
            id: 1,
            nome: 'Sandero',
            volumeTanque: '50L',
            consumoMedioGas: '12Km/L',
            consumeMedioEta: '9Km/l',
            fabricante: {
                id: 1,
                nome: 'Renault'
            },
            abastecimentos:[
                {
                    id: 1,
                    tipo: 'Gasolina',
                    volume: '20L',
                    distanciaPercorrida: '300Km',
                    data: '10/01/2013',
                    dataOrdenacao: new Date('10/01/2013')
                },
                {
                    id: 21,
                    tipo: 'Gasolina',
                    volume: '35L',
                    distanciaPercorrida: '450Km',
                    data: '10/03/2013',
                    dataOrdenacao: new Date('10/03/2013')
                }
            ]},
        {
            id: 2,
            nome: 'Corsa',
            volumeTanque: '50L',
            fabricante: {
                id: 2,
                nome: 'GM'
            }
        },
        {
            id: 3,
            nome: 'Fit',
            volumeTanque: '50L',
            fabricante: {
                id: 3,
                nome: 'Honda'
            }
        }
    ]);
};
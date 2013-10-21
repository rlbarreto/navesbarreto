'use strict';

angular.module('motorHelperApp')
  .service('CarroService', ['$http', function CarroService($http) {
    var carroService = {
        meusCarros: [],
        getMeusCarros: function() {
            $http.get('/api/meusCarros').success(function(carros) {
                $.merge(carroService.meusCarros, carros);
            });
        },

        adicionarAbastecimento: function(carro) {
            if (!carro.abastecimentos) {
                carro.abastecimentos = [];
            }
            carro.abastecimentos.push({edicao: true});
        }
    };

    return carroService;

  }]);

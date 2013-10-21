'use strict';

angular.module('motorHelperApp').controller('MainCtrl', ['$scope', '$http', 'CarroService',
    function ($scope, $http, CarroService) {
        $scope.carros = CarroService.meusCarros;

        $scope.getMeusCarros = function () {
            CarroService.getMeusCarros();
        };

        $scope.adicionarAbastecimento = function (carro) {
            CarroService.adicionarAbastecimento(carro);
        };

        $scope.salvarAbastecimento = function(abastecimento) {
            abastecimento.edicao = false;
            abastecimento.dateOrdenacao = new Date(abastecimento.data);
        };

        $scope.getMeusCarros();
  }]);

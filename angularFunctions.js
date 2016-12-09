/* globals angular */

//(function () {
//    'use strict';

//     Controller name is handy for logging
//    var controllerId = 'angularFunctions';

//     Define the controller on the module.
//     Inject the dependencies. 
//     Point to the controller definition function.
//    angular.module('app').controller(controllerId, ['$scope', angularFunctions]);

//    function angularFunctions($scope) {
//         Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
//        var vm = this;

//         Bindable properties and functions are placed on vm.
//        vm.activate = activate;
//        vm.title = 'angularFunctions';

//        function activate() {
//        }

//        #region Internal Methods  


//        #endregion
//    }
//})();



angular.module("myApp", [])
    .controller("results", function ($scope) {

        /*Year 1 results*/
        $scope.modulesList1 = [
            { module: "Operating System Fundamentals", result: "B+" },
            { module: "Database Fundamentals", result: "A" },
            { module: "Statistics", result: "A" },
            { module: "Social Media Communications", result: "A" },
            { module: "Object Orientated System Analysis", result: "A" },
            { module: "Software Development 2", result: "A" },
            { module: "Learning 2 Learn", result: "B-" },
            { module: "Discrete Maths", result: "A" },
            { module: "Business & Info Systems", result: "A" },
            { module: "Fundamentals of Interface & Web", result: "A" },
            { module: "Computer Architecture", result: "B+" },
            { module: "Software Development 1", result: "A" }
        ];
        /*Year 2 results*/
        $scope.modulesList2 = [
            { module: "Software Development 3", result: "A" },
            { module: "Software Development 4", result: "B+" },
            { module: "Project", result: "A" },
            { module: "Networking 1", result: "A" },
            { module: "Databases", result: "A" },
            { module: "Discrete Maths 2", result: "A" },
            { module: "Web Design & Development 1", result: "B+" },
            { module: "Networking 2 ", result: "A" },
            { module: "Software Quality Ass & Test", result: "A" },
            { module: "Management Science", result: "A" },
            { module: "Information Security", result: "B+" },
            { module: "Object Orientated Analysis", result: "B" }
        ];
        /*Year 3 results*/
        $scope.modulesList3 = [
            { module: "Innovation & Entrepreneurship", result: "A" },
            { module: "Operating Systems", result: "B+" },
            { module: "Web Design & Development  ", result: "B+" },
            { module: "Algorithms and Data Structures", result: "B" },
            { module: "Cloud servers and distributed computing", result: "B" },
        ];
        /*Year 4 results*/
        $scope.modulesList4 = [
            { module: "Enterprise Applications Architecture", result: "-" },
            { module: "Enterprise Applications Development", result: "-" },
            { module: "Information Management", result: "-" },
            { module: "Social Media Analysis ", result: "-" },
            { module: "Interactive Media Design", result: "-" },
            { module: "Project", result: "-" }
        ];
                 
       

    });
angular.module('app.controllers', [])
  
.controller('focusCtrl', function($scope) {

})
   
.controller('questsCtrl', ["$scope", "QuestService", function($scope, QuestService) {
	
	$scope.quests = QuestService.GetByGroupByState();
	
	$scope.foldingStatus = {};
	
	$scope.IsShown = function (obj) {
		return $scope.foldingStatus[obj.key] == true;
	}
	
	$scope.Toggle = function(obj){
		if($scope.IsShown(obj))
			$scope.foldingStatus[obj.key] = false;
		else
			$scope.foldingStatus[obj.key] = true;
	}
}])
   
.controller('journalCtrl', function($scope) {

})
   
.controller('codexCtrl', function($scope) {

})
   
.controller('mapCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
 
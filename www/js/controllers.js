angular.module('app.controllers', [])
    
.controller('focusCtrl', ["$scope", "QuestService", "FoldingFactoryService", 
    function($scope, QuestService, FoldingFactoryService) {
    
        $scope.main_focus = QuestService.GetMainFocus();
        $scope.additional_foci = QuestService.GetAdditionalFoci();
        $scope.folding = FoldingFactoryService.GetFoldingTracker();

    }]
)
   
.controller('questsCtrl', ["$scope", "QuestService", "FoldingFactoryService", function($scope, QuestService, FoldingFactoryService) {
	
	$scope.quests = QuestService.GetByGroupByState();
	$scope.folding = FoldingFactoryService.GetFoldingTracker();
    
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
 
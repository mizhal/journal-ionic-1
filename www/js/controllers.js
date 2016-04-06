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
   
.controller('journalCtrl', ["$scope", "JournalService", function($scope, JournalService) {
    $scope.page = 0;
    $scope.page_size = 20;
    $scope.timeFormat = "hh:mm";
    $scope.dateFormat = "";
    $scope.entries = JournalService
        .GetAllWithHeadings($scope.page, $scope.page_size);
        
    $scope.inputText = "";
    $scope.write = function(){
        JournalService.Write($scope.inputText);
        $scope.entries = JournalService
            .GetAllWithHeadings(
                $scope.page, $scope.page_size
            );
    };
}])
   
.controller('codexCtrl', function($scope) {

})
   
.controller('mapCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
 
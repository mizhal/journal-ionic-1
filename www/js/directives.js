angular.module('app.directives', [])

.directive('questSummary', ["FoldingFactoryService", function(FoldingFactoryService, IconResolver){
    return {
        templateUrl: "templates/directives/quest_summary.html",
        restrict: "E",
        replace: true,
        scope: {
            quest: "="
        },
        transclude: false,
        link: function(scope, elements, attrs){
            scope.folding = FoldingFactoryService.GetFoldingTracker();
        }   
    };
}])

.directive('questDetail', ["FoldingFactoryService", function(FoldingFactoryService, IconResolver){
    return {
        templateUrl: "templates/directives/quest_detail.html",
        restrict: "E",
        replace: true,
        scope: {
            quest: "="
        },
        transclude: false,
        link: function(scope, elements, attrs){
            scope.folding = FoldingFactoryService.GetFoldingTracker();
        }   
    };
}])

.directive('todoSection', ["FoldingFactoryService", function(FoldingFactoryService, IconResolver){
    return {
        templateUrl: "templates/directives/todo_section.html",
        restrict: "E",
        replace: true,
        scope: {
            todos: "="
        },
        transclude: false,
        link: function(scope, elements, attrs){
            scope.folding = FoldingFactoryService.GetFoldingTracker();
        }   
    };
}])

.directive('actionBar', ["IconResolver", function(IconResolver){
    return {
        templateUrl: "templates/directives/action_bar.html",
        restrict: "E",
        replace: true,
        scope: {
            actions: "="
        },
        transclude: false,
        link: function(scope, elements, attrs){
            scope.icon = IconResolver;
        }   
    };
}])

;


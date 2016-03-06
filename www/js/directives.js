angular.module('app.directives', [])

.directive('questSummary', ["FoldingFactoryService", "QuestActionResolver", function(FoldingFactoryService, QuestActionResolver){
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
            scope.quest_action_resolver = QuestActionResolver;
        }
    };
}])

.directive('questDetail', ["FoldingFactoryService", "QuestActionResolver", function(FoldingFactoryService, QuestActionResolver){
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
            scope.quest_action_resolver = QuestActionResolver;
        }
    };
}])

.directive('todoSection', ["FoldingFactoryService", function(FoldingFactoryService){
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

.directive('journalSection', ["FoldingFactoryService", function(FoldingFactoryService){
    return {
        templateUrl: "templates/directives/journal_section.html",
        restrict: "E",
        replace: true,
        scope: {
            entries: "="
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
            actions: "=",
            obj: "=",
            resolver: "="
        },
        transclude: false,
        link: function(scope, elements, attrs){
            scope.icon = IconResolver;
            scope.resolve = function(action, obj){
                scope.resolver.Resolve(action, obj);
            }
        }   
    };
}])

;


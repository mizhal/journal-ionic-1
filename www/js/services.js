angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', [function(){
	
}])

.service('QuestService', ["$resource", function($resource){
	
	this.database = null;
	
	this.GetByGroupByState = function(){
		var data = [
				{	key:"status-1", name: "Open", position: 2, quests: [
					{	key:"quest-1", 
						title: "Quest 1", description: "Esta es la #quest 1", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-2", 
						title: "Quest 2", description: "Esta es la #quest 2", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-3", 
						title: "Quest 3", description: "Esta es la #quest 3", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
				]},
				{	key:"status-2", name: "Blocked", position: 1, quests: [
					{	key:"quest-4", 
						title: "Quest 4", description: "Esta es la #quest 4", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-5", 
						title: "Quest 5", description: "Esta es la #quest 5", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},			
				]}
		];
        
        return data.sort(function(x, y){
            if(x.position < y.position) return -1;
            if(x.position == y.position) return 0;
            if(x.position > y.position) return 1;
        });
	}
	
	this.GetFocus = function() {
		return [
					{	key:"quest-1", 
						title: "Quest 1", description: "Esta es la quest 1", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-2", 
						title: "Quest 2", description: "Esta es la quest 2", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-3", 
						title: "Quest 3", description: "Esta es la quest 3", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
		];
	}
	
	var create_quests = "CREATE TABLE IF NOT EXISTS Quests(id integer not null primary key, " +
			"name varchar(255) not null," +
			"description text," +
			"state int not null," +
			"hearbeat long," +
			"created_at datetime not null," +
			"updated_at datatime not null," +
			"deleted_at datetime"
	")"
	;
	
	var create_tasks = "CREATE TABLE IF NOT EXISTS Tasks(" +
		"id integer not null primary key, " +
		"name varchar(255) not null, " +
		"description text, " +
		"state int not null, " +
		"quest_id int, " +
		"created_at datetime not null," +
		"updated_at datatime not null," +
		"deleted_at datetime"
		")"
		;
		
	var create_journals = "CREATE TABLE IF NOT EXISTS Journals(" +
		"id integer not null primary key, " +
		"title varchar(255) not null, " +
 		"content text not null, " +
		"quest_id int, " +
		"created_at datetime not null," +
		"updated_at datatime not null," +
		"deleted_at datetime"
		")"
		;
	
	this.CreateSchemaDevice = function($cordovaSQLite){
		var db = this.database;
		
		$cordovaSQLite.execute(db, create_quests);
		$cordovaSQLite.execute(db, create_tasks);
		$cordovaSQLite.execute(db, create_journals);
		
	}
	
	this.CreateSchemaBrowser = function($cordovaSQLite){
	}
}])

.service('FoldingFactoryService', [function(){
    
    var FoldingTracker = function(){
        var foldingStatus = {};
        
        this.IsShown = function (obj) {
            return foldingStatus[obj.key] == true;
        }
        
        var self = this;
        
        this.Toggle = function(obj){
            if(self.IsShown(obj))
                foldingStatus[obj.key] = false;
            else
                foldingStatus[obj.key] = true;
        }  
    };
    
    this.GetFoldingTracker = function() { return new FoldingTracker(); } 
}])

;


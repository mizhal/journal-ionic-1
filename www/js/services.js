angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', [function(){
	
}])

.service('QuestService', ["$resource", "DBWrapper", function($resource, DBWrapper){
	
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
    DBWrapper.RegisterForSchema(create_quests);
	
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
    DBWrapper.RegisterForSchema(create_tasks);
		
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
    DBWrapper.RegisterForSchema(create_journals);
    
    this.GetMainFocus = function(){
        
    }
    
    this.GetAdditionalFoci = function(){
        
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

// this service allows to tests in browser as well as in the device
.service('DBWrapper', ["$cordovaSQLite", function($cordovaSQLite){
    
    var db = null;
    var dbname = "journal.db";
    
    var schema = [];
  
    this.RegisterForSchema = function(ddl_command) {
        schema.push(ddl_command);
    };
   
    
	this.CreateSchemaDevice = function() {
        for(var i in schema) {
		  $cordovaSQLite.execute(db, schema[i]);         
        }
	};
    
    this.CreateSchemaBrowser = function(){
        for(var i in schema) {
          // TODO: #9158c86e-de21-11e5-8604-48d224987c9d schema creation in browsers
		  //$cordovaSQLite.execute(db, schema[i]);         
        } 
    };
    
    var self = this;
    this.Create = function() {
        if (window.cordova) {
            db = $cordovaSQLite.openDB({ name: dbname }); //device
            self.CreateSchemaDevice();
        } else {
            db = window.openDatabase(dbname, '1', 'the journal database', 1024 * 1024 * 100); // browser
            self.CreateSchemaBrowser();
        }
    };
    
}])
;


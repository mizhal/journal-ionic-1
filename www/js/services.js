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
                        actions: ["focus", "block", "note", "delete", "fail", "cancel"],
						title: "Quest 1", description: "Esta es la #quest 1", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-2", 
                        actions: ["focus", "block", "note", "delete", "fail", "cancel"],
						title: "Quest 2", description: "Esta es la #quest 2", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-3", 
                        actions: ["focus", "block", "note", "delete", "fail", "cancel"],
						title: "Quest 3", description: "Esta es la #quest 3", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
				]},
				{	key:"status-2", name: "Blocked", position: 1, quests: [
					{	key:"quest-4", 
                        actions: ["wake", "focus", "delete", "fail", "cancel"],
						title: "Quest 4", description: "Esta es la #quest 4", 
						last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
					},
					{	key:"quest-5", 
                        actions: ["wake", "focus", "delete", "fail", "cancel"],
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
        return {	
            key:"quest-1", 
            title: "Quest 1", description: "Esta es la quest 1", 
            actions: ["stop", "block", "note", "delete", "fail", "cancel"],
            sections: [
                {
                    header: "Descripcion",
                    key: "sect-desc", 
                    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut",
                    is_text: true
                },
                {
                    header: "GIT branch",
                    key: "sect-git-branch",
                    body: "435324-users-and-show",
                    is_text: true
                },
                {
                    todos: [
                        {
                            status: "QUEST",
                            text: "Do anything", comment: "sdsdfsd",
                            promoted_to: "#96",
                            promoted_to_slug: "96"
                        },
                        { status: "NEXT", text: "Do something" },
                        { status: "TODO",
                            text: "Anything 1", comment: "sdfsad"},
                        { status: "DONE", 
                            text: "Anything 2", comment: "sdfd"}
                    ],
                    is_todo: true
                }
            ],
            last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
        };
    }
    
    this.GetAdditionalFoci = function(){
        return [
            {	key:"quest-2", 
                actions: ["stop", "block", "note", "delete", "fail", "cancel"],
                title: "Quest 2", description: "Esta es la quest 2", 
                last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
            },
            {	key:"quest-3", 
                actions: ["stop", "block", "note", "delete", "fail", "cancel"],
                title: "Quest 3", description: "Esta es la quest 3", 
                last_journal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quam id velit varius, in pellentesque arcu ultricies. #Quisque maximus justo id dui ultrices dictum. Maecenas varius risus a facilisis placerat. Cras gravida accumsan nisl, nec suscipit ex tempor et. Praesent nisi ipsum, volutpat vel erat ut, consequat ullamcorper lacus. #Phasellus feugiat dolor eget commodo tempor. Vivamus quis leo blandit, facilisis lacus condimentum, rutrum metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce commodo tincidunt vestibulum."
            },
        ];
    }
}])

.service('FoldingFactoryService', [function(){
    
    var FoldingTracker = function(){
        var foldingStatus = {};
        
        this.IsShown = function (key) {
            return foldingStatus[key] == true;
        }
        
        var self = this;
        
        this.Toggle = function(key){
            if(self.IsShown(key))
                foldingStatus[key] = false;
            else
                foldingStatus[key] = true;
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

.service("IconResolver", [function(){
    this.ResolveAction = function(action_class) {
        switch(action_class){
            case "stop": return "ion-stop";
            case "block": return "ion-ios-pause";
            case "note": return "ion-android-create";
            case "delete": return "ion-trash-b";
            case "fail": return "ion-thumbsdown";
            case "cancel": return "ion-android-cancel";
            case "wake": return "ion-arrow-up-a";
            case "focus": return "ion-play";
        }
    }
}])
;
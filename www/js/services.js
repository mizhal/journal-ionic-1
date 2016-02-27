angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', [function(){
	
}])

.service('QuestService', ["$resource", function($resource){
	
	this.database = null;
	
	this.GetByGroupByState = function(){
		return [
				{key:"status-1", name: "Focus", quests: [
					{key:"quest-1", title: "Quest 1", description: "Esta es la quest 1", state: "FOCUS"},
					{key:"quest-2", title: "Quest 2", description: "Esta es la quest 2", state: "FOCUS"},
					{key:"quest-3", title: "Quest 3", description: "Esta es la quest 3", state: "FOCUS"},
				]},
				{key:"status-2", name: "Open", quests: [
					{key:"quest-4", title: "Quest 4", description: "Esta es la quest 4", state: "FOCUS"},
					{key:"quest-5", title: "Quest 5", description: "Esta es la quest 5", state: "FOCUS"},			
				]}
		];
	}
	
	this.GetFocus = function() {
		return [
			{key:"quest-1", title: "Quest 1", description: "Esta es la quest 1", state: "FOCUS"},
			{key:"quest-2", title: "Quest 2", description: "Esta es la quest 2", state: "FOCUS"},
			{key:"quest-3", title: "Quest 3", description: "Esta es la quest 3", state: "FOCUS"},
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
	
}])

;


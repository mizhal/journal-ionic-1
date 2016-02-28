angular.module('app.filters', [])

.filter('hilightHashtags', function() {
	// TODO: document hashtag format
	var regex = new RegExp(/[#]([a-zA-Z][a-zA-Z0-9\-_]{2,})/g);
	
	return function(input){
		return input.replace(regex, function(whole, word){
			return '<a href="#/hashtag/' + word + '">#' + word + '</a>';
		});
	};
});
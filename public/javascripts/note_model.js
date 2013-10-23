var NoteModel = Backbone.Model.extend({
	urlRoot: '/api/notes',
	defaults: {
		title: '',
		body: ''
	}
});

var NoteCollection = Backbone.Collection.extend({
	url: '/api/notes',
	model: NoteModel
});

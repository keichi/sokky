$(document).ready(function() {
	var notes = new NoteCollection();
	var listView = new NoteListView({
		el: '.note-list',
		collection: notes
	});
	notes.fetch();
});

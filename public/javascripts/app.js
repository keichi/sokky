var App = {
	proxy: {}
};
_.extend(App.proxy, Backbone.Events);

var AppRouter = Backbone.Router.extend({
    routes: {
        'edit/:id': 'loadEditor',
        '*any':     'loadList'
    },

    initialize: function() {
        this.menubarView = new MenubarView({el: '.navbar'});

        this.editorView = new MarkdownEditorView({
            el: '.markdown-editor-container',
            model: new NoteModel()
        });
        this.previewView = new MarkdownPreviewView({el: '.markdown-preview-container'});

        this.notes = new NoteCollection();
        this.listView = new NoteListView({
            el: '.note-list',
            collection: this.notes
        });
        this.notes.fetch();
    },

    loadEditor: function(id) {
        this.editorView.model.set('id', id);
        this.editorView.model.fetch();

        $('#list-view').hide();
        $('#editor-view').show();
    },

    loadList: function() {
        $('#editor-view').hide();
        $('#list-view').show();
    }
});

$(document).ready(function() {
    var router = new AppRouter();
    Backbone.history.start({ pushState: true });
});

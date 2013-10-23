$(document).ready(function() {
	var menubarView = new MenubarView({el: '.navbar'});
	var editorView = new MarkdownEditorView({
		el: '.markdown-editor-container',
		model: new NoteModel({id: location.hash.substr(1)})
	});
	var previewView = new MarkdownPreviewView({el: '.markdown-preview-container'});
});

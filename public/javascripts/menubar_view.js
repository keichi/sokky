var MenubarView = Backbone.View.extend({
	events: {
		'click .editor-and-preview': function(e) { this.changeMode(e, true, true); },
		'click .editor-only': function(e) { this.changeMode(e, true, false); },
		'click .preview-only': function(e) { this.changeMode(e, false, true); },
		'click .action-strong': 'actionStrong',
		'click .action-emphasize': 'actionEmphasize',
		'click .action-inline-code': 'actionInlineCode',
		'click .action-strikethrough': 'actionStrikethrough',
		'click .action-link': 'actionLink',
		'click .action-image': 'actionImage'
	},

	changeMode: function(e, enableEditor, enablePreview) {
		e.preventDefault();

		$('.markdown-editor-container').css('display', enableEditor ? 'block' : 'none');
		$('.markdown-preview-container').css('display', enablePreview ? 'block' : 'none');
	},

	actionStrong: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:strong');
	},

	actionEmphasize: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:emphasize');
	},

	actionInlineCode: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:inline-code');
	},

	actionStrikethrough: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:strikethrough');
	},

	actionLink: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:link');
	},

	actionImage: function(e) {
		e.preventDefault();
		App.proxy.trigger('md:image');
	},
});

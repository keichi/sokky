var MarkdownEditorView = Backbone.View.extend({
	initialize: function() {
		var that = this;

		this.cm = CodeMirror.fromTextArea($('textarea', this.el)[0], {
			mode: 'gfm',
			lineNumbers: true,
			theme: 'default'
		});

		this.cm.on('change', $.throttle(1000, function() {
			App.proxy.trigger('md:change', that.cm.getValue());
		}));

		this.cm.on('scroll', function() {
			var scrollInfo = that.cm.getScrollInfo();
			var normalized = scrollInfo.top / (scrollInfo.height -  scrollInfo.clientHeight);
			App.proxy.trigger('md:scroll', normalized);
		});

		this.listenTo(App.proxy, 'md:strong', function() { this.wrapWith('**', '**'); });
		this.listenTo(App.proxy, 'md:emphasize', function() { this.wrapWith('*', '*'); });
		this.listenTo(App.proxy, 'md:inline-code', function() { this.wrapWith('`', '`'); });
		this.listenTo(App.proxy, 'md:strikethrough', function() { this.wrapWith('~~', '~~'); });
		this.listenTo(App.proxy, 'md:link', function() { this.wrapWith('[', '](http://)'); });
		this.listenTo(App.proxy, 'md:image', function() { this.wrapWith('![', '](http://)'); });
		this.listenTo(this.model, 'all', this.render);
	},

	wrapWith: function(wrapStart, wrapEnd) {
		if (!this.cm.somethingSelected()) {
			return;
		}
		var text = this.cm.getSelection();
		text = wrapStart + text + wrapEnd;
		this.cm.replaceSelection(text);
	},

	render: function() {
		this.cm.setValue(this.model.get('body'));
	}
});

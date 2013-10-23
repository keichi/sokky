var MarkdownPreviewView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(App.proxy, 'md:change', this.update);
		this.listenTo(App.proxy, 'md:scroll', this.scroll);
	},

	update: function(contents) {
		$('.markdown-preview', this.$el).html(marked(contents));
	},

	scroll: function(offset) {
		this.$el.scrollTop(offset * ($('.markdown-preview').height() -  this.$el.height()));
	}
});

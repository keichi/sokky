var NoteItemView = Backbone.View.extend({
	tagName: 'a',
	className: 'list-group-item',
	events: {
		'click': this.selectThis
	},

	initialize: function() {
		this.template = _.template($('#note-item-template').html());
		this.stripTagRegexp = new RegExp();
		this.stripTagRegexp.compile('<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->', 'gi');

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function() {
		this.$el.html(this.template({
			title: this.model.get('title'),
			body: this.stripTags(this.model.get('body')).substr(0, 100)
		}));
		this.$el.attr('href', '/edit#' + this.model.get('id'));

		return this;
	},

	remove: function() {
		this.$el.remove();
	},

	stripTags: function(input) {
		return input.replace(this.stripTagRegexp, '');
	},

	selectThis: function() {

	}
});

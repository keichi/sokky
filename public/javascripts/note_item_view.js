var NoteItemView = Backbone.View.extend({
	tagName: 'a',
	className: 'list-group-item',
	events: {
		'click': 'selectThis'
	},

	initialize: function() {
		this.stripTagRegexp = new RegExp();
		this.stripTagRegexp.compile('<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->', 'gi');

		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function() {
		var data = this.model.toJSON();
		data.body = this.stripTags(data.body).substr(0, 100);

		this.$el.html(NoteItemView.template(data));
		this.$el.attr('href', '/edit/' + this.model.get('id'));

		return this;
	},

	remove: function() {
		this.$el.remove();
	},

	stripTags: function(input) {
		return input.replace(this.stripTagRegexp, '');
	},

	selectThis: function(e) {
		e.preventDefault();
		Backbone.history.navigate(this.$el.attr('href'), {trigger: true});
	}
}, {
	template: _.template($('#note-item-template').html())
});

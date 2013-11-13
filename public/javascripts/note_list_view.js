var NoteListView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'all', this.render);
	},

	render: function() {
		this.$el.empty();

		this.collection.forEach(function(model) {
			var itemView = new NoteItemView({
				model: model,
				collection: this.collection
			});
			this.$el.append(itemView.render().$el);
		}, this);

		return this;
	}
});

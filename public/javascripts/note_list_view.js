var NoteListView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', this.addItem);
		this.listenTo(this.collection, 'reset', this.resetItems);
		this.listenTo(this.collection, 'remove', this.removeItem);
	},

	addItem: function(model) {
		var itemView = new NoteItemView({
			model: model,
			collection: this
		});
		this.$el.append(itemView.render().$el);
	},

	resetItems: function(collection) {
		var that = this;
		_.each(collection, function(model) {
			that.addItem(model);
		});
	},

	removeItem: function(model) {
		model.destroy();
	}
});

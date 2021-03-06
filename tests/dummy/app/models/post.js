import Ember from 'ember';
import DS from 'ember-data';
import ModelMixin from 'ember-data-extensions/mixins/model';

export default DS.Model.extend(ModelMixin, {
  title: DS.attr('string'),
  publishedDate: DS.attr('date'),

  author: DS.belongsTo('author'),
  tags: DS.hasMany('tag'),

  tagNames: Ember.computed('tags.@each.name', function() {
    return this.get('tags').mapBy('name').join(', ');
  }),

  tagIds: Ember.computed('tags.@each.name', function() {
    return this.get('tags').mapBy('id').join(', ');
  })
});

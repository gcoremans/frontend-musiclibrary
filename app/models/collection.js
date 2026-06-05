import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CollectionModel extends Model {
    @attr('string') name;

    @hasMany('release', { async: true, inverse: null }) parts;
    @belongsTo('account', { inverse: "collections", async: true }) owner;
}

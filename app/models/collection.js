import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class CollectionModel extends Model {
    @attr('string') name;

    @hasMany('release', { async: false, inverse: null }) parts;
    @belongsTo('account', { inverse: "collections", async: false }) owner;
}

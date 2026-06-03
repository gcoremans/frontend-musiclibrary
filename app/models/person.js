import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PersonModel extends Model {
    @attr('string') name;

    @belongsTo('account', { inverse: "person", async: false }) account;
}

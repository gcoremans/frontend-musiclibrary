import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
    @attr('string') name;

    @belongsTo('person', { inverse: "account", async: false }) person;
    @hasMany('collection', {inverse: "owner", async: false }) collections;
}

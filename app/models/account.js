import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class AccountModel extends Model {
    @attr('string') name;

    @belongsTo('person', { inverse: "account", async: true }) person;
    @hasMany('collection', {inverse: "owner", async: true }) collections;
}

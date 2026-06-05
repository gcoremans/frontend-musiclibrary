import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ReleaseModel extends Model {
    @attr('string') title;
    @attr('string') credit;
    @attr('string') format;

    @belongsTo('release-group', { async: true, inverse: "releases" }) group;
    @hasMany('recording', { async: true, inverse: "on" }) tracks;
}

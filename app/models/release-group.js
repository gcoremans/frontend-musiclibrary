import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ReleaseGroupModel extends Model {
    @attr('string') title;
    @attr('string') credit;

    @hasMany('release', { async: false, inverse: "group" }) releases;
    @hasMany('artist', { async: false, inverse: "albums" }) artists;
}

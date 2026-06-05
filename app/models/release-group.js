import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ReleaseGroupModel extends Model {
    @attr('string') title;
    @attr('string') credit;

    @hasMany('release', { async: true, inverse: "group" }) releases;
    @hasMany('artist', { async: true, inverse: "albums" }) artists;
}

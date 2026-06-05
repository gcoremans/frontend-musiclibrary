import Model, { attr, hasMany } from '@ember-data/model';

export default class RecordingModel extends Model {
    @attr('string') title;
    @attr('string') credit;
    @attr('string') duration;

    @hasMany('artist', { async: true, inverse: "tracks" }) by;
    @hasMany('release', { async: true, inverse: "tracks" }) on;
}

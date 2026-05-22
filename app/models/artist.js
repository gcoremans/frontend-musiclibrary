import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
    @attr('string') name;

    @hasMany('release-group', { async: false, inverse: "artists" }) albums;
    @hasMany('recording', { async: false, inverse: "by" }) tracks;
}

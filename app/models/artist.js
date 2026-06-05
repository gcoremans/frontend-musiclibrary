import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
    @attr('string') name;

    @hasMany('release-group', { async: true, inverse: "artists" }) albums;
    @hasMany('recording', { async: true, inverse: "by" }) tracks;
}

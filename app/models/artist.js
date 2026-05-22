import Model, { attr, hasMany } from '@ember-data/model';

export default class ArtistModel extends Model {
    @attr('string') name;

    @hasMany('release-group', { async: true, inverse: "artists" }) releaseGroups;
    @hasMany('release', { async: true, inverse: "artists" }) releases;
    @hasMany('recording', { async: true, inverse: "artists" }) recordings;
}

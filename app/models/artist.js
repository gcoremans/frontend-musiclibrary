import Model, { attr } from '@warp-drive/legacy/model';

export default class ArtistModel extends Model {
    @attr('string') name;
    @hasMany('release-group') releaseGroups;
    @hasMany('release') releases;
    @hasMany('recording') recordings;
}

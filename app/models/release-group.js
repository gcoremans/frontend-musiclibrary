import Model, { attr } from '@warp-drive/legacy/model';

export default class ReleaseGroupModel extends Model {
  @attr('string') title;
  @attr('string') credit;
  @hasMany('artist') artists;
  @hasMany('release') releases;
}

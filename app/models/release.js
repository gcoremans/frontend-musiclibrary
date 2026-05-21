import Model, { attr } from '@warp-drive/legacy/model';

export default class ReleaseModel extends Model {
  @attr('string') title;
  @attr('string') credit;
  @attr('string') format;

  @belongsTo('release-group') group;
  @hasMany('artist') artists;
  @hasMany('recording') tracks;
}

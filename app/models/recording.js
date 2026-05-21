import Model, { attr } from '@warp-drive/legacy/model';

export default class RecordingModel extends Model {
  @attr('string') title;
  @attr('string') credit;
  @attr('string') duration;

  @hasMany('artist') artists;
  @hasMany('release') releases;
}

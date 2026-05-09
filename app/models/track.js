import Model, { attr } from '@ember-data/model';

export default class TrackModel extends Model {
  @attr('string') title;
  @attr('string') credit;
  @attr('string') duration;
}

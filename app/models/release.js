import Model, { attr } from '@ember-data/model';

export default class ReleaseModel extends Model {
  @attr('string') title;
  @attr('string') credit;
}

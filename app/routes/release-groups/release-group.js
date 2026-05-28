import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ReleaseGroupsRoute extends Route {
  @service store;

  model(params) {
      return this.store.findRecord('release-group', params.release_group_id, { include: ['artists', 'releases', 'releases.tracks'] });
  }
}

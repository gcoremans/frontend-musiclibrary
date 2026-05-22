import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ReleasesRoute extends Route {
  @service store;

  model(params) {
      return this.store.findRecord('release', params.release_id, { include: ['group', 'group.artists', 'tracks'] });
  }
}

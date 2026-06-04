import Route from '@ember/routing/route';

import { service } from '@ember/service';

import RSVP from 'rsvp';

export default class ReleasesRoute extends Route {
  @service store;

  model(params) {
    return RSVP.hash({
      release: this.store.findRecord('release', params.release_id, { include: ['group', 'group.artists', 'tracks'] }),
      collections: this.store.findAll('collection')
    });
  }
}

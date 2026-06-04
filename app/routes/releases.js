import Route from '@ember/routing/route';

import { service } from '@ember/service';

import RSVP from 'rsvp';

export default class ReleasesRoute extends Route {
  @service store;

    model() {
        return RSVP.hash({
            releases: this.store.findAll('release', { include: ['group', 'group.artists', 'tracks'] }),
            collections: this.store.findAll('collection')
        });
  }
}

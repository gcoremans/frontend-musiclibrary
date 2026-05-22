import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ArtistsRoute extends Route {
  @service store;

  model() {
      return this.store.findAll('artist', { include: ['albums'] });
  }
}

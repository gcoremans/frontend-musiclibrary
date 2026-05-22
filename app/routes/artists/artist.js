import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ArtistRoute extends Route {
  @service store;

  model(params) {
      return this.store.findRecord('artist', params.artist_id, { include: ['albums'] });
  }
}

import Route from '@ember/routing/route';

import { service } from '@ember/service';

import RSVP from 'rsvp';

export default class ReleasesRoute extends Route {
  @service store;

    queryParams = {
        page: {
            refreshModel: true
        }
    }

    model(params) {
        params = params || {};
        if (params.page) {
            params["page[number]"] = params.page;
        } else {
            params["page[number]"] = 0;
        }
        params.include = ['group', 'group.artists', 'tracks'];
        return RSVP.hash({
            releases: this.store.query('release', params),
            collections: this.store.findAll('collection')
        });
  }
}

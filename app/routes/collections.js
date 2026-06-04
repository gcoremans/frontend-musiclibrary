import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class CollectionsRoute extends Route {
    @service store;
    @service session;

    beforeModel(transition) {
        this.session.requireAuthentication(transition, 'index');
    }

    model() {
        return this.store.findAll('collection', { include: ['parts', 'owner'] });
    }
}

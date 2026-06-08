import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class ReleaseGroupsRoute extends Route {
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
        params.include = ['releases', 'artists'];
        return this.store.query('release-group', params);
    }
}

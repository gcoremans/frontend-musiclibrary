import Controller from '@ember/controller';

import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CollectionsController extends Controller {
    @service session;
    @service store;

    @tracked name;

    @action
    async newCollection() {
        const acct = await this.store.findRecord('account', this.session.data.authenticated.data.relationships.account.data.id, { include: ['person'] });
        let newCollection = this.store.createRecord('collection', {
            name: this.name,
            owner: acct
        });
        newCollection.save();
    }

    @action
    async deleteCollection(collection) {
        collection.destroyRecord();
    }
}

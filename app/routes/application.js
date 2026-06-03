import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;
  @service session;

  async beforeModel() {
    await this.session.setup();
  }

  model() {
    if (this.session.isAuthenticated) {
      return this.store.findRecord('account', this.session.data.authenticated.data.relationships.account.data.id, { include: ['person'] });
    }
  }
}

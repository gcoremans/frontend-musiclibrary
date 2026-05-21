import { setupTest } from 'frontend-musiclibrary/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | release group', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('release-group', {});
    assert.ok(model, 'model exists');
  });
});

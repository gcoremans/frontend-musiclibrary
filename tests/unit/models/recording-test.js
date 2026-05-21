import { setupTest } from 'frontend-musiclibrary/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | recording', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('recording', {});
    assert.ok(model, 'model exists');
  });
});

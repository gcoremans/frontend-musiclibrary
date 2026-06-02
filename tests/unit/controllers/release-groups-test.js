import { module, test } from 'qunit';
import { setupTest } from 'frontend-musiclibrary/tests/helpers';

module('Unit | Controller | release-groups', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:release-groups');
    assert.ok(controller);
  });
});

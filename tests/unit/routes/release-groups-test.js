import { module, test } from 'qunit';
import { setupTest } from 'frontend-musiclibrary/tests/helpers';

module('Unit | Route | release-groups', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:release-groups');
    assert.ok(route);
  });
});

import { module, test } from 'qunit';
import { setupTest } from 'frontend-musiclibrary/tests/helpers';

module('Unit | Route | recordings', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:recordings');
    assert.ok(route);
  });
});

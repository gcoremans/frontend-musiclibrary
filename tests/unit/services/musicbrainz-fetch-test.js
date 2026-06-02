import { module, test } from 'qunit';
import { setupTest } from 'frontend-musiclibrary/tests/helpers';

module('Unit | Service | musicbrainz-fetch', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:musicbrainz-fetch');
    assert.ok(service);
  });
});

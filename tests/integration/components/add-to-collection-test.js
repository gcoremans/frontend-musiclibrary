import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-musiclibrary/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-to-collection', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AddToCollection />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AddToCollection>
        template block text
      </AddToCollection>
    `);

    assert.dom().hasText('template block text');
  });
});

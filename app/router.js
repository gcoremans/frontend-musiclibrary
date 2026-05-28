import EmberRouter from '@ember/routing/router';
import config from 'frontend-musiclibrary/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('artists', function() {
      this.route('artist', { path: '/:artist_id' })
  });
  this.route('releases', function() {
      this.route('release', { path: '/:release_id' })
  });
  this.route('release-groups', function () {
      this.route('release-group', { path: ':release_group_id' })
  });
});

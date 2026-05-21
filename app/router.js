import EmberRouter from '@ember/routing/router';
import config from 'frontend-musiclibrary/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('artists');
  this.route('releases');
  this.route('recordings');
});

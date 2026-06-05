import JSONAPIAdapter from '@ember-data/adapter/json-api';
import queryString from 'query-string';

// Pagination properties copied from https://github.com/starshot-tech/ember-jsonapi-pagination/blob/development/addon/serializers/jsonapi-pagination.js
export default class ApplicationAdapter extends JSONAPIAdapter {
  normalizeQueryResponse(store, clazz, payload) {
    return this.appendPagination(super.normalizeQueryResponse(...arguments), payload);
  }

  normalizeArrayResponse(store, clazz, payload) {
    return this.appendPagination(super.normalizeArrayResponse(...arguments), payload);
  }

  appendPagination(result, payload) {
    result.meta = result.meta || {};

    if (payload.links) {
      result.meta.pagination = this.createPageMeta(payload.links);
    }

    return result;
  }

  createPageMeta(data) {

    let meta = {};

    Object.keys(data).forEach((type) => {
      let link = data[type];
      meta[type] = {};

      if (!link) {
        meta[type].number = null;
      } else {
        let newLinks = link.split('?');
        let queryParams = queryString.parse(newLinks[1]);

        if (queryParams.page) {
          meta[type].number = parseInt(queryParams.page) || null;
        }
      }
    });

    return meta;

  }
}

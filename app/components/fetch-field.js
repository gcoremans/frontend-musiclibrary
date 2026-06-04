import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FetchField extends Component {
    @tracked uri = '';

    get id() {
        const item = this.uriToItem(this.uri);
        if (item) {
            return item.uuid;
        } else {
            return null;
        }
    }

    get kind() {
        const item = this.uriToItem(this.uri);
        if (item) {
            return item.kind;
        } else {
            return null;
        }
    }
    
    // copypasted from musicbrainz-fetch service, lazy
    uriToItem(uri) {
        const regex = /https?:\/\/musicbrainz.org\/(?<kind>artist|recording|release|release-group)\/(?<uuid>[\w-]+)/;
        const matches = uri.match(regex);
        if (matches) {
            return {
                kind: matches.groups.kind,
                uuid: matches.groups.uuid,
            };
        } else {
            return null;
        }
    }
}

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FetchButton extends Component {
    @tracked message = "";
    
    @action
    async fetchUri(id, kind) {
        let response = await fetch("/fetch", {
            method: "POST",
            body: JSON.stringify({ uri: `https://musicbrainz.org/${kind}/${id}` }),
            headers: { "Content-Type": "application/json" },
        });
        if(!response.ok) {
            this.message = "Something went wrong.";
        } else {
            this.message = "Metadata fetch queued."
        }
    }
}

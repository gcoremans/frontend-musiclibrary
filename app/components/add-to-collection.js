import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddToCollection extends Component {
    @service store;

    @tracked collectionId;
    
    @action
    async addToCollection(event) {
        event.preventDefault();
        const collectionId = event.target[0][0].value;
        let collection = await this.store.findRecord('collection', collectionId, { inclue: ["parts"] });
        let release = await this.store.findRecord('release', this.args.releaseId);
        collection.parts.push(release);
        collection.save();
    }
}

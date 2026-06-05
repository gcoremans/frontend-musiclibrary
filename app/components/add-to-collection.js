import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddToCollection extends Component {
    @service store;

    collectionId = "";
    
    @action
    async addToCollection(event) {
        event.preventDefault();
        if(this.collectionId) {
            let collection = await this.store.findRecord('collection', this.collectionId, { inclue: ["parts"] });
            let release = await this.store.findRecord('release', this.args.releaseId);
            collection.parts.push(release);
            collection.save();
        }
    }

    @action
    changeSelection(event) {
        this.collectionId = event.target.value;
    }
}

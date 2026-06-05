import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AddToCollection extends Component {
    @service store;

    @tracked message;
    
    collectionId = "";
    
    @action
    async addToCollection(event) {
        event.preventDefault();
        if(this.collectionId) {
            let collection = await this.store.findRecord('collection', this.collectionId, { include: ["parts"] });
            let release = await this.store.findRecord('release', this.args.releaseId);
            let parts = await collection.parts;
            parts.push(release);
            this.message = "Added!";
            await collection.save();
        }
    }

    @action
    changeSelection(event) {
        this.collectionId = event.target.value;
    }
}

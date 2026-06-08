import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class Pager extends Component {
    @service router;

    isANumber(num) {
        return Number.isInteger(num);
    }
}

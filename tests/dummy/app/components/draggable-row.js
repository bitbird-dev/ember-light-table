// BEGIN-SNIPPET draggable-row
import Row from 'ember-light-table/components/lt-row';

export default Row.extend({
  classNames: ['draggable-row'],
  attributeBindings: ['draggable'],
  draggable: true,
  onDragStart: null,
  dragStart(event) {
    let cb = this.get('onDragStart');
    if (cb) {
      cb(this.get('row'), event);
    } else {
      this._super(...arguments);
    }
  }
});
// END-SNIPPET

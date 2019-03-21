import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from 'ember-light-table/templates/components/lt-row';

const Row = Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['lt-row'],
  classNameBindings: ['isSelected', 'isExpanded', 'canExpand:is-expandable', 'canSelect:is-selectable','canDrag:is-draggable', 'row.classNames'],
  attributeBindings: ['colspan', 'data-row-id', 'canDrag:draggable'],
  canDrag: false,
  columns: null,
  row: null,
  tableActions: null,
  extra: null,
  canExpand: false,
  canSelect: false,
  colspan: 1,

  isSelected: computed.readOnly('row.selected'),
  isExpanded: computed.readOnly('row.expanded'),

  dragStart(event){
    if(this.onDragStart) {
      this.onDragStart(event);
    }
  }
});

Row.reopenClass({
  positionalParams: ['row', 'columns']
});

export default Row;

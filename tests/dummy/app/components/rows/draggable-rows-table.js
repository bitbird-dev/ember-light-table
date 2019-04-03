// BEGIN-SNIPPET draggable-rows-table
import Component from '@ember/component';
import TableCommon from '../../mixins/table-common';
import { computed } from '@ember/object';

export default Component.extend(TableCommon, {
  hasSelection: computed.notEmpty('table.selectedRows'),

  columns: computed(function() {
    return [
      {
        label: 'Avatar',
        valuePath: 'avatar',
        width: '60px',
        sortable: false,
        cellComponent: 'user-avatar'
      },
      {
        label: 'First Name',
        valuePath: 'firstName',
        width: '150px'
      },
      {
        label: 'Last Name',
        valuePath: 'lastName',
        width: '150px'
      },
      {
        label: 'Address',
        valuePath: 'address'
      },
      {
        label: 'State',
        valuePath: 'state'
      },
      {
        label: 'Country',
        valuePath: 'country'
      }
    ];
  }),

  dropInfo: 'drop a Row here...',

  actions: {
    selectAll() {
      this.get('table.rows').setEach('selected', true);
    },

    deselectAll() {
      this.get('table.selectedRows').setEach('selected', false);
    },

    deleteAll() {
      this.get('table').removeRows(this.get('table.selectedRows'));
    },
    onRowDragStart(row, event) {
      let id = row.get('id');
      event.dataTransfer.setData('text/data', id);
    },
    onDrop(event) {
      event.preventDefault();
      let payload = event.dataTransfer.getData('text/data');
      this.set('dropInfo', `Dropped id = ${payload}.`);
    },
    allowDrop(event) {
      event.preventDefault();
    }
  }
});
// END-SNIPPET

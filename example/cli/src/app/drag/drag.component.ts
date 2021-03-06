import { Component } from '@angular/core';
import { ITreeState } from 'angular-tree-component';

@Component({
  selector: 'app-drag',
  template: `
    <tree-root [state]="state" [options]="options" [focused]="true" [nodes]="nodes"></tree-root>
  `,
  styles: []
})
export class DragComponent {
  state: ITreeState = {
    expandedNodeIds: {
      1: true,
      2: true
    },
    hiddenNodeIds: {},
    activeNodeIds: {}
  };

  options = {
    allowDrag: (node) => node.isLeaf
  };

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      id: 2,
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
          {name: 'grandchild2.2.1'}
        ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];
}

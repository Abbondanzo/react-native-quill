import { LinkedList, LinkedNode } from '../linked-list';

export interface Blot extends LinkedNode {
  scroll: Parent;
  parent: Parent;
  prev: Blot;
  next: Blot;

  deleteAt(index: number, length: number): void;
  formatAt(index: number, length: number, name: string, value: any): void;
  insertAt(index: number, value: string): void;
}

export interface Parent extends Blot {
  children: LinkedList<Blot>;

  appendChild(child: Blot): void;
  removeChild(child: Blot): void;
}

import { Collection } from '../models/Collection';

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {
  }
  abstract renderItem(): void
  render(): void {

  }
}
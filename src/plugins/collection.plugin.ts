import lodash from "lodash";

export default class Collection<T extends CollectionType> {
  private value: T;

  public constructor(input: T) {
    this.value = input;
  }

  public count() {
    return Object.keys(this.value).length;
  }

  public isEqual<T extends CollectionType>(data: Collection<T>) {
    return lodash.isEqual(this.value, data.get());
  }

  public isEmpty() {
    return this.count() === 0;
  }

  public hasKey(key: string) {
    return Object.keys(this.value).includes(key);
  }

  public each(callback: CollectionForEachCallback) {
    Object.entries(this.value).forEach(([key, value], index) => {
      callback(value, key, index);
    });
  }

  public get(key?: string) {
    return key ? this.value[key] : this.value;
  }

  public copy() {
    return new Collection(Object.assign({}, this.value));
  }

  public join<T extends CollectionType>(data: Collection<T>) {
    return new Collection(Object.assign({}, this.value, data.get()));
  }

  public remove(key: string) {
    const value = Object.assign({}, this.value);
    delete value[key];

    return new Collection(value);
  }

  public map(callback: CollectionMapCallback) {
    const array = Object.entries(this.value).map(([key, value], index) => callback(value, key, index));
    let collection: CollectionType = {};
    array.forEach((obj) => {
      collection = Object.assign({}, collection, obj);
    });

    return new Collection(collection);
  }

  public filter(callback: CollectionFilterCallback) {
    const array = Object.entries(this.value).filter(([key, value], index) => callback(value, key, index));
    let collection: CollectionType = {};
    array.forEach((obj) => {
      collection = Object.assign({}, collection, obj);
    });

    return new Collection(collection);
  }

  public keys() {
    return Object.keys(this.value);
  }

  public values() {
    return Object.values(this.value);
  }

  public nth(index: number): CollectionType | undefined {
    const array = Object.entries(this.value);
    const output = array[index];
    return output ? { [output[0]]: output[1] } : undefined;
  }
}

export type CollectionType = {
  [k: string]: any;
};

export type CollectionForEachCallback = (value: any, key: string, index: number) => void;

export type CollectionMapCallback = (value: any, key: string, index: number) => CollectionType;

export type CollectionFilterCallback = (value: any, key: string, index: number) => boolean;

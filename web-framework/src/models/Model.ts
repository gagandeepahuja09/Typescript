import { AxiosPromise } from 'axios';

interface Events {
  on(eventName: string, callback: () => void)
  trigger(eventName: string)
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  set(data: T): void
  getAll(): T
}

class Model {}
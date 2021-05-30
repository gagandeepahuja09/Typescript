import { Model } from '../models/Model'

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  eventsMap():{ [key: string]: () => void } {
    return {}
  }

  regionsMap(): { [key: string]: string } {
    return {}
  }


  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap()
    for (let eventKey in eventsMap) {
      const [ eventName, selector ] = eventKey.split(':')
      fragment
        .querySelectorAll(selector)
        .forEach(element => {
          element.addEventListener(eventName, eventsMap[eventKey])
        })
    }
  }

  bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()
    for (let key in regionsMap) {
      const element = fragment.querySelector(regionsMap[key])
      if (element) {
        this.regions[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.bindRegions(templateElement.content)

    this.onRender()

    this.parent.append(templateElement.content)
  }
}
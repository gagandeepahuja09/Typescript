import { User } from '../models/User'
export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'mouseover:h1': this.onHeaderHover
    }
  }

  onHeaderHover(): void {
    console.log('Hi there')
  }

  template(): string {
    return `
      <div>
        <h1>UserForm</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input/>
      </div>
    `
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

  render(): void {
    const templateElement = document.createElement('template')
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.parent.append(templateElement.content)
  }
}
class Node {
  next: Node | null = null
  constructor(public data: number) {
  }
}

export class LinkedList {
  head: Node | null = null

  add(data: number): void {
    if (!this.head) {
      this.head = new Node(data)
      return
    }

    let tail = this.head
    while (tail.next) {
      tail = tail.next
    }
    tail.next = new Node(data)
  }

  get length(): number {
    if (!this.head) {
      return 0
    }
    let tail = this.head
    let length = 1
    while (tail.next) {
      tail = tail.next
      length++
    }
    return length
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds')
    }

    let counter = 0
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }
    throw new Error('Index out of bounds')
  }

  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error('List is empty')
    }
    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
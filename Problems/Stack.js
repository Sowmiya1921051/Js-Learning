//Stack

const stack=[2,3,4]

stack.push(1)
console.log("Push : ",stack)
console.log("Pop : ",stack.pop())
let Topelement=stack[stack.length-1]
console.log("peek : ",Topelement)


//Queue

const queue=[2,3,4]

queue.push(1)
console.log("Enqueue : ",queue)
const deQueue=queue.shift()
console.log("Dequeue : ",deQueue)
console.log("After dequeue : ",queue)
const frontItem = queue[0];
console.log("Front : ",frontItem)
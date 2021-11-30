//Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'hello']

//Tuple
let person:[number, string, boolean] = [1, 'Brad', true]
//Tuple Array
let employee: [number, string][]

employee = [
    [1, 'brad'],
    [2, 'jhon'],
    [3, 'jill']
]
//Union
let pid: string | number
pid = '22'

// Enum
enum Direction1{
    Up = 1,
    Down,
    Left,
    Right = 7
}
enum Direction2{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Left)

//Objects
type User ={
    id: number,
    name: string
}
const user : User = {
    id : 1,
    name : 'Jhon'
}
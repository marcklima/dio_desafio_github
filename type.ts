//boolean(true /false)
let isOpen: boolean
isOpen = true

// string (' aspas simples', "aspas duplas ", ` e essa aqui`)
let message: string
message = `foo ${isOpen}`

// number (init, float, hex, binary )
let total: number
total = 0xff0

//array (type[])
let  items : string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1,2,3]

//tuple -  a array tem quantidade e tipo declarada 
let title: [number, string, boolean]
title = [10, 'chico', true]

// any - qualquer coisa
let coisa: any
coisa=[1]

//void - valor vazio
function logger():void{
    console.log('foo')
}
type Bla = string | undefined


//never - nunca vai retornar
function error():never{
    throw new Error("retornando erro")
}

//object - declara como objto
let cart: object
cart={
    Key:"fi"
}

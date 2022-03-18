"use strict";
//boolean(true /false)
let isOpen;
isOpen = true;
// string (' aspas simples', "aspas duplas ", ` e essa aqui`)
let message;
message = `foo ${isOpen}`;
// number (init, float, hex, binary )
let total;
total = 0xff0;
//array (type[])
let items;
items = ["foo", "bar"];
let values;
values = [1, 2, 3];
//tuple -  a array tem quantidade e tipo declarada 
let title;
title = [10, 'chico', true];
// any - qualquer coisa
let coisa;
coisa = [1];
//void - valor vazio
function logger() {
    console.log('foo');
}
//never - nunca vai retornar
function error() {
    throw new Error("retornando erro");
}
//object - declara como objto
let cart;
cart = {
    Key: "fi"
};

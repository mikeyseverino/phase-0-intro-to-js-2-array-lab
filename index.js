const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

function appendCat(name){
    return [...cats, name];
}
appendCat("Broom");

function prependCat(name){
    return [name, ...cats];
}
prependCat("Arnold");

function removeLastCat(name){
    return cats.slice(0,-1);
}
removeLastCat();

function removeFirstCat(name){
    return cats.slice(1);
}
removeFirstCat;
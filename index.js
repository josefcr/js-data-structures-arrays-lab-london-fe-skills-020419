// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
   drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver(name){
  const copyAppendDriver = [...drivers, name]
  return copyAppendDriver;
}

function prependDriver(name){
  const copyPrependDriver = [name,...drivers]
  return copyPrependDriver;
}


function removeLastDriver(){
  const copyRemoveLast = drivers.slice(0, drivers.length - 1)
  return copyRemoveLast;
}

function 
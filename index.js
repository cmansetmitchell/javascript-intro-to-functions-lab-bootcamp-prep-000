function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var cas = string; 
  if(cas === string.toUpperCase()){
    console.log("YES INDEED!")
  } else if (cas === string.toLowerCase()){
    console.log("I can't hear you!")
  }
}
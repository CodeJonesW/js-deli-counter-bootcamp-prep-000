let ticketNumber = 0;
function takeANumber (peopleInLine) {
  ticketNumber++;
  peopleInLine.push(ticketNumber);
}
function nowServing (peopleInLine) {
  if (peopleInLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
  return 'Currently serving ' + peopleInLine.shift() + '.';
  }
}
function currentLine(peopleInLine) {
  console.log(peopleInLine);
  let newString = '';
  if (peopleInLine.length) {
    for (var i = 0; i < peopleInLine.length; i ++) {
      newString += (i+1) + '. ' +peopleInLine[i] + ', ';
    }
      return 'The line is currently: ' + newString.slice(0,newString.length-2);
  } else {
  return 'The line is currently empty.';
  }
 }
 
 // array.join() look into for alternate solution 
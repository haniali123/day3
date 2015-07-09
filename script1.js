function movies (title, time, year) {
    return {
      title: title,
      time: time,
      year: year
    };
}
var theater = [  
  ["Hulk", 90, 1999],
  ["The Key", 95, 2010],
  ["New York", 100, 2011]
];

var theaterArray = [];

for (var i = 0; i < theater.length; i++) {  //looping over the array

  theaterArray[i] = movies.apply({}, theater[i]); // applying the 'apply function 

}

for (var j = 0; j < theaterArray.length; j++) { //looping over the new array 
    console.log(theaterArray[j].title,theaterArray[j].time,theaterArray[j].year);  //printing the new array out.
}
const findTheOldest = function (people) {
    // add age value to people array
    people.forEach(person =>{
        if (isNaN(person.yearOfDeath)){
          person.age=(new Date()).getFullYear()-person.yearOfBirth;
        } else {
          person.age = person.yearOfDeath-person.yearOfBirth;
        }
    });

    // create a new array sorted by oldest
    const oldest = people.sort(function (a,b){
        return a.age>b.age ? -1 : 1
      });


      return(oldest[0]);

};




// Do not edit below this line
module.exports = findTheOldest;

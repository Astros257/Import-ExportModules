const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

//when we call import we will default to this value
//there can only be one deafult
export default pi;

//exportin more than one value
//there can more than one of these as long as they are
//not deafults
export { doublePi, triplePi };
/*
 there can only be on deafualt export
 when we export and only put the variable in the 
 js file it deafaults to the value of the dafualt export

 the second export is when we want to export more
 than just one thing. in the index.js file we put a comma
 after the variable then in {} we write the names
 just as shwon here in the math.js file but the default
 can be called anything int he index.js
 */

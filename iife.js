//IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function chai() {
    //NAMED IIFE
    console.log(`DB CONNECTED`);
}) ();

((name) => {
    console.log(`DB CONNECTED TWO`);
}) ('malik')

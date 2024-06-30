

    //    Object De-structuring 


    // const user = {
    //    firstName :"mohsin-ali",
    //    email:"example@.com",
    //    phoneNo:"12345556",
    //    Address:"karachi",
    //    hobies:["painting","walking","drawing","dancing"],
    // };


    // const {firstName,Address,hobies} = user

    // console.log(firstName,Address);




    // rest operater  ...rest sayntax


    function calculateData(...numOne){
       return numOne
    };

    console.log(calculateData(200,300,400,));




    const user ={
        product:"apple",
        price:"1234"        
    };


    function objHandling(userObj){
       return console.log(`product Name is: ${userObj.product} and product price is: ${userObj.price}`)
    }

    
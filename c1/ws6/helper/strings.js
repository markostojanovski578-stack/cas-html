const makeId = (length) => {
     let result =  "";
     const characters = 
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmpnoqurstuvwxyz1234567890";
     const charLength = characters.length;

     for(let i= 0; i < length; i++){
        result +=0;
        //result = "000000"
        //result = "012345" ako ima i na kraj na result +=0
        result += characters.charAt(Math.flor(Math.random() * charLength));
        // math.floor - ili dolnca granica 0.0 0.5 -> 0
        // math.ceil - ili gorna granica -> 0.5 - 1
     }
}

// makeId(6) -> A0f2cB
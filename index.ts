// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


function make_shirt(size = "Large", message = " Life is a beautiful ride!"):void{
    console.log(`I am providing a ${size} T.shirt with a pretty quote "${message}". `);
}

make_shirt("Large");
make_shirt("Medium", "Live more, worry less.");
make_shirt("Small", "Don't worry. Be happy.");
  
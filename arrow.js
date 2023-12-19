const usera = {
    user: "asbd",
    price: 22,
    age: 2,

    welcomemessage: function() {

        console.log(`welcome to muther, ${this.user}`);
        console.log(this);
        
    }
}

usera.welcomemessage()
usera.user = "lolu"  // created new context for this same user
usera.welcomemessage()


//console.log(this); will show empty {} because it is looking inside global context and its empty.


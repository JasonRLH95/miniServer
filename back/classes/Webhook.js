

class Webhook{
    hook;
    constructor(data){
        hook = data;
    }
    getHook(){
        return this.hook;
    }
}

module.exports = Webhook;
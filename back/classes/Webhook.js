

class Webhook{
    hook;
    constructor(data){
        this.hook = data;
    }
    getHook(){
        return this.hook;
    }
}

module.exports = Webhook;
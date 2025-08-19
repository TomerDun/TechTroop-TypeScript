// NewBoolean can have 2 values: "True" or "False"

class NewBoolean {    
    constructor(val) {
        this.val = val;
    }

    isTrue() {
        return this.val === 'True'
    }

    toggle() {
        let output;

        if (this.isTrue) {
            this.val = 'false';            
        }
        else {
            this.val = 'true';
            output = {msg: 'Changed to True!'}
        }

        return output;
    }

}

const nb1 = new NewBoolean('True');
console.log(nb.toggle().msg);

const nb2 = new NewBoolean('false');
console.log(nb2.toggle().msg);
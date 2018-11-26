var myConsole = {
    log: function(text) {
        this.log(text);
        localStorage.setItem('log', text);
    },
    
    warn: function(text) {
        this.warn(text);
        localStorage.setItem('warn', text);
    },
    
    error: function(text) {
        this.error(text);
        localStorage.setItem('error', text);
    }
}

myConsole.log = myConsole.log.bind(console);
myConsole.warn = myConsole.warn.bind(console);
myConsole.error = myConsole.error.bind(console);

myConsole.log('hi');
myConsole.warn('ouch');
myConsole.error('no!');
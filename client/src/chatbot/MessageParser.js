class MessageParser {  
    constructor(actionProvider, state) {    
        this.actionProvider = actionProvider;    
        this.state = state;  
    }
    parse(message) {    
        const lowercase = message.toLowerCase();

        if (lowercase.includes('hello')) {
            console.log(message);
            this.actionProvider.handleHello();
        }
        if (lowercase.includes('weather')) {
            console.log(message);
            this.actionProvider.handleWeather();
        }
        if (lowercase.includes('bye')) {
            console.log(message);
            this.actionProvider.handleBye();
        }  
    }
}

export default MessageParser;
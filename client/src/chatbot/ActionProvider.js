class ActionProvider {  
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {   
        this.createChatBotMessage = createChatBotMessage;     
        this.setState = setStateFunc;    
        this.createClientMessage = createClientMessage;  
    }

    handleHello = () => {    
        const message = this.createChatBotMessage('Hello. Nice to meet you.');
        this.setState((prev) => ({      
            ...prev,      
            messages: [...prev.messages, message],    
        }));  
    }
    handleWeather = () => {    
        const message = this.createChatBotMessage('Nice weather.');
        this.setState((prev) => ({      
            ...prev,      
            messages: [...prev.messages, message],    
        }));  
    }
    handleBye = () => {    
        const message = this.createChatBotMessage('Bye.');
        this.setState((prev) => ({      
            ...prev,      
            messages: [...prev.messages, message],    
        }));  
    }
}
export default ActionProvider;
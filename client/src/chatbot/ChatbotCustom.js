import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import botconfig from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';

const hide = () => {
    console.log("hide");
    let bot = document.getElementById('hideBot');
    console.log(bot)

    if(bot.style.display=='none'){
        console.log("yup")
        bot.style.display='';
    }
    else{
        console.log("nope")
        bot.style.display='none';
    }
}

const ChatbotCustom = () => {  
    return (
        <>
            <div id="hideBot" style={{display: 'none'}}>
            <Chatbot        
                config={botconfig}        
                messageParser={MessageParser}        
                actionProvider={ActionProvider}      
            />
            </div>
            <button type="button" className="btn btn-primary btn-circle btn-md" onClick={hide}>?</button>
        </>  
    );
};

export default ChatbotCustom;
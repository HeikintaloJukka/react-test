import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import Options from './Options';
const config = {  
    initialMessages: [
        createChatBotMessage(`Hello. What do you want to do?`, {
            widget: "options"
        })
    ],
    widgets: [
        {
          widgetName: "options",
          widgetFunc: (props) => <Options {...props} />,
        }
    ],
};
export default config;
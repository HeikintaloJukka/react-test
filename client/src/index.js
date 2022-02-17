import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderItem from './order/OrderItem';
import Home from './home/Home';
import NoPage from './nopage/NoPage';
import ChatbotCustom from './chatbot/ChatbotCustom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="order" element={<OrderItem />} />
          <Route path="chatbot" element={<ChatbotCustom />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

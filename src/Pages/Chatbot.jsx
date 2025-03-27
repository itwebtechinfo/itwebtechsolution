import { useState } from "react";
import { Send, Menu } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to our site, if you need help simply reply to this message, we are online and ready to help." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulating bot response (Replace this with an API call)
    setTimeout(() => {
      const botReply = { sender: "bot", text: "Thank you for your message! How can I assist you?" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-16 z-100 right-4 w-80 shadow-lg rounded-lg bg-white">
      {/* Chat Header */}
      <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
        <span className="font-semibold">We are available 24x7 for better services.</span>
        <Menu className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Chat Messages */}
      <div className="p-3 h-72 overflow-y-auto flex flex-col">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-2 rounded-lg text-sm max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-3 flex items-center border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a reply..."
          className="flex-grow p-2 border text-black rounded-l-lg focus:outline-none"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

import React, { useState, useRef, useEffect } from 'react';

import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

import { Message, sendMessage } from '@/features/shorten';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      const welcomeMessage: Message = {
        role: 'assistant',
        content:
          "🚀 Hey there! I'm Sami's AI sidekick - think of me as your friendly guide through his digital universe. Whether you're curious about his TypeScript wizardry, want to explore his full-stack adventures, or just need someone to chat with while browsing, I'm here to help! What brings you to Sami's corner of the web today?",
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, hasOpened]);

  useEffect(() => {
    // Auto-open chat after a short delay when page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: message,
    };
    setMessages([...messages, userMessage]);
    setMessage('');
    setIsTyping(true);
    const response: string[] = await sendMessage([...messages, userMessage]);
    const newMessages: Message[] = [
      ...messages,
      userMessage,
      ...response.map((message) => {
        return { role: 'assistant', content: message } as Message;
      }),
    ];
    setMessages(newMessages);
    setIsTyping(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        className={`fixed bottom-4 right-4 transform rounded-full p-4 
          shadow-lg transition-all duration-300 ease-in-out hover:scale-110
          ${
            isOpen
              ? 'rotate-180 bg-red-500 hover:bg-red-600'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
      >
        {isOpen ? (
          <X className="size-6 text-white" />
        ) : (
          <MessageSquare className="size-6 text-white" />
        )}
      </button>
      {/* Chat Window */}
      <div
        ref={chatWindowRef}
        className={`fixed bottom-20 right-4 w-full max-w-[400px] rounded-2xl bg-white 
          shadow-2xl transition-all duration-300 ease-in-out${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-4 opacity-0'
          }`}
      >
        {/* Header */}
        <div className="rounded-t-2xl border-b border-gray-200 bg-blue-600 p-4 text-white">
          <div className="flex items-center gap-2">
            <Bot className="size-6" />
            <div>
              <h3 className="font-semibold">Sami AI Assistant</h3>
              <p className="text-sm text-blue-100">
                Your guide to everything Sami
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[400px] space-y-4 overflow-y-auto p-4">
          {messages.map((msg) => (
            <div
              key={msg.content}
              className={`flex items-start gap-2 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`flex size-8 shrink-0 items-center justify-center rounded-full
                  ${
                    msg.role === 'user'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {msg.role === 'user' ? (
                  <User className="size-5" />
                ) : (
                  <Bot className="size-5" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl p-3
                  ${
                    msg.role === 'user'
                      ? 'rounded-tr-none bg-blue-600 text-white'
                      : 'rounded-tl-none bg-gray-100 text-gray-800'
                  }`}
              >
                <p className="text-sm">{msg.content}</p>
                <span className="mt-1 block text-xs opacity-70">
                  {/* {msg.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })} */}
                </span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-gray-100">
                <Bot className="size-5 text-gray-600" />
              </div>
              <div className="rounded-2xl rounded-tl-none bg-gray-100 p-3">
                <Loader2 className="size-5 animate-spin text-gray-600" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
          <div className="flex items-end gap-2">
            <TextareaAutosize
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              maxRows={4}
              className="flex-1 resize-none rounded-xl border border-gray-200 p-3 
                focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className="rounded-xl bg-blue-600 p-3 text-white transition-all duration-200
                hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="size-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

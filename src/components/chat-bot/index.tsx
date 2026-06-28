import React, { useState, useRef, useEffect, useCallback } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

import { Message, sendMessage } from '@/features/shorten';

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Sami's AI assistant. Ask me anything about his services, tech stack, past projects, or availability — I'll give you a straight answer.",
};

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 animate-bounce rounded-full bg-white/40"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '0.9s' }}
        />
      ))}
    </div>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Auto-open after delay
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Inject welcome message on first open
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setHasOpened(true);
      setMessages([WELCOME]);
    }
    if (isOpen) setUnread(0);
  }, [isOpen, hasOpened]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Count unread when closed
  useEffect(() => {
    if (!isOpen && messages.length > 0) {
      const assistantMessages = messages.filter(
        (m) => m.role === 'assistant',
      ).length;
      setUnread(assistantMessages);
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!message.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: message.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setMessage('');
    setIsTyping(true);

    try {
      const response: string[] = await sendMessage(history);
      setMessages([
        ...history,
        ...response.map((r) => ({ role: 'assistant' as const, content: r })),
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void handleSubmit();
    }
  };

  const open = () => {
    setIsOpen(true);
    setUnread(0);
    setTimeout(() => inputRef.current?.focus(), 150);
  };

  return (
    <div ref={chatWindowRef} className="fixed bottom-5 right-5 z-50">
      {/* ── Chat window ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex w-[360px] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E0E1C] shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 border-b border-white/[0.06] bg-gradient-to-r from-blue-600/20 via-blue-600/10 to-transparent px-4 py-3.5">
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,rgba(59,130,246,0.12),transparent)]" />

              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-glow-blue-sm">
                  <Bot className="size-4.5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border border-[#0E0E1C] bg-emerald-400" />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  Sami&apos;s AI Assistant
                </p>
                <p className="flex items-center gap-1.5 text-[0.7rem] text-white/35">
                  <Sparkles className="size-2.5 text-blue-400" />
                  Powered by Claude · Online
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="flex size-7 items-center justify-center rounded-lg text-white/30 transition-colors hover:bg-white/[0.07] hover:text-white"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="scrollbar-thin flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((msg, idx) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  className={`flex items-end gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div
                    className={`mb-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${
                      msg.role === 'user' ? 'bg-blue-600/20' : 'bg-white/[0.06]'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="size-3.5 text-blue-400" />
                    ) : (
                      <Bot className="size-3.5 text-white/40" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[76%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'rounded-br-sm bg-blue-600 text-white'
                        : 'rounded-bl-sm border border-white/[0.06] bg-white/[0.04] text-white/80'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-end gap-2.5">
                  <div className="mb-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                    <Bot className="size-3.5 text-white/40" />
                  </div>
                  <div className="rounded-2xl rounded-bl-sm border border-white/[0.06] bg-white/[0.04] px-3.5 py-3">
                    <TypingDots />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] bg-[#0A0A12] px-3 pb-3 pt-2.5">
              <form
                onSubmit={(e) => {
                  void handleSubmit(e);
                }}
                className="flex items-end gap-2"
              >
                <TextareaAutosize
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything…"
                  maxRows={4}
                  className="flex-1 resize-none rounded-xl border border-white/[0.07] bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-blue-500/40 focus:bg-white/[0.07] focus:ring-1 focus:ring-blue-500/20"
                />
                <button
                  type="submit"
                  disabled={!message.trim() || isTyping}
                  className="mb-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Send className="size-3.5" />
                </button>
              </form>
              <p className="mt-1.5 text-center text-[0.62rem] text-white/15">
                ↵ Enter to send · Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FAB trigger ──────────────────────────────────────── */}
      <motion.button
        onClick={isOpen ? () => setIsOpen(false) : open}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        className={`relative ml-auto flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-sm font-semibold text-white shadow-glow-blue transition-all duration-300 ${
          isOpen
            ? 'border-white/[0.1] bg-white/[0.07]'
            : 'border-blue-500/30 bg-blue-600 hover:bg-blue-500 hover:shadow-glow-blue-lg'
        }`}
      >
        {isOpen ? (
          <>
            <X className="size-4" />
            Close
          </>
        ) : (
          <>
            <Bot className="size-4" />
            Chat with AI
            {/* Unread badge */}
            {unread > 0 && !isOpen && (
              <span className="absolute -right-1.5 -top-1.5 flex size-4 items-center justify-center rounded-full bg-emerald-500 text-[0.6rem] font-bold text-white">
                {unread}
              </span>
            )}
          </>
        )}
      </motion.button>
    </div>
  );
}

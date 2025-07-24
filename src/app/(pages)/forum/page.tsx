"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// import { CodeProps } from 'react-markdown';

type Message = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are a helpful AI assistant.\n- Provide clear and concise responses\n- Be friendly and professional\n- If you're not sure about something, say so\n- Keep responses focused and relevant\n- Use markdown formatting when appropriate`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: SYSTEM_PROMPT }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const sendChat = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setTyping(true);
    setError(null);

    const newUserMsg: Message = { role: 'user', content: input };
    const updated = [...messages, newUserMsg];
    setMessages(updated);
    setInput("");

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }] as Message[]);
    } catch (err: any) {
      console.error('Client Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendChat(); };

  return (
    <div className="h-screen relative z-50 flex flex-col p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.filter(m => m.role !== 'system').map((msg, i) => (
          <div key={i} className={`p-3 rounded ${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}> 
            {msg.role === 'assistant' ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={{
                code: ({ inline, className, children, ...props }: CodeProps) => (
                  <code className={`${inline ? 'bg-gray-200 rounded px-1' : 'block bg-gray-800 text-white p-2 rounded'} ${className}`} {...props}>
                    {children}
                  </code>
                )
              }}>{msg.content}</ReactMarkdown>
            ) : (
              <p className="whitespace-pre-wrap">{msg.content}</p>
            )}
          </div>
        ))}
        {typing && <div className="bg-gray-100 self-start p-3 rounded">thinking...</div>}
        {error && <div className="text-red-500 text-center">Error: {error}</div>}
        <div ref={endRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} disabled={loading}
          className="flex-1 border p-2 rounded" placeholder="Type your message..." />
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50">
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}

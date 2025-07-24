"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
// import { CodeProps } from 'react-markdown';
import "../../../css/Chat.css";
import Header from "@/components/Header";

type Message = { role: "user" | "assistant" | "system"; content: string };

const SYSTEM_PROMPT = `You are a helpful AI assistant.\n- Provide clear and concise responses\n- Be friendly and professional\n- If you're not sure about something, say so\n- Keep responses focused and relevant\n- Use markdown formatting when appropriate`;

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: SYSTEM_PROMPT },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => endRef.current?.scrollIntoView({ behavior: "smooth" }),
    [messages]
  );

  const sendChat = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setTyping(true);
    setError(null);

    const newUserMsg: Message = { role: "user", content: input };
    const updated = [...messages, newUserMsg];
    setMessages(updated);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      setMessages(
        (prev) =>
          [...prev, { role: "assistant", content: data.text }] as Message[]
      );
    } catch (err: any) {
      console.error("Client Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendChat();
  };

  return (
    <>
      <Header />
      <div className="chat-container">
        <div className="chat-layout">
          <div className="chat-header">
            <h1 className="chat-title">Chat with KrishiSahayak</h1>
            <p className="chat-subtitle">Ask anything you want</p>
          </div>

          <div className="messages-container">
            <div className="messages-space">
              {messages
                .filter((m) => m.role !== "system")
                .map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded message-bubble ${
                      msg.role === "user"
                        ? "bg-blue-100 self-end message-user"
                        : "bg-gray-100 self-start message-assistant"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                        className="message-content"
                        components={{
                          code: ({
                            inline,
                            className,
                            children,
                            ...props
                          }: any) => (
                            <code
                              className={`${
                                inline
                                  ? "bg-gray-200 rounded px-1"
                                  : "block bg-gray-800 text-white p-2 rounded"
                              } ${className}`}
                              {...props}
                            >
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    ) : (
                      <p className="whitespace-pre-wrap message-content">
                        {msg.content}
                      </p>
                    )}
                  </div>
                ))}

              {typing && (
                <div className="message-bubble message-assistant typing-indicator">
                  <div className="typing-dots">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              )}

              {error && <div className="error-message">Error: {error}</div>}
              <div ref={endRef} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="chat-form">
            <div className="input-container">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                placeholder="Type your message..."
                className="chat-input"
              />
              <button type="submit" disabled={loading} className="send-button">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

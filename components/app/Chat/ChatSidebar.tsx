import { AnimatePresence, motion } from "framer-motion";
import { Send, Sparkles, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface Message {
  type: "assistant" | "user";
  content: string;
  suggestions?: string[];
}

interface ChatSidebarProps {
  messages: Message[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onSuggestionClick: (suggestion: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function ChatSidebar({
  messages,
  inputValue,
  onInputChange,
  onSendMessage,
  onSuggestionClick,
  isOpen,
  onClose,
}: ChatSidebarProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-[100]"
          />

          {/* Chat Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, x: 100, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 400 }}
            className="fixed bottom-6 right-6 z-[10000] w-full max-w-sm bg-gradient-to-br from-primary/60 to-secondary/60 rounded-2xl shadow-2xl overflow-hidden border border-primary"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <div>
                  <h3 className="font-bold text-sm">Mua Sắm Do AI Hỗ Trợ</h3>
                  <p className="text-xs text-white/80">Trải Nghiệm</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-white">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${
                      msg.type === "assistant" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        msg.type === "assistant"
                          ? "bg-secondary text-gray-900"
                          : "bg-primary text-white"
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages[messages.length - 1]?.suggestions && (
              <div className="p-3 border-t border-gray-200 bg-white">
                <div className="space-y-2">
                  {messages[messages.length - 1]?.suggestions.map(
                    (suggestion, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSuggestionClick(suggestion)}
                        className="w-full px-2 py-1.5 bg-secondary/90 hover:bg-secondary rounded-lg text-xs font-medium text-gray-700 border border-primary transition-all duration-200 text-left"
                      >
                        {suggestion}
                      </motion.button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => onInputChange(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Hỏi bất cứ điều gì..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onSendMessage}
                  className="p-2 bg-primary/90 text-white rounded-lg hover:bg-primary transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

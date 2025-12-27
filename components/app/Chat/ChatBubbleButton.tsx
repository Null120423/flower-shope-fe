"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { ChatSidebar } from "./ChatSidebar";
const AI_RESPONSES: Record<string, { text: string; suggestions: string[] }> = {
  "💕": {
    text: "💕 Ồ! Dành cho người yêu! Hãy để tôi gợi ý những bông hoa đẹp để thể hiện tình yêu của bạn",
    suggestions: ["🌹 Hoa hồng đỏ", "🌹 Hoa tulip", "🌷 Hoa hướng dương"],
  },
  "🎉": {
    text: "🎉 Chúc mừng! Những bông hoa tươi sáng sẽ mang lại không khí vui vẻ",
    suggestions: [
      "🌼 Hoa hướng dương",
      "🌸 Hoa cẩm chướng",
      "💐 Hoa đa sắc màu",
    ],
  },
  "🙏": {
    text: "🙏 Cảm ơn! Những bông hoa đẹp này sẽ truyền tải lòng biết ơn của bạn hoàn hảo",
    suggestions: ["🌺 Hoa lan", "🌸 Hoa baby breath", "💛 Hoa cúc"],
  },
  "😔": {
    text: "😔 Bày tỏ tiếc thương! Những bông hoa đơn giản và lịch sự sẽ thể hiện sự hiểu biết của bạn",
    suggestions: [
      "🤍 Hoa loa kèn trắng",
      "💜 Hoa cẩm chướng tím",
      "🌸 Hoa bạch hợp",
    ],
  },
};
interface Message {
  type: "assistant" | "user";
  content: string;
  suggestions?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    type: "assistant",
    content: "✨ Xin chào! Tôi là Flower AI Assistant 🌸",
  },
  {
    type: "assistant",
    content: "Hãy cho tôi biết, bạn đang tìm kiếm hoa cho sự kiện nào?",
    suggestions: [
      "💕 Dành cho người yêu",
      "🎉 Chúc mừng",
      "🙏 Cảm ơn",
      "😔 Bày tỏ tiếc thương",
    ],
  },
];

export function ChatBubbleButton() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  // Handler Functions
  const handleSuggestion = (suggestion: string) => {
    const newMessages: Message[] = [
      ...messages,
      { type: "user", content: suggestion },
    ];

    let matchedKey = "";
    for (const key of Object.keys(AI_RESPONSES)) {
      if (suggestion.includes(key)) {
        matchedKey = key;
        break;
      }
    }

    if (matchedKey) {
      const response = AI_RESPONSES[matchedKey];
      newMessages.push({
        type: "assistant",
        content: response.text,
        suggestions: response.suggestions,
      });
    }

    setMessages(newMessages);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { type: "user", content: inputValue },
    ];

    newMessages.push({
      type: "assistant",
      content:
        "✨ Tuyệt vời! Hãy để tôi tìm kiếm những bông hoa phù hợp với nhu cầu của bạn...",
      suggestions: [
        "🌹 Hoa hồng đỏ",
        "🌼 Hoa hướng dương",
        "🌸 Hoa cẩm chướng",
      ],
    });

    setMessages(newMessages);
    setInputValue("");
  };
  return (
    <>
      <motion.button
        onClick={() => setIsChatOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed z-[9000] bottom-6 right-6 p-4 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
      {/* Chat Modal */}
      <ChatSidebar
        messages={messages}
        inputValue={inputValue}
        onInputChange={setInputValue}
        onSendMessage={handleSendMessage}
        onSuggestionClick={handleSuggestion}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
}

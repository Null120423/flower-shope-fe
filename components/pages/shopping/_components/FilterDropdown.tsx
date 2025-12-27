import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function FilterDropdown({
  label,
  options,
  value,
  onChange,
  isOpen,
  onToggle,
}: FilterDropdownProps) {
  return (
    <div className="relative inline-block">
      <button
        onClick={onToggle}
        className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]"
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                onToggle();
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                value === opt ? "bg-pink-50 text-pink-600 font-semibold" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

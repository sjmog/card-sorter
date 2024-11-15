import { Button } from "@/components/ui/button";
import { Highlighter } from "lucide-react";

interface HighlightBarProps {
  categories: Array<{
    name: string;
    color: string;
  }>;
  onDone: () => void;
}

export function HighlightBar({ categories, onDone }: HighlightBarProps) {
  if (categories.length === 0) return null;

  const colorBarStyle = categories.length === 1
    ? { backgroundColor: categories[0].color }
    : {
        background: `repeating-linear-gradient(
          45deg,
          ${categories.map((cat, i) => 
            `${cat.color} ${i * 20}px, ${cat.color} ${(i + 1) * 20}px`
          ).join(',')}
        )`
      };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div 
        className="h-1"
        style={colorBarStyle}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="py-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-xs text-gray-600 min-w-0">
            <Highlighter className="h-3.5 w-3.5 shrink-0" />
            <span className="whitespace-nowrap overflow-hidden">
              <span className="hidden sm:inline">Highlight text to mark as </span>
              {categories.map((cat, i) => (
                <span key={cat.name} className="whitespace-nowrap">
                  <span 
                    className="font-semibold" 
                    style={{ color: cat.color }}
                  >
                    {cat.name}
                  </span>
                  {i < categories.length - 1 && (
                    <span className="text-gray-600"> + </span>
                  )}
                </span>
              ))}
            </span>
          </div>
          <Button
            variant="outline"
            className="shrink-0 ml-4"
            onClick={onDone}
          >
            Done
          </Button>
        </div>
      </div>
    </div>
  );
} 
import { categories as categoryData } from './constants';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HighlightedProps {
  categories: string[];
  children: React.ReactNode;
  onRemove?: () => void;
}

export function Highlighted({ categories, children, onRemove }: HighlightedProps) {
  const categoryInfo = categories.map(categoryName => 
    categoryData.find(c => c.name === categoryName)
  ).filter((c): c is typeof categoryData[number] => c !== undefined);

  const colors = categoryInfo.map(c => c.color);

  const style = colors.length === 1
    ? {
        backgroundColor: `${colors[0]}40`,
        borderBottom: `2px solid ${colors[0]}`
      }
    : {
        background: `repeating-linear-gradient(
          45deg,
          ${colors.map((color, i) => 
            `${color}40 ${i * 20}px, ${color}40 ${(i + 1) * 20}px`
          ).join(',')}
        )`,
        borderBottom: `2px solid ${colors[0]}`
      };

  const tooltipContent = (
    <div className="flex items-center gap-2">
      <span>
        {categoryInfo.map((cat, i) => (
          <>
            <span key={cat.name} style={{ color: cat.color }}>
              {cat.name}
            </span>
            {i < categoryInfo.length - 1 && (
              <span className="text-white"> and </span>
            )}
          </>
        ))}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="h-4 w-4 hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation();
          onRemove?.();
        }}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className="px-1 py-0.5 rounded cursor-default"
          style={style}
          data-categories={categories.join(',')}
        >
          {children}
        </span>
      </TooltipTrigger>
      <TooltipContent>
        {tooltipContent}
      </TooltipContent>
    </Tooltip>
  );
} 
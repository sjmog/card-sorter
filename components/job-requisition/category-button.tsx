import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

interface CategoryButtonProps {
  name: string;
  color: string;
  isSelected: boolean;
  isPartOfComposite: boolean;
  onClick: () => void;
  onAddClick?: () => void;
  onRemoveClick?: () => void;
}

export function CategoryButton({ 
  name, 
  color, 
  isSelected,
  isPartOfComposite,
  onClick,
  onAddClick,
  onRemoveClick
}: CategoryButtonProps) {
  const showAddButton = onAddClick && !isPartOfComposite;
  const showRemoveButton = onRemoveClick && isPartOfComposite;

  const buttonStyle = isSelected ? {
    backgroundColor: `${color}99`, // 60% opacity
    borderColor: color,
    color: 'black'
  } : undefined;

  return (
    <div className="min-w-[150px] basis-[calc(50%-0.5rem)] md:basis-[calc(25%-0.75rem)]">
      <div className="relative">
        <Button
          variant={isSelected ? "outline" : "outline"}
          className="relative w-full h-12"
          onClick={onClick}
          style={buttonStyle}
        >
          <div
            className="absolute top-0 left-0 right-0 h-2"
            style={{ backgroundColor: color }}
          />
          <span className="mt-2">
            {name}
          </span>
        </Button>
        {showAddButton && (
          <Button
            size="icon"
            variant="outline"
            className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onAddClick();
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        )}
        {showRemoveButton && (
          <Button
            size="icon"
            variant="outline"
            className="absolute -right-2 -top-2 h-6 w-6 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClick();
            }}
          >
            <Minus className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
} 
import Markdown from 'markdown-to-jsx';
import { Highlighted } from './highlighted';
import { categories } from './constants';
import { useCallback, useRef } from 'react';

interface RequisitionContentProps {
  content: string;
  activeCategories: Set<string>;
  onContentChange: (newContent: string) => void;
}

interface HighlightedComponentProps {
  category: string;
  children: React.ReactNode;
}

export function RequisitionContent({ content, activeCategories, onContentChange }: RequisitionContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTextHighlight = useCallback(() => {
    if (activeCategories.size === 0 || !contentRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const text = selection.toString().trim();
    if (!text) return;

    // Don't highlight if we're inside an existing highlight
    const range = selection.getRangeAt(0);
    const ancestor = range.commonAncestorContainer;
    const closestHighlight = (ancestor as Element).closest?.('highlighted') 
      || (ancestor.parentElement?.closest('highlighted'));
    if (closestHighlight) return;

    // Find all instances of the text in the content
    const indices: number[] = [];
    let currentIndex = 0;
    while (currentIndex !== -1) {
      currentIndex = content.indexOf(text, currentIndex);
      if (currentIndex !== -1) {
        indices.push(currentIndex);
        currentIndex += 1;
      }
    }

    if (indices.length === 0) return;

    // Find which instance was selected by comparing DOM positions
    let selectedNodeIndex = 0;
    const walker = document.createTreeWalker(
      contentRef.current,
      NodeFilter.SHOW_TEXT,
      null
    );

    let currentNode = walker.nextNode();
    while (currentNode) {
      if (currentNode.textContent?.includes(text)) {
        if (range.startContainer === currentNode || 
            range.startContainer.parentNode === currentNode) {
          break;
        }
        selectedNodeIndex++;
      }
      currentNode = walker.nextNode();
    }

    // Use the corresponding index in the source
    const textIndex = indices[Math.min(selectedNodeIndex, indices.length - 1)];

    // Make sure we're not inside an existing highlight tag
    const beforeText = content.substring(0, textIndex);
    const lastOpenTag = beforeText.lastIndexOf('<highlighted');
    const lastCloseTag = beforeText.lastIndexOf('</highlighted>');
    if (lastOpenTag > lastCloseTag) return;

    // Create the new content with the highlight
    const categoriesArray = Array.from(activeCategories);
    const newContent = 
      content.substring(0, textIndex) +
      `<highlighted categories="${categoriesArray.join(',')}">${text}</highlighted>` +
      content.substring(textIndex + text.length);

    onContentChange(newContent);
    selection.removeAllRanges();
  }, [activeCategories, content, onContentChange]);

  const handleRemoveHighlight = useCallback((text: string) => {
    // Find the highlighted text and remove the highlight tags
    const regex = new RegExp(`<highlighted[^>]*>${text}</highlighted>`);
    const newContent = content.replace(regex, text);
    onContentChange(newContent);
  }, [content, onContentChange]);

  const options = {
    overrides: {
      highlighted: {
        component: ({ categories: cats, children }: { categories: string, children: React.ReactNode }) => {
          const categoryList = cats.split(',');
          return (
            <Highlighted 
              categories={categoryList}
              onRemove={() => handleRemoveHighlight(children as string)}
            >
              {children}
            </Highlighted>
          );
        }
      }
    }
  };

  return (
    <div 
      ref={contentRef}
      className="prose max-w-none"
      onMouseUp={handleTextHighlight}
    >
      <Markdown options={options}>{content}</Markdown>
    </div>
  );
} 
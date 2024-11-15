"use client";

import { useState } from 'react';
import { CategoryButton } from "./job-requisition/category-button";
import { HighlightBar } from "./job-requisition/highlight-bar";
import { RequisitionContent } from "./job-requisition/requisition-content";
import { categories, dummyRequisition } from "./job-requisition/constants";
import { TooltipProvider } from "@/components/ui/tooltip";

export function JobRequisition() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [content, setContent] = useState(dummyRequisition);

  const handleCategoryClick = (categoryName: string, isAddMode: boolean = false) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (isAddMode) {
        newSet.add(categoryName);
      } else {
        // If clicking main button, toggle this category and clear others
        if (prev.has(categoryName) && prev.size === 1) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(categoryName);
        }
      }
      return newSet;
    });
  };

  const handleCategoryRemove = (categoryName: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      newSet.delete(categoryName);
      return newSet;
    });
  };

  const selectedCategoryData = Array.from(selectedCategories).map(name => 
    categories.find(c => c.name === name)!
  );

  return (
    <TooltipProvider>
      <div className={`max-w-4xl mx-auto p-6 relative min-h-screen ${
        selectedCategories.size > 0 ? 'pb-28' : ''
      }`}>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <CategoryButton
              key={category.name}
              name={category.name}
              color={category.color}
              isSelected={selectedCategories.has(category.name)}
              isPartOfComposite={selectedCategories.has(category.name) && selectedCategories.size > 1}
              onClick={() => handleCategoryClick(category.name)}
              onAddClick={
                selectedCategories.size > 0 && !selectedCategories.has(category.name)
                  ? () => handleCategoryClick(category.name, true)
                  : undefined
              }
              onRemoveClick={
                selectedCategories.size > 1 && selectedCategories.has(category.name)
                  ? () => handleCategoryRemove(category.name)
                  : undefined
              }
            />
          ))}
        </div>
        
        <RequisitionContent 
          content={content} 
          activeCategories={selectedCategories}
          onContentChange={setContent}
        />

        <HighlightBar
          categories={selectedCategoryData}
          onDone={() => setSelectedCategories(new Set())}
        />
      </div>
    </TooltipProvider>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, ChevronUp, ChevronDown } from "lucide-react";
import { roles } from "@/data";

const ProjectPlanner = () => {
  // Add state to track used deliverables
  const [usedDeliverables, setUsedDeliverables] = useState(new Set());
  const [ganttItems, setGanttItems] = useState([]);
  const [nextRow, setNextRow] = useState(0);
  // Add state for tracking drag operation on Gantt items
  const [draggedGanttItem, setDraggedGanttItem] = useState(null);
  const [dragStartX, setDragStartX] = useState(0);
  // Add state for tracking mouse position during drag
  const [isDragging, setIsDragging] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [initialStartDay, setInitialStartDay] = useState(0);
  const [chartContainer, setChartContainer] = useState(null);

  const GANTT_DAYS = 360;
  const GANTT_DAY_WIDTH = 50;

  // Handler for dragging Gantt items
  const handleGanttItemMouseDown = (e, item) => {
    e.preventDefault();
    const container = e.currentTarget.closest('.gantt-container');
    setChartContainer(container);
    const chartRect = container.getBoundingClientRect();
    setDragStartX(e.clientX - chartRect.left);
    setDraggedItem(item);
    setInitialStartDay(item.startDay);
    setIsDragging(true);
  };

  // Update mousemove handler to use stored container reference
  const handleMouseMove = (e) => {
    if (!isDragging || !draggedItem || !chartContainer) return;

    const chartRect = chartContainer.getBoundingClientRect();
    const currentX = e.clientX - chartRect.left;
    const deltaX = currentX - dragStartX;
    const daysPerPixel = 1 / GANTT_DAY_WIDTH;
    const daysDelta = Math.round(deltaX * daysPerPixel);

    const newStartDay = Math.max(
      1,
      Math.min(GANTT_DAYS - draggedItem.duration, initialStartDay + daysDelta)
    );

    setGanttItems(items =>
      items.map(item =>
        item.id === draggedItem.id
          ? { ...item, startDay: newStartDay }
          : item
      )
    );
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedItem(null);
    setChartContainer(null);  // Clear the reference
  };

  // Update useEffect dependencies
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, draggedItem, dragStartX, initialStartDay, chartContainer]);

  // Delete Gantt item and make deliverable available again
  const handleDeleteGanttItem = (itemId, deliverableTitle) => {
    setGanttItems((items) => items.filter((item) => item.id !== itemId));
    setUsedDeliverables((used) => {
      const newUsed = new Set(used);
      newUsed.delete(deliverableTitle);
      return newUsed;
    });
  };

  // Handler for when a deliverable is dragged onto the Gantt chart
  const handleDrop = (e) => {
    e.preventDefault();
    let deliverableData;

    try {
      deliverableData = JSON.parse(e.dataTransfer.getData("deliverable"));
    } catch (err) {
      console.error(err)
      return;
    }

    // Don't add if already on chart
    if (usedDeliverables.has(deliverableData.title)) return;

    // Calculate position based on drop coordinates
    const chartRect = e.currentTarget.getBoundingClientRect();
    const dropX = e.clientX - chartRect.left;
    const dropY = e.clientY - chartRect.top;

    // Convert drop position to day number (assuming 30 day width)
    const daysPerPixel = 30 / chartRect.width;
    const startDay = Math.max(
      1,
      Math.min(30, Math.floor(dropX * daysPerPixel))
    );

    // Create new Gantt item
    const newItem = {
      id: Date.now(),
      title: deliverableData.title,
      person: deliverableData.person,
      duration: parseInt(deliverableData.duration),
      startDay,
      color: deliverableData.color,
      row: nextRow,
    };

    setGanttItems([...ganttItems, newItem]);
    setNextRow(nextRow + 1);
    setUsedDeliverables((used) => new Set([...used, deliverableData.title]));
  };

  const createDragPreview = (duration, color) => {
    // Create a preview element
    const preview = document.createElement('div');
    preview.className = `${color} rounded opacity-80`;
    preview.style.width = `${duration * GANTT_DAY_WIDTH}px`;
    preview.style.height = '30px';
    
    // Add to document temporarily (required for drag image)
    preview.style.position = 'fixed';
    preview.style.top = '-1000px';
    document.body.appendChild(preview);
    
    return preview;
  };

  const handleDragStart = (e, deliverable, person, color) => {
    const duration = parseInt(deliverable.timeline.split(' ')[1]);
    
    // Create the preview element
    const preview = createDragPreview(duration, color);
    
    // Set the custom drag image
    e.dataTransfer.setDragImage(preview, 0, 15);
    
    // Remove the preview element after a short delay
    setTimeout(() => {
      document.body.removeChild(preview);
    }, 0);

    // Set the drag data as before
    e.dataTransfer.setData(
      "deliverable",
      JSON.stringify({
        title: deliverable.title,
        duration: deliverable.timeline.split(" ")[1],
        person: person,
        color: color,
      })
    );
  };

  // Add handler for moving items up/down
  const moveGanttItem = (itemIndex, direction) => {
    setGanttItems(items => {
      const newItems = [...items];
      const targetIndex = direction === 'up' ? itemIndex - 1 : itemIndex + 1;
      
      // Swap items
      [newItems[itemIndex], newItems[targetIndex]] = 
      [newItems[targetIndex], newItems[itemIndex]];
      
      return newItems;
    });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Gantt Chart Section */}
      <div
        className="flex-1 bg-white gantt-container h-[50vh] overflow-y-auto border-b shadow-sm border-slate-200"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <h2 className="text-xl font-bold px-8 py-4">Project Timeline</h2>
        <div className="relative h-full overflow-x-scroll pt-8">
          {/* Timeline */}
          <div className="px-8">
            <div
              className="flex justify-between"
              style={{ width: `${GANTT_DAYS * GANTT_DAY_WIDTH}px` }}
            >
              {Array.from({ length: GANTT_DAYS }).map((_, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="w-px mt-px h-2 -mt-2 absolute bg-slate-300" />
                  <div className="w-px mt-px min-h-[50vh] absolute bg-slate-100" style={{ height: `${117 + ganttItems.length * 40}px` }} />
                  <div className="absolute w-[100px] -ml-[50px] -mt-8 text-center text-xs text-slate-400">
                    Day {i + 1}
                  </div>
                </div>
              ))}
            </div>
            <div
              className="h-px bg-slate-300"
              style={{ width: `${GANTT_DAYS * GANTT_DAY_WIDTH}px` }}
            />
          </div>

          {/* Updated Gantt Items with move buttons */}
          <div className="relative mt-4 ml-8 mr-8 min-h-[50vh]" style={{ height: `${100 + ganttItems.length * 40}px` }}>
            {ganttItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute text-white rounded px-2 py-1 text-sm cursor-move group ${item.color}`}
                style={{
                  left: `${(item.startDay - 1) * GANTT_DAY_WIDTH}px`,
                  width: `${item.duration * GANTT_DAY_WIDTH}px`,
                  top: `${index * 40}px`,
                }}
                onMouseDown={(e) => handleGanttItemMouseDown(e, item)}
              >
                {item.title} ({item.person})
                
                {/* Controls container */}
                <div className="invisible group-hover:visible absolute -right-2 -top-2 flex gap-1">
                  {/* Up arrow - show only if not first item */}
                  {index > 0 && (
                    <button
                      className="bg-slate-700 hover:bg-slate-600 rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveGanttItem(index, 'up');
                      }}
                    >
                      <ChevronUp className="w-3 h-3" />
                    </button>
                  )}
                  
                  {/* Down arrow - show only if not last item */}
                  {index < ganttItems.length - 1 && (
                    <button
                      className="bg-slate-700 hover:bg-slate-600 rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        moveGanttItem(index, 'down');
                      }}
                    >
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  )}
                  
                  {/* Delete button */}
                  <button
                    className="bg-red-500 hover:bg-red-400 rounded-full w-5 h-5 flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteGanttItem(item.id, item.title);
                    }}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated Role Cards Section */}
      <div className="h-1/2 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => (
            <Card key={role.name} className="bg-white">
              <CardHeader className={`${role.color} bg-opacity-10 rounded-t-lg`}>
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full ${role.color} flex items-center justify-center`}
                  >
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle>{role.name}</CardTitle>
                    <p className="text-sm text-slate-600">{role.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {role.deliverables.map((deliverable) => (
                    <Card
                      key={deliverable.title}
                      className={`bg-white shadow-sm transition-opacity ${
                        usedDeliverables.has(deliverable.title)
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-move"
                      }`}
                      draggable={!usedDeliverables.has(deliverable.title)}
                      onDragStart={(e) =>
                        !usedDeliverables.has(deliverable.title) &&
                        handleDragStart(e, deliverable, role.name, role.color)
                      }
                    >
                      <CardHeader className="p-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base">
                            {deliverable.title}
                          </CardTitle>
                          <span className="text-sm text-slate-500">
                            {deliverable.timeline}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="p-3 pt-0">
                        <p className="text-sm mb-2">
                          {deliverable.description}
                        </p>
                        <div className="text-sm">
                          <p className="text-slate-600">
                            <strong>Requires:</strong>{" "}
                            {deliverable.requirements}
                          </p>
                          <p className="text-slate-600">
                            <strong>Delivers:</strong> {deliverable.output}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPlanner;

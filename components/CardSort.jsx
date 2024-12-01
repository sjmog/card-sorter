"use client";

import React, { useState, useEffect } from "react";
import { tasks } from "@/data/tasks";

const roles = [...new Set(tasks.map((task) => task.roleTitle))];

const CardIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const TaskModal = ({ task, role, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <div className="mb-4">
          <span className="text-sm text-blue-600 font-medium">
            Assigned to: {role}
          </span>
        </div>
        <h3 className="font-bold text-xl mb-4">{task.deliverableTitle}</h3>
        <p className="text-gray-600 mb-6">{task.description}</p>
        <div className="flex flex-wrap gap-2">
          {task.tools.map((tool) => (
            <span
              key={tool}
              className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TaskCard = ({ task, isMinimized = false, stackIndex, role }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDragStart = (e) => {
    if (isMinimized) return;
    e.dataTransfer.setData("text/plain", "taskCard");
    e.currentTarget.classList.add("opacity-50");
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove("opacity-50");
  };

  const getFannedStyle = () => {
    if (!isMinimized) return {};
    return {
      transform: `translate(${stackIndex ?? 0 * 20}px, ${
        stackIndex ?? 0 * -10
      }px)`,
      zIndex: stackIndex ?? 0,
    };
  };

  return (
    <>
      <div
        draggable={!isMinimized}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={() => isMinimized && setShowModal(true)}
        style={{
          right: isMinimized
            ? `${stackIndex === 0 ? "-0.5rem" : `${stackIndex * 30}px`}`
            : "-0.5rem",
        }}
        className={`
          bg-white rounded-lg shadow-lg
          transition-all duration-300
          ${
            isMinimized
              ? "absolute -top-3 origin-top-right transform hover:scale-110 cursor-pointer"
              : "cursor-move p-4 max-w-md"
          }
        `}
      >
        {isMinimized ? (
          <div className="w-8 h-8 flex items-center justify-center text-gray-600">
            <CardIcon />
          </div>
        ) : (
          <>
            <h3 className="font-bold text-lg mb-2">{task.deliverableTitle}</h3>
            <p className="text-sm text-gray-600 mb-4">{task.description}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {task.tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      {showModal && (
        <TaskModal
          task={task}
          role={role}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Spinner = () => (
  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
);

const DropZone = ({
  role,
  onDragOver,
  onDrop,
  hasCard,
  isStack = false,
  animateState,
  task,
  correctCards = [],
  ...props
}) => {
  const [isOver, setIsOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsOver(false);
    const draggedItem = e.dataTransfer.getData("text/plain");
    if (draggedItem === "taskCard") {
      onDrop(isStack ? null : role);
    }
  };

  const getBorderColor = () => {
    if (animateState === "correct") return "border-green-500";
    if (animateState === "incorrect") return "border-red-500";
    if (isOver) return "border-blue-500";
    return "border-gray-300";
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        p-4 rounded-lg border-2 border-dashed transition-colors duration-300 relative
        ${getBorderColor()}
        ${isOver ? "bg-blue-50" : "bg-white"}
        min-h-[100px] w-[360px] flex flex-col items-center justify-center text-center
        ${props.className}
      `}
    >
      {!isStack && <span className="font-medium">{role}</span>}
      {isStack && animateState === "correct" && <Spinner />}
      {hasCard && (
        <TaskCard
          task={task}
          isMinimized={animateState === "correct"}
          role={role}
        />
      )}
      {!isStack &&
        correctCards.map((card, index) => (
          <TaskCard
            key={card.deliverableTitle}
            task={card}
            isMinimized={true}
            stackIndex={index}
            role={role}
          />
        ))}
    </div>
  );
};

const CardSort = () => {
  const [shuffledTasks, setShuffledTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [placedCard, setPlacedCard] = useState(null);
  const [animateState, setAnimateState] = useState(null);
  const [buttonColor, setButtonColor] = useState("bg-blue-500");
  const [correctPlacements, setCorrectPlacements] = useState({});
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [isGameComplete, setIsGameComplete] = useState(false);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledTasks(shuffleArray(tasks));
  }, []);

  const handleDrop = (targetRole) => {
    setPlacedCard(targetRole);
  };

  const handleCheck = () => {
    if (!placedCard) return;

    const currentTask = shuffledTasks[currentTaskIndex];
    const isCorrect = placedCard === currentTask.roleTitle;

    setButtonColor(isCorrect ? "bg-green-500" : "bg-red-500");
    setAnimateState(isCorrect ? "correct" : "incorrect");

    if (!isCorrect) {
      setPlacedCard(null);
    } else {
      const updatedCompletedTasks = new Set([
        ...completedTasks,
        currentTask.deliverableTitle,
      ]);

      setCorrectPlacements((prev) => ({
        ...prev,
        [placedCard]: [...(prev[placedCard] || []), currentTask],
      }));
      setCompletedTasks(updatedCompletedTasks);

      setTimeout(() => {
        setButtonColor("bg-blue-500");
        setAnimateState(null);

        const nextTaskIndex = shuffledTasks.findIndex(
          (task) => !updatedCompletedTasks.has(task.deliverableTitle)
        );

        if (nextTaskIndex === -1) {
          setIsGameComplete(true);
        } else {
          setCurrentTaskIndex(nextTaskIndex);
        }
        setPlacedCard(null);
      }, 1500);
    }

    if (!isCorrect) {
      setTimeout(() => {
        setButtonColor("bg-blue-500");
        setAnimateState(null);
      }, 1500);
    }
  };

  if (shuffledTasks.length === 0) {
    return null;
  }

  return (
    <div className="h-screen w-full bg-gray-50 p-8">
      <div className="h-full max-w-7xl mx-auto flex gap-12">
        <div className="w-1/3 flex flex-col items-center justify-center">
          <h2 className="text-center text-xl font-semibold mb-6">
            {isGameComplete
              ? "Great job! You've sorted all the tasks!"
              : "Which role does this task apply to?"}
          </h2>
          {!isGameComplete && (
            <>
              <DropZone
                className="w-[360px]"
                isStack={true}
                onDrop={handleDrop}
                hasCard={placedCard === null}
                task={shuffledTasks[currentTaskIndex]}
                animateState={animateState}
              />
              {placedCard && (
                <button
                  onClick={handleCheck}
                  className={`${buttonColor} text-white px-6 py-2 rounded-lg mt-6 transition-colors duration-300 hover:opacity-90`}
                >
                  Check
                </button>
              )}
            </>
          )}
        </div>

        <div className="w-2/3 grid grid-cols-2 gap-6 content-center">
          {roles.map((role) => (
            <DropZone
              key={role}
              role={role}
              onDrop={handleDrop}
              hasCard={placedCard === role}
              animateState={animateState}
              task={shuffledTasks[currentTaskIndex]}
              correctCards={correctPlacements[role] || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSort;

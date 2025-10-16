"use client"

import type React from "react"
import "./Task.css"

interface TaskProps {
  isOpen: boolean
  onClose: () => void
  taskData: {
    icon: string
    title: string
    description: string
    difficulty: string
    xp: number
    progress: number
    learningPoints: string[]
  }
  onStartLesson: () => void
}

const Task: React.FC<TaskProps> = ({ isOpen, onClose, taskData, onStartLesson }) => {
  if (!isOpen) return null

  return (
    <div className="task-overlay" onClick={onClose}>
      <div className="task-modal" onClick={(e) => e.stopPropagation()}>

        <div className="task-header">
          <div className="task-icon">{taskData.icon}</div>
          <h2 className="task-title">{taskData.title}</h2>
        </div>

        <p className="task-description">{taskData.description}</p>

        <div className="task-meta">
          <span className="task-difficulty">{taskData.difficulty}</span>
          <span className="task-xp">⭐ {taskData.xp} XP</span>
        </div>

        <div className="task-progress">
          <span className="progress-label">Progresso</span>
          <span className="progress-value">{taskData.progress}%</span>
        </div>

        <div className="task-learning">
          <div className="learning-header">
            <span className="code-icon">{"<>"}</span>
            <span className="learning-title">O que você irá aprender:</span>
          </div>
          <ul className="learning-list">
            {taskData.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="task-actions">
          <button className="task-cancel" onClick={onClose}>
            ✕ Cancelar
          </button>
          <button className="task-start" onClick={onStartLesson}>
            Começar lição
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task

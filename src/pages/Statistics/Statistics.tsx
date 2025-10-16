"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Statistics.css"

interface TagStats {
  name: string
  averageTime: number
  successRate: number
  totalQuestions: number
  color: string
}

interface Journey {
  id: string
  name: string
  progress: number
  description: string
}

const Statistics: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState("more")
  const [selectedJourney, setSelectedJourney] = useState("algorithms")

  const navigator = (item: string) => {
    setActiveNavItem(item)
    console.log(`[v0] Navegando para: ${item}`)
  }

  // Trilhas de aprendizado disponíveis
  const journeys: Journey[] = [
    {
      id: "algorithms",
      name: "Algoritmos de Ordenação",
      progress: 75,
      description: "Domine as técnicas fundamentais de ordenação.",
    },
    {
      id: "datastructures",
      name: "Estruturas de Dados",
      progress: 45,
      description: "Aprenda a organizar e manipular dados de forma eficiente.",
    },
    {
      id: "advanced",
      name: "Conceitos Avançados",
      progress: 20,
      description: "Aprofunde-se em padrões algorítmicos complexos.",
    },
  ]

  // Estatísticas de desempenho por tópico
  const tagStats: TagStats[] = [
    { name: "Bubble Sort", averageTime: 12.5, successRate: 85, totalQuestions: 24, color: "#4f46e5" },
    { name: "Merge Sort", averageTime: 18.2, successRate: 72, totalQuestions: 18, color: "#3b82f6" },
    { name: "Insertion Sort", averageTime: 9.8, successRate: 91, totalQuestions: 32, color: "#10b981" },
    { name: "Selection Sort", averageTime: 14.1, successRate: 78, totalQuestions: 21, color: "#f59e0b" },
    { name: "Quick Sort", averageTime: 22.3, successRate: 65, totalQuestions: 15, color: "#ef4444" },
  ]

  const currentJourney = journeys.find((j) => j.id === selectedJourney) || journeys[0]

  return (
    <div className="statistics-container">
      <Sidebar activeItem={activeNavItem} onNavigate={navigator} />

      <div className="statistics-main">
        <div className="statistics-header">
          <h1>Estatísticas de Aprendizado</h1>
          <p>Acompanhe seu progresso e desempenho em diferentes tópicos.</p>
        </div>

        {/* Seção de seleção de trilha */}
        <div className="journey-section">
          <h2>Selecionar Trilha</h2>
          <div className="journey-cards">
            {journeys.map((journey) => (
              <div
                key={journey.id}
                className={`journey-card ${selectedJourney === journey.id ? "active" : ""}`}
                onClick={() => setSelectedJourney(journey.id)}
              >
                <div className="journey-info">
                  <h3>{journey.name}</h3>
                  <p>{journey.description}</p>
                </div>
                <div className="journey-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${journey.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{journey.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visão geral da trilha atual */}
        <div className="journey-overview">
          <h2>Trilha Atual: {currentJourney.name}</h2>
          <div className="overview-stats">
            <div className="overview-card">
              <div className="overview-value">75%</div>
              <div className="overview-label">Progresso Geral</div>
            </div>
            <div className="overview-card">
              <div className="overview-value">110</div>
              <div className="overview-label">Total de Questões</div>
            </div>
            <div className="overview-card">
              <div className="overview-value">15.2s</div>
              <div className="overview-label">Tempo Médio de Resposta</div>
            </div>
            <div className="overview-card">
              <div className="overview-value">78%</div>
              <div className="overview-label">Taxa de Sucesso</div>
            </div>
          </div>
        </div>

        {/* Estatísticas por tópico */}
        <div className="tags-section">
          <h2>Desempenho por Tópico</h2>
          <div className="tags-grid">
            {tagStats.map((tag, index) => (
              <div key={index} className="tag-card">
                <div className="tag-header">
                  <div className="tag-indicator" style={{ backgroundColor: tag.color }}></div>
                  <h3>{tag.name}</h3>
                </div>
                <div className="tag-stats">
                  <div className="stat-item">
                    <div className="stat-value">{tag.averageTime}s</div>
                    <div className="stat-label">Tempo Médio</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{tag.successRate}%</div>
                    <div className="stat-label">Taxa de Sucesso</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{tag.totalQuestions}</div>
                    <div className="stat-label">Questões</div>
                  </div>
                </div>
                <div className="tag-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${tag.successRate}%`,
                        backgroundColor: tag.color,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Barra lateral direita */}
      <div className="right-sidebar">
        {/* Estatísticas rápidas */}
        <div className="stats">
          <div className="stat-item green">
            <span className="stat-icon">🔥</span>
            <span className="stat-number">0</span>
          </div>
          <div className="stat-item orange">
            <span className="stat-icon">💎</span>
            <span className="stat-number">9</span>
          </div>
          <div className="stat-item purple">
            <span className="stat-icon">⚡</span>
            <span className="stat-number">5</span>
          </div>
        </div>

        {/* Ranking */}
        <div className="widget">
          <div className="widget-header">
            <h3>Ranking</h3>
            <button className="view-button">Ver</button>
          </div>
          <div className="widget-content">
            <div className="leaderboard-message">
              <span className="lock-icon">🔒</span>
              <p>Comece a aprender e ganhe XP para entrar no ranking desta semana!</p>
            </div>
          </div>
        </div>

        {/* Metas Diárias */}
        <div className="widget">
          <div className="widget-header">
            <h3>Metas Diárias</h3>
            <button className="view-button">Ver</button>
          </div>
          <div className="widget-content">
            <div className="goal-item">
              <div className="goal-text">
                <span>Concluir 5 lições</span>
                <span className="goal-progress">0/5</span>
              </div>
              <span className="trophy-icon">🏆</span>
            </div>
            <div className="goal-item">
              <div className="goal-text">
                <span>Resolver 3 desafios na primeira tentativa</span>
                <span className="goal-progress">0/3</span>
              </div>
              <span className="trophy-icon">🏆</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics

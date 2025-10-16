"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./leaderboard.css"

const Leaderboard: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState("leaderboard")

  const navigator = (item: string) => {
    setActiveNavItem(item)
  }

  // Ranking estático
  const ranking = [
    { id: 1, name: "Alice", xp: 120, avatar: "👩" },
    { id: 2, name: "Bruno", xp: 95, avatar: "🧑" },
    { id: 3, name: "Carla", xp: 80, avatar: "👩‍🦱" },
    { id: 4, name: "Daniel", xp: 60, avatar: "👨" },
    { id: 5, name: "Você", xp: 40, avatar: "🙂" },
  ]

  return (
    <div className="leaderboard-layout">
      {/* Barra lateral esquerda */}
      <Sidebar activeItem={activeNavItem} onNavigate={navigator} />

      {/* Conteúdo principal */}
      <div className="leaderboard-main">
        <div className="leaderboard-header">
          <h2>Ranking de Jogadores</h2>
          <p>Veja sua posição no ranking semanal!</p>
        </div>

        <div className="leaderboard-list">
          {ranking.map((user, index) => (
            <div
              key={user.id}
              className={`leaderboard-item ${user.name === "Você" ? "me" : ""}`}
            >
              <span className="position">#{index + 1}</span>
              <span className="avatar">{user.avatar}</span>
              <span className="name">{user.name}</span>
              <span className="xp">{user.xp} XP</span>
            </div>
          ))}
        </div>
      </div>

      {/* Barra lateral direita */}
      <div className="right-sidebar">
        {/* Estatísticas */}
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

export default Leaderboard

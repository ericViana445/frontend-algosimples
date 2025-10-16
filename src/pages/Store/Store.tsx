"use client"

import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import "./Store.css"

interface StoreItem {
  id: number
  name: string
  type: "avatar" | "background" | "item"
  cost: number
  unlocked: boolean
  emoji?: string
  gradient?: string
}

const Store: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState("store")
  const [diamonds, setDiamonds] = useState(17) // saldo atual do jogador

  // Lista de itens disponíveis na loja
  const storeItems: StoreItem[] = [
    { id: 1, name: "Programador", type: "avatar", cost: 5, unlocked: true, emoji: "👨‍💻" },
    { id: 2, name: "Estudante", type: "avatar", cost: 10, unlocked: false, emoji: "🎓" },
    { id: 3, name: "Ninja", type: "avatar", cost: 12, unlocked: false, emoji: "🥷" },
    { id: 4, name: "Robô", type: "avatar", cost: 15, unlocked: false, emoji: "🤖" },
    {
      id: 5,
      name: "Floresta",
      type: "background",
      cost: 8,
      unlocked: true,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      id: 6,
      name: "Pôr do Sol",
      type: "background",
      cost: 12,
      unlocked: false,
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
    {
      id: 7,
      name: "Roxo",
      type: "background",
      cost: 15,
      unlocked: false,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    },
    { id: 8, name: "Escudo", type: "item", cost: 20, unlocked: false, emoji: "🛡️" },
  ]

  // Função de compra de itens
  const handlePurchase = (item: StoreItem) => {
    if (item.unlocked) return
    if (diamonds >= item.cost) {
      setDiamonds(diamonds - item.cost)
      alert(`✅ Você comprou ${item.name}!`)
      // Aqui você pode salvar no backend que o item foi desbloqueado
    } else {
      alert("❌ Diamantes insuficientes!")
    }
  }

  return (
    <div className="store-layout">
      {/* Barra lateral esquerda */}
      <Sidebar activeItem={activeNavItem} onNavigate={setActiveNavItem} />

      {/* Conteúdo principal */}
      <div className="store-main">
        <h1 className="store-title">Loja do Jogo</h1>
        <p className="store-balance">💎 Seus diamantes: {diamonds}</p>

        {/* Avatares */}
        <div className="store-section">
          <h2>Avatares</h2>
          <div className="store-grid">
            {storeItems
              .filter((i) => i.type === "avatar")
              .map((item) => (
                <div
                  key={item.id}
                  className={`store-item ${item.unlocked ? "unlocked" : "locked"}`}
                  onClick={() => handlePurchase(item)}
                >
                  <div className="store-icon">{item.emoji}</div>
                  <p>{item.name}</p>
                  <span>{item.unlocked ? "✅ Desbloqueado" : `💎 ${item.cost}`}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Planos de fundo */}
        <div className="store-section">
          <h2>Planos de Fundo</h2>
          <div className="store-grid">
            {storeItems
              .filter((i) => i.type === "background")
              .map((item) => (
                <div
                  key={item.id}
                  className={`store-item ${item.unlocked ? "unlocked" : "locked"}`}
                  style={{ background: item.gradient }}
                  onClick={() => handlePurchase(item)}
                >
                  <p>{item.name}</p>
                  <span>{item.unlocked ? "✅ Desbloqueado" : `💎 ${item.cost}`}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Itens */}
        <div className="store-section">
          <h2>Itens</h2>
          <div className="store-grid">
            {storeItems
              .filter((i) => i.type === "item")
              .map((item) => (
                <div
                  key={item.id}
                  className={`store-item ${item.unlocked ? "unlocked" : "locked"}`}
                  onClick={() => handlePurchase(item)}
                >
                  <div className="store-icon">{item.emoji}</div>
                  <p>{item.name}</p>
                  <span>{item.unlocked ? "✅ Desbloqueado" : `💎 ${item.cost}`}</span>
                </div>
              ))}
          </div>
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

export default Store

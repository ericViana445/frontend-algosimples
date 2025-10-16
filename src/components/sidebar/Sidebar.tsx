"use client"

import React from "react"
import { useNavigate } from "react-router-dom"
import "./Sidebar.css"

interface SidebarProps {
  activeItem: string
  onNavigate: (item: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate }) => {
  const navigate = useNavigate()

  // 🔐 Verifica se o usuário está logado
  const user = JSON.parse(localStorage.getItem("user") || "null")
  const isLoggedIn = !!user

  // Itens do menu lateral
  const navItems = [
    { id: "journey", label: "Jornada de Aprendizado", icon: "📖", path: "/path", restricted: false },
    { id: "leaderboard", label: "Ranking", icon: "🏆", path: "/leaderboard", restricted: true },
    { id: "store", label: "Loja", icon: "🏪", path: "/store", restricted: true },
    { id: "profile", label: "Perfil", icon: "👤", path: "/profile", restricted: true },
    { id: "more", label: "Mais", icon: "⋯", path: "/more", restricted: true },
  ]

  return (
    <div className="sidebar">
      {/* Logotipo da aplicação */}
      <div className="logo">
        <div className="logo-icon">{"</>"}</div>
        <span className="logo-text">CodePath</span>
      </div>

      {/* Menu de navegação */}
      <nav className="nav-menu">
        {navItems.map((item) => {
          const isRestricted = item.restricted && !isLoggedIn

          return (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""} ${
                isRestricted ? "locked" : ""
              }`}
              onClick={() => {
                if (isRestricted) {
                  alert("🔒 Faça login para ter acesso a esta funcionalidade.")
                  return
                }
                onNavigate(item.id)
                navigate(item.path)
              }}
          
            >
              <span className="nav-icon">
                {isRestricted ? "🔒" : item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar

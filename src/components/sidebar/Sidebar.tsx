"use client";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { FaBook, FaTrophy, FaStore, FaUser, FaChartBar, FaLock } from "react-icons/fa";

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate }) => {
  const navigate = useNavigate();

  // 🔹 Verifica se o usuário está logado
  const isLoggedIn = !!localStorage.getItem("token");

  // 🔹 Verifica se o usuário já completou alguma fase (estado local + listeners)
  const getUnlockedPhasesFromUser = () => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) return [];
      const parsed = JSON.parse(userStr);
      const unlocked = parsed?.unlocked_phases ?? [];
      if (Array.isArray(unlocked)) return unlocked;
      if (typeof unlocked === "string") return JSON.parse(unlocked);
      return [];
    } catch (err) {
      return [];
    }
  };
  const getCompletedCountFromUser = () => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) return 0;
      const parsed = JSON.parse(userStr);
      return Number(parsed?.completed_phases_count ?? 0) || 0;
    } catch (err) {
      return 0;
    }
  };

  const [unlockedPhases, setUnlockedPhases] = useState<string[]>(() => getUnlockedPhasesFromUser());
  const [completedCount, setCompletedCount] = useState<number>(() => getCompletedCountFromUser());

  useEffect(() => {
    const refresh = () => {
      setUnlockedPhases(getUnlockedPhasesFromUser());
      setCompletedCount(getCompletedCountFromUser());
    };

    // Eventos custom quando o localStorage é atualizado internamente
    window.addEventListener("unlockedPhasesChanged", refresh as EventListener);
    window.addEventListener("completedPhasesChanged", refresh as EventListener);
    // Evento 'storage' para mudanças entre abas
    const onStorage = (e: StorageEvent) => {
      if (e.key === "user") refresh();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("unlockedPhasesChanged", refresh as EventListener);
      window.removeEventListener("completedPhasesChanged", refresh as EventListener);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  // Usa o contador como fonte de verdade: se >= 1 libera as Estatísticas
  const hasCompletedAnyPhase = isLoggedIn && completedCount >= 1;

  // 🔹 Itens do menu (todos, mas só "journey" fica livre sem login)
  const navItems = [
    { id: "journey", label: "Jornada de Aprendizado", icon: <FaBook />, path: "/path", requiresLogin: false },
    { id: "leaderboard", label: "Ranking", icon: <FaTrophy />, path: "/leaderboard", requiresLogin: true },
    { id: "store", label: "Loja", icon: <FaStore />, path: "/store", requiresLogin: true },
    { id: "profile", label: "Perfil", icon: <FaUser />, path: "/profile", requiresLogin: true },
    { id: "more", label: "Estatísticas", icon: <FaChartBar />, path: "/more", requiresLogin: true },
  ];

  // 🔸 Handler de clique
  const handleClick = (item: any) => {
    if (item.requiresLogin && !isLoggedIn) {
      // 🔒 Bloqueia clique e mostra aviso de login
      alert("⚠️ Faça login para acessar esta funcionalidade!");
      return;
    }

    // 🔒 Bloqueio específico para Estatísticas quando usuário logado ainda
    // não completou nenhuma fase
    if (item.id === "more" && isLoggedIn && !hasCompletedAnyPhase) {
      alert("⚠️ Conclua pelo menos uma fase para acessar as Estatísticas!");
      return;
    }
    onNavigate(item.id);
    navigate(item.path);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon bubble"></div>
        <span className="logo-text">AlgoSimples</span>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => {
          const lockedByLogin = item.requiresLogin && !isLoggedIn;
          const lockedByProgress = item.id === "more" && isLoggedIn && !hasCompletedAnyPhase;
          const locked = lockedByLogin || lockedByProgress;

          const title = lockedByLogin ? "Faça login para acessar" : lockedByProgress ? "Conclua uma fase para acessar" : item.label

          return (
            <div
              key={item.id}
              className={`nav-item ${activeItem === item.id ? "active" : ""} ${locked ? "locked" : ""}`}
              onClick={() => handleClick(item)}
              title={title}
            >
              <span className="nav-icon">
                {locked ? <FaLock /> : item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;

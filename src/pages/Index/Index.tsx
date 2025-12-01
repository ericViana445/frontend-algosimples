"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import {
  FaGamepad,
  FaChartBar,
  FaTrophy,
  FaRoute,
} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Index: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<"choose" | "login">("choose");
  const [loadingLogin, setLoadingLogin] = useState(false);
  const navigate = useNavigate();

  const topics = [
    {
      name: "Bubble Sort",
      description: "Ordenação por comparação e trocas sucessivas.",
      complexity: "O(n²)",
    },
    {
      name: "Insertion Sort",
      description: "Construção gradual de uma lista ordenada.",
      complexity: "O(n²)",
    },
    {
      name: "Quick Sort",
      description: "Divisão e conquista com escolha de pivô.",
      complexity: "O(n log n)",
    },
    {
      name: "Merge Sort",
      description: "Ordenação estável baseada em divisão e fusão.",
      complexity: "O(n log n)",
    },
  ];


  const features = [
    {
      title: "Visualizações Interativas",
      description: "Acompanhe passo a passo a execução de cada algoritmo.",
      icon: <FaGamepad size={26} />,
    },
    {
      title: "Acompanhamento de Progresso",
      description: "Monitore seu domínio nos principais algoritmos de ordenação.",
      icon: <FaChartBar size={26} />,
    },
    {
      title: "Aprendizado Gamificado",
      description: "Resolva desafios e pratique em cenários reais.",
      icon: <FaTrophy size={26} />,
    },
    {
      title: "Trilha Personalizada",
      description: "Avance no seu ritmo pelos conteúdos de Algoritmos II.",
      icon: <FaRoute size={26} />,
    },
  ];
  

  return (
    <div className="index-container">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Domine <span className="highlight">Algoritmos e Estruturas de Dados II</span>
          </h1>
          <p className="hero-subtitle">
            Aprenda algoritmos de ordenação com visualizações práticas e interativas.

          </p>
          <div className="hero-buttons">
            <button
              className="cta-primary"
              onClick={() => navigate("/path")}
            >
              Começar a Aprender
            </button>

          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="algorithms-section">
        <h2 className="section-title">Explore os Algoritmos de Ordenação</h2>
        <div className="algorithms-grid">
          {topics.map((topic, i) => (
            <div key={i} className="algorithm-card">
              <h3 className="algorithm-name">{topic.name}</h3>
              <p className="algorithm-description">{topic.description}</p>
              <span className="complexity-value">{topic.complexity}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <h2 className="section-title">Por que escolher nossa plataforma?</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para começar?</h2>
          <button
            className="cta-primary large"
            onClick={() => navigate("/path")}
          >
            Comece Gratuitamente
          </button>

        </div>
      </section>

      
    </div>
  );
};

export default Index;

"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./index.css"

const Index: React.FC = () => {
  const [activeAlgorithm, setActiveAlgorithm] = useState<string | null>(null)
  const navigate = useNavigate()

  const algorithms = [
    {
      name: "Bubble Sort",
      description: "Algoritmo de ordenação simples baseado em comparações.",
      complexity: "O(n²)",
      icon: "🫧",
    },
    {
      name: "Merge Sort",
      description: "Algoritmo de ordenação do tipo dividir-para-conquistar.",
      complexity: "O(n log n)",
      icon: "🔀",
    },
    {
      name: "Insertion Sort",
      description: "Constrói o array ordenado inserindo um elemento por vez.",
      complexity: "O(n²)",
      icon: "📥",
    },
    {
      name: "Selection Sort",
      description: "Encontra o menor elemento e o coloca no início da lista.",
      complexity: "O(n²)",
      icon: "🎯",
    },
  ]

  const features = [
    {
      title: "Aprendizado Interativo",
      description: "Aprenda algoritmos de forma prática e visual, com demonstrações dinâmicas.",
      icon: "🎮",
    },
    {
      title: "Acompanhamento de Progresso",
      description: "Monitore sua jornada de aprendizado com estatísticas e conquistas detalhadas.",
      icon: "📊",
    },
    {
      title: "Experiência Gamificada",
      description: "Ganhe sequências, joias e dispute nos rankings enquanto aprende.",
      icon: "🏆",
    },
    {
      title: "Trilha Personalizada",
      description: "Caminhos de aprendizado adaptados ao seu nível e ritmo de estudo.",
      icon: "🛤️",
    },
  ]

  return (
    <div className="index-container">
      {/* Seção Principal (Hero) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Domine os <span className="highlight">Algoritmos de Ordenação</span> como nunca antes
          </h1>
          <p className="hero-subtitle">
            Aprenda fundamentos da ciência da computação por meio de lições interativas, demonstrações visuais e desafios
            gamificados. Comece sua jornada na programação hoje mesmo.
          </p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={() => navigate("/path")}>
              Começar a Aprender
            </button>
            <button className="cta-secondary">Ver Demonstração</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="algorithm-preview">
            <div className="sorting-bars">
              {[40, 20, 60, 30, 80, 10, 50].map((height, index) => (
                <div key={index} className="bar" style={{ height: `${height}px` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Algoritmos */}
      <section className="algorithms-section">
        <h2 className="section-title">Explore os Algoritmos de Ordenação</h2>
        <p className="section-subtitle">
          Aprofunde-se nos principais algoritmos de ordenação utilizados na ciência da computação.
        </p>
        <div className="algorithms-grid">
          {algorithms.map((algorithm, index) => (
            <div
              key={index}
              className={`algorithm-card ${activeAlgorithm === algorithm.name ? "active" : ""}`}
              onMouseEnter={() => setActiveAlgorithm(algorithm.name)}
              onMouseLeave={() => setActiveAlgorithm(null)}
            >
              <div className="algorithm-icon">{algorithm.icon}</div>
              <h3 className="algorithm-name">{algorithm.name}</h3>
              <p className="algorithm-description">{algorithm.description}</p>
              <div className="algorithm-complexity">
                <span className="complexity-label">Complexidade de tempo:</span>
                <span className="complexity-value">{algorithm.complexity}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="features-section">
        <h2 className="section-title">Por que escolher nossa plataforma?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estatísticas */}
      <section className="index-stats-section">
        <div className="index-stats-container">
          <div className="index-stat-item">
            <div className="index-stat-number">10 mil+</div>
            <div className="index-stat-label">Estudantes Aprendendo</div>
          </div>
          <div className="index-stat-item">
            <div className="index-stat-number">50+</div>
            <div className="index-stat-label">Lições Interativas</div>
          </div>
          <div className="index-stat-item">
            <div className="index-stat-number">95%</div>
            <div className="index-stat-label">Taxa de Sucesso</div>
          </div>
          <div className="index-stat-item">
            <div className="index-stat-number">4.9★</div>
            <div className="index-stat-label">Avaliação dos Estudantes</div>
          </div>
        </div>
      </section>

      {/* Seção Final (Chamada para Ação) */}
      <section className="final-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Pronto para começar sua jornada nos algoritmos?</h2>
          <p className="cta-description">
            Junte-se a milhares de estudantes que dominaram algoritmos de ordenação por meio da nossa plataforma
            interativa.
          </p>
          <button className="cta-primary large" onClick={() => navigate("/path")}>
            Comece Gratuitamente
          </button>
        </div>
      </section>
    </div>
  )
}

export default Index

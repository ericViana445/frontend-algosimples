"use client"

import React, { useState, useEffect } from "react"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import Task from "../../components/Task/Task.tsx"
import LessonTemplate from "../../components/lession/LessonTemplate.tsx"
import { lessonsData } from "../../components/lession/lessionsData.ts"
import "./path_player.css"

const API_URL = import.meta.env.VITE_API_URL;


const Path_player: React.FC = () => {
  const [activeNavItem, setActiveNavItem] = useState("journey")
  const [isTaskOpen, setIsTaskOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [isLessonActive, setIsLessonActive] = useState(false)
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showSummary, setShowSummary] = useState(false)
  const [startTime, setStartTime] = useState<number>(Date.now())
  // ✅ Controle das fases concluídas
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  // Login e registro
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerError, setRegisterError] = useState("")

  const user = JSON.parse(localStorage.getItem("user") || "null")

  // Funções de login
  const handleLogin = async () => {
    setLoginError("")
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Erro no login")
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      alert("✅ Login realizado com sucesso!")
      setShowLogin(false)
      window.location.reload()
    } catch (err: any) {
      setLoginError(err.message)
    }
  }

  // Função de cadastro
  const handleRegister = async () => {
    setRegisterError("")
    try {
      const res = await fetch(`https://backend-algosimples.onrender.com/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || "Erro no cadastro")
      alert("✅ Cadastro realizado com sucesso!")
      setShowRegister(false)
      setShowLogin(true)
    } catch (err: any) {
      setRegisterError(err.message)
    }
  }

  const navigator = (item: string) => {
    setActiveNavItem(item)
    console.log(`[v0] Navegando para: ${item}`)
  }

  // Dados da tarefa
  const taskData = {
    icon: "🧠",
    title: "Introdução aos Algoritmos de Ordenação",
    description:
      "Entenda o que são os algoritmos de ordenação e como eles organizam dados de forma eficiente.",
    difficulty: "Iniciante",
    xp: 10,
    progress: 45,
    learningPoints: [
      "Conceito de algoritmos de ordenação",
      "Diferença entre Bubble, Merge e Quick Sort",
      "Quando utilizar cada algoritmo",
      "Exemplo prático de ordenação em JavaScript",
    ],
  }

  // 📘 Funções das fases
  const currentLesson = lessonsData[currentLessonIndex]
  const totalQuestions = currentLesson.questions.length
  const currentQuestion = currentLesson.questions[currentQuestionIndex]

  useEffect(() => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowSummary(false)
    setStartTime(Date.now())
  }, [currentLessonIndex])

  const handleNodeClick = (index: number) => {
    setCurrentLessonIndex(index)
    setSelectedTask(taskData)
    setIsTaskOpen(true)
  }

  const handleCloseTask = () => {
    setIsTaskOpen(false)
    setSelectedTask(null)
  }

  const handleStartLesson = () => {
    console.log("[v0] Iniciando lição...")
    setIsLessonActive(true)
    handleCloseTask()
  }

  const handleExitLesson = () => setIsLessonActive(false)

  const handleAnswerComplete = (isCorrect: boolean) => {
    setAnswers((prev) => [...prev, isCorrect])
    setTimeout(() => {
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        setShowSummary(true)
      }
    }, 800)
  }

  const handlePhaseComplete = () => {
    // Marca a fase atual como concluída
    setCompletedLessons((prev) =>
      prev.includes(currentLessonIndex) ? prev : [...prev, currentLessonIndex]
    )

    // Se ainda houver fases, avança
    if (currentLessonIndex < lessonsData.length - 1) {
      setCurrentLessonIndex((prev) => prev + 1)
      setIsLessonActive(false)
      setShowSummary(false)
    } else {
      // Última fase concluída
      alert("🎉 Você completou todas as fases da jornada!")
      setIsLessonActive(false)
      setShowSummary(false)
      setCurrentLessonIndex(0) // volta ao início
    }
  }



  // 🏁 Tela de resumo da fase
  if (showSummary) {
    const total = answers.length
    const correct = answers.filter((a) => a).length
    const wrong = total - correct
    const timeTaken = Math.round((Date.now() - startTime) / 1000)

    return (
      <div className="summary-container">
        <div className="summary-card">
          <h1>🎉 Fase Concluída!</h1>
          <h2>{currentLesson.title}</h2>
          <p>
            Você respondeu <b>{total}</b> perguntas em <b>{timeTaken}</b> segundos.
          </p>
          <p>
            ✅ Acertos: <b>{correct}</b> &nbsp;&nbsp; ❌ Erros: <b>{wrong}</b>
          </p>
          <button className="continue-button" onClick={handlePhaseComplete}>
            {currentLessonIndex < lessonsData.length - 1
              ? "Avançar para a próxima fase"
              : "Finalizar Jornada"}
          </button>
        </div>
      </div>
    )
  }

  // 🔹 Modo de lição ativa
  if (isLessonActive) {
    return (
      <LessonTemplate
        key={`${currentLessonIndex}-${currentQuestionIndex}`}
        lessonData={{
          title: `${currentLesson.title} — Pergunta ${currentQuestionIndex + 1}/${totalQuestions}`,
          question: currentQuestion.question,
          explanation: currentQuestion.explanation, // <-- adicionado aqui ✅
          alternatives: currentQuestion.alternatives,
          correctAnswer: currentQuestion.correctAnswer,
        }}
        onComplete={() => handleAnswerComplete(true)}
        onIncorrect={() => handleAnswerComplete(false)}
        onExit={handleExitLesson}
      />
    )
  }

  // 🔹 Interface padrão
  return (
    <div className="app-container">
      <Sidebar activeItem={activeNavItem} onNavigate={navigator} />

      {/* Conteúdo Principal */}
      <div className="main-content">
        <div className="content-header">
          <button className="back-button">←</button>
          <div className="header-info">
            <h2>Seção 1, Capítulo 1</h2>
            <p>Fundamentos dos Algoritmos de Ordenação</p>
          </div>
        </div>

        <div className="learning-path">
          <div className="path-title">Fundamentos dos Algoritmos de Ordenação</div>
          <div className="path-nodes">
          {lessonsData.map((_, index) => {
            const isCompleted = completedLessons.includes(index)
            const isCurrent = index === currentLessonIndex
                    
            return (
              <React.Fragment key={index}>
                <div
                  className={`path-node ${
                    isCompleted ? "completed" : isCurrent ? "current" : "locked"
                  }`}
                  onClick={() => handleNodeClick(index)}
                >
                  <div className="node-circle">
                    {isCompleted ? (
                      <span className="checkmark">✓</span>
                    ) : isCurrent ? (
                      <span className="current-symbol">▶</span>
                    ) : (
                      <span className="locked-symbol">○</span>
                    )}
                  </div>
                </div>
                  
                {index < lessonsData.length - 1 && (
                  <div className="path-connector"></div>
                )}
              </React.Fragment>
            )
          })}

          </div>
        </div>
      </div>

      {/* Barra lateral direita */}
      <div className="right-sidebar">
        <div className="stats">
          <div className="stat-item green">
            <span className="stat-icon">🔥</span>
            <span className="stat-number">0</span>
          </div>
          <div className="stat-item orange">
            <span className="stat-icon">💎</span>
            <span className="stat-number">{user?.diamonds ??0}</span>
          </div>
          <div className="stat-item purple">
            <span className="stat-icon">⚡</span>
            <span className="stat-number">{user?.xp ?? 0}</span>
          </div>
        </div>

        {/* Widgets e login mantidos */}
        <div className="widget">
          <div className="widget-header">
            <h3>Ações Rápidas</h3>
          </div>
          <div className="widget-content">
            <button className="action-btn">Praticar Áreas Fracas</button>
            <button className="action-btn">Revisar Erros</button>
            <button className="action-btn">Fazer Quiz</button>
          </div>
        </div>

        {!user && (
          <div className="widget login-widget">
            <div className="widget-header">
              <h3>Crie seu perfil e salve seu progresso!</h3>
            </div>
            <div className="widget-content">
              <button className="login-btn create-btn" onClick={() => setShowRegister(true)}>
                Criar Conta
              </button>
              <button className="login-btn login-btn-alt" onClick={() => setShowLogin(true)}>
                Entrar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* POP-UP LOGIN */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowLogin(false)}>✕</button>
            <h2>Entrar</h2>
            <input type="email" placeholder="E-mail" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <button className="confirm-btn-jorney" onClick={handleLogin}>Entrar</button>
          </div>
        </div>
      )}

      {/* POP-UP CADASTRO */}
      {showRegister && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowRegister(false)}>✕</button>
            <h2>Criar Conta</h2>
            <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} />
            <input type="email" placeholder="E-mail" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
            {registerError && <p style={{ color: "red" }}>{registerError}</p>}
            <button className="confirm-btn-jorney" onClick={handleRegister}>Cadastrar</button>
          </div>
        </div>
      )}

      {/* Modal da tarefa */}
      {selectedTask && (
        <Task
          isOpen={isTaskOpen}
          onClose={handleCloseTask}
          taskData={selectedTask}
          onStartLesson={handleStartLesson}
        />
      )}
    </div>
  )
}

export default Path_player

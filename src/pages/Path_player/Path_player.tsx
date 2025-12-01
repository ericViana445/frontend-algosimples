"use client"
import { SiProbot } from "react-icons/si";
import { FaCogs, FaCode } from "react-icons/fa";
import { GiSpellBook } from "react-icons/gi";
import { FaCoins, FaStar } from "react-icons/fa6";
import { WiDaySunny } from "react-icons/wi";
import { FaGamepad } from "react-icons/fa";
import React, { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { useLocation } from "react-router-dom"
import autoimag from "../../components/lession/LessonDataImages/automatonlixo.jpeg"
import Sidebar from "../../components/sidebar/Sidebar.tsx"
import Task from "../../components/Task/Taks.tsx"
import Lesson from "../../components/lession/LessonTemplate.tsx"
import { useNavigate } from "react-router-dom";
import {
  lessonsBubbleFacil,
  lessonsBubbleDificil,
  lessonsInsertionFacil,
  lessonsInsertionDificil,
  lessonsMergeFacil,
  lessonsMergeDificil,
  lessonsQuickFacil,
  lessonsQuickDificil,
} from "../../components/lession/LessonData.ts"
import { SuggestionWidget } from "../Statistics/Statistics";


const lessons = [
  lessonsBubbleFacil,
  lessonsBubbleDificil,
  lessonsInsertionFacil,
  lessonsInsertionDificil,
  lessonsMergeFacil,
  lessonsMergeDificil,
  lessonsQuickFacil,
  lessonsQuickDificil,
]

import "./path_player.css"

interface DecodedToken {
  id: number
  email: string
  exp: number
}

const Path_player: React.FC = () => {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState<any>(null);
  const [activeNavItem, setActiveNavItem] = useState("journey")
  const [isTaskOpen, setIsTaskOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [isLessonActive, setIsLessonActive] = useState(false)
  const [currentLessonType, setCurrentLessonType] = useState<"normal" | "automaton">("normal")
  const [newAchievements] = useState<any[]>([])
  const [showAchievementsPopup, setShowAchievementsPopup] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(1) // 1 ou 2
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0) // 0-4 para as 5 questões
  const [showPhaseSummary, setShowPhaseSummary] = useState(false) // Nova state para controlar o resumo da fase
  const [phaseAnswers, setPhaseAnswers] = useState<boolean[]>([]) // Armazenar respostas da fase

  const location = useLocation()
  const [reviewMode, setReviewMode] = useState(false)
  const [reviewQuestions, setReviewQuestions] = useState<any[]>([])
  const [reviewTags, setReviewTags] = useState<string[]>([])

  const [userData, setUserData] = useState<any>(null)

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [showLogin, setShowLogin] = useState(false)

  const [registerName, setRegisterName] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [registerError, setRegisterError] = useState("")
  const [showRegister, setShowRegister] = useState(false)

  useEffect(() => {
    if (location.state?.reviewMode) {
      console.log("[v0] Review mode activated with", location.state.reviewQuestions.length, "questions")
      setReviewMode(true)
      setReviewQuestions(location.state.reviewQuestions)
      setReviewTags(location.state.reviewTags || [])
      setCurrentQuestionIndex(0)
      setPhaseAnswers([])
      setIsLessonActive(true)
    }
  }, [location.state])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const decoded: DecodedToken = jwtDecode(token)
      const userId = decoded.id

      fetch(`https://backend-lfaquest.onrender.com/api/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          const parsedUnlocked = data.unlocked_phases ? JSON.parse(data.unlocked_phases) : ["1"]
          setUserData({ ...data, unlocked_phases: parsedUnlocked })
          console.log("✅ Fases desbloqueadas:", parsedUnlocked)
        })
      // analytics
      fetch(`https://backend-lfaquest.onrender.com/api/users/${userId}/analytics`)
        .then((res) => res.json())
        .then((data) => {
          setAnalytics(data);
          console.log("📊 Analytics carregado:", data);
        })
        .catch((err) => console.error("Erro ao buscar analytics:", err));
      
    } catch (error) {
      console.error("Token inválido:", error)
    }
  }, [])

  // 🔔 Ouvir evento global "faseConcluida" vindo do LessonTemplat
  // 🔔 Ouvir evento global "faseConcluida" vindo do LessonTemplate
  useEffect(() => {
    const handleFaseConcluida = () => {
      console.log("📢 Evento 'faseConcluida' detectado pelo Path_player!");
      unlockNextPhase(); // ← chama a função de desbloqueio
    };

    window.addEventListener("faseConcluida", handleFaseConcluida);
    return () => {
      window.removeEventListener("faseConcluida", handleFaseConcluida);
    };
  }, []);

    // 🔓 Função dedicada para desbloquear próxima fase
  const unlockNextPhase = async () => {
    console.log("📩 Chamando unlockNextPhase()...");

    const localUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (!localUser?.id) {
      console.warn("⚠️ Usuário não encontrado no localStorage, ignorando desbloqueio.");
      return;
    }

    try {
      // Buscar o estado atual do usuário
      const resUser = await fetch(`https://backend-lfaquest.onrender.com/api/users/${localUser.id}`);
      const freshUserData = await resUser.json();
      const currentPhases = freshUserData.unlocked_phases
        ? JSON.parse(freshUserData.unlocked_phases)
        : ["1"];

      console.log("📘 Fases atuais no backend:", currentPhases);

      const nextPhase = currentPhases.length + 1;
      const updatedPhases = [...currentPhases];

      if (!updatedPhases.includes(String(nextPhase)) && nextPhase <= 5) {
        updatedPhases.push(String(nextPhase));
        console.log(`🔓 Liberando nova fase: ${nextPhase}`, updatedPhases);

        const res = await fetch(
          `https://backend-lfaquest.onrender.com/api/users/${localUser.id}/unlockedPhases`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              unlocked_phases: updatedPhases, // ✅ array puro
            }),
          }
        );
        

        const data = await res.json();
        if (res.ok) {
          console.log(`✅ Fase ${nextPhase} liberada e salva com sucesso.`, data);

          // Atualiza localStorage e estado global
          const updatedUser = { ...localUser, unlocked_phases: updatedPhases };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          setUserData((prev: any) => ({
            ...prev,
            unlocked_phases: updatedPhases,
          }));
        } else {
          console.error("❌ Erro ao atualizar progresso:", data);
        }
      } else {
        console.log("ℹ️ Nenhuma nova fase a liberar (já desbloqueada).");
      }
    } catch (err) {
      console.error("❌ Falha ao liberar fase:", err);
    }
  };




  const handleLogin = async () => {
    setLoginError("")
    try {
      const res = await fetch("https://backend-lfaquest.onrender.com/api/auth/login", {
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

  const handleRegister = async () => {
    setRegisterError("")
    try {
      const res = await fetch("https://backend-lfaquest.onrender.com/api/auth/register", {
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

  const handleReviewTopic = () => {
    if (!analytics || !analytics.tags || analytics.tags.length === 0) {
      alert("Nenhum dado disponível para revisão");
      return;
    }

    const lowAccuracyTags = analytics.tags.filter((t: any) => t.accuracy <= 0.35);

    if (lowAccuracyTags.length === 0) {
      alert("Parabéns! Nenhum tópico com taxa de acerto menor ou igual a 35%. 🎉");
      return;
    }

    const tagNames = lowAccuracyTags.map((t: any) => t.tag);

    const allLessons = [
      ...lessonsBubbleFacil,
      ...lessonsBubbleDificil,
      ...lessonsInsertionFacil,
      ...lessonsInsertionDificil,
      ...lessonsMergeFacil,
      ...lessonsMergeDificil,
      ...lessonsQuickFacil,
      ...lessonsQuickDificil,
    ];

    const reviewQuestions = allLessons.filter(
      (lesson) => lesson.tags && lesson.tags.some((tag) => tagNames.includes(tag))
    );

    if (reviewQuestions.length === 0) {
      alert("Nenhuma questão encontrada para os tópicos com mais dificuldade");
      return;
    }

    const limitedQuestions = reviewQuestions.slice(0, 5);

    navigate("/path", {
      state: {
        reviewMode: true,
        reviewQuestions: limitedQuestions,
        reviewTags: tagNames,
      },
    });
  };


  const navigator = (item: string) => {
    setActiveNavItem(item)
    console.log(`[v0] Navigating to: ${item}`)
  }

  const phaseData = [
    // ------------------ MÓDULO 1 — BUBBLE SORT ------------------
    {
      phase: 1,
      title: "Bubble Sort — Fase Fácil",
      description:
        "O Bubble Sort funciona comparando pares de elementos adjacentes e trocando-os sempre que estão fora de ordem. Esse processo se repete até que a lista esteja totalmente ordenada. Apesar de simples, não é eficiente para listas grandes.",
      icon: <SiProbot className="w-8 h-8 text-blue-500" />,
      xp: 75,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Como o Bubble Sort compara elementos adjacentes",
        "Movimento do maior elemento para o final",
        "Quando ocorrem trocas",
        "Como detectar quando a lista já está ordenada",
        "Por que não é eficiente para listas grandes"
      ],
    },
    {
      phase: 2,
      title: "Bubble Sort — Fase Difícil",
      description:
        "Nesta fase, você aprofunda o funcionamento interno do Bubble Sort, entendendo como a versão otimizada reduz passagens, como o algoritmo se comporta em diferentes cenários e por que é considerado estável.",
      icon: <SiProbot className="w-8 h-8 text-cyan-500" />,
      xp: 120,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Quando o Bubble Sort otimizado reduz passagens",
        "Cenários com maior número de comparações",
        "Por que o algoritmo é estável",
        "Comportamento após k passagens completas",
        "Implementação recursiva do Bubble Sort"
      ],
    },

    // ------------------ MÓDULO 2 — INSERTION SORT ------------------
    {
      phase: 3,
      title: "Insertion Sort — Fase Fácil",
      description:
        "O Insertion Sort percorre o vetor da esquerda para a direita, mantendo sempre uma parte ordenada. Cada novo elemento é inserido na posição correta, de forma semelhante a organizar cartas na mão.",
      icon: <FaCogs className="w-8 h-8 text-orange-500" />,
      xp: 75,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Como elementos são inseridos na parte ordenada",
        "Melhor caso: vetor quase ordenado",
        "Deslocamentos como operação principal",
        "Estabilidade do algoritmo",
        "Comparações com elementos anteriores"
      ],
    },
    {
      phase: 4,
      title: "Insertion Sort — Fase Difícil",
      description:
        "Na fase avançada, analisamos o comportamento do Insertion Sort em diferentes distribuições de dados, seu custo em sistemas reais e quando ele supera algoritmos mais rápidos.",
      icon: <FaCogs className="w-8 h-8 text-yellow-500" />,
      xp: 120,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Quando supera algoritmos como Merge Sort",
        "Custos no pior caso",
        "Eficiência em sistemas com pequenos conjuntos de dados",
        "Número máximo de deslocamentos",
        "Por que o algoritmo é estável"
      ],
    },

    // ------------------ MÓDULO 3 — QUICK SORT ------------------
    {
      phase: 5,
      title: "Quick Sort — Fase Fácil",
      description:
        "O Quick Sort utiliza a estratégia de Dividir para Conquistar: escolhe um pivô, particiona elementos menores e maiores, e ordena recursivamente. É rápido na média e muito usado na prática.",
      icon: <FaCode className="w-8 h-8 text-pink-500" />,
      xp: 75,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "O que é Quick Sort",
        "Função do pivô",
        "Complexidade média O(n log n)",
        "Por que não é estável",
        "Pior caso: pivô sempre mal posicionado"
      ],
    },
    {
      phase: 6,
      title: "Quick Sort — Fase Difícil",
      description:
        "Aqui você aprofunda técnicas de particionamento, impacto da escolha do pivô, diferenças entre algoritmos internos e cenários onde o Quick Sort supera outros métodos.",
      icon: <FaCode className="w-8 h-8 text-purple-500" />,
      xp: 120,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Importância da escolha do pivô",
        "Métodos de partição: Lomuto vs Hoare",
        "Quando o Quick Sort supera o Merge Sort",
        "Por que não é estável",
        "Pior caso: pivô sempre no primeiro elemento"
      ],
    },

    // ------------------ MÓDULO 4 — MERGE SORT ------------------
    {
      phase: 7,
      title: "Merge Sort — Fase Fácil",
      description:
        "O Merge Sort segue Dividir para Conquistar, dividindo a lista em duas até formar listas unitárias, depois intercalando essas listas de forma ordenada. É estável e sempre O(n log n).",
      icon: <GiSpellBook className="w-8 h-8 text-green-500" />,
      xp: 75,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Processo de divisão e intercalação",
        "Estabilidade",
        "Complexidade no pior caso",
        "Desvantagem: uso de memória extra",
        "Dividir para conquistar"
      ],
    },
    {
      phase: 8,
      title: "Merge Sort — Fase Difícil",
      description:
        "A fase avançada explora aspectos internos como custos, estabilidade, comportamento em diferentes estruturas de dados e profundidade da divisão.",
      icon: <GiSpellBook className="w-8 h-8 text-emerald-500" />,
      xp: 120,
      progress: 0,
      questionsCount: 5,
      learningPoints: [
        "Por que exige memória extra",
        "Complexidade constante mesmo com dados ordenados",
        "Eficiência em estruturas sem acesso aleatório",
        "Motivo da estabilidade",
        "Profundidade de divisão ≈ log n"
      ],
    },
  ];


  const handleNodeClick = (phase: number) => {
    const phaseInfo = phaseData.find((p) => p.phase === phase)
    setSelectedTask(phaseInfo)
    setCurrentPhase(phase)
    setCurrentQuestionIndex(0) // Começar na primeira questão
    setPhaseAnswers([]) // Resetar respostas
    setShowPhaseSummary(false) // Resetar resumo
    setIsTaskOpen(true)
  }

  const handleCloseTask = () => {
    setIsTaskOpen(false)
    setSelectedTask(null)
  }

  const handleStartLesson = () => {
    console.log(`[v0] Starting lesson - Phase ${currentPhase}, Question ${currentQuestionIndex}`)
    setIsLessonActive(true)
    handleCloseTask()
  }

  const handleStartAutomatonLesson = () => {
    console.log("[v0] Starting automaton lesson...")
    setCurrentLessonType("automaton")
    setIsLessonActive(true)
    handleCloseTask()
  }

  const handleExitLesson = () => {
    setIsLessonActive(false)
    setCurrentLessonType("normal")
    if (reviewMode) {
      setReviewMode(false)
      setReviewQuestions([])
      setReviewTags([])
    }
  }


  const handleLessonComplete = async (isCorrect: boolean) => {
    console.log("handelando fim"); // 👀 debug inicial

    const updatedAnswers = [...phaseAnswers, isCorrect];
    setPhaseAnswers(updatedAnswers);

    const isAutomatonLesson = currentLessonType === "automaton";
    console.log("é automato?", isAutomatonLesson);

    // Se for automato, termina ali mesmo
    if (isAutomatonLesson) {
      console.log("⚙️ Finalizando lição de autômato (sem próxima questão).");
      setIsLessonActive(false);

      if (!userData) {
        console.warn("🚫 Nenhum usuário logado, cancelando progressão.");
        return;
      }

      try {
        console.log("📡 Enviando dados para verificar conquistas (automaton lesson).");
        const res = await fetch(`https://backend-lfaquest.onrender.com/api/users/${userData.id}/checkAchievements`);
        const data = await res.json();
        console.log("🔙 Resposta conquistas:", data);
      } catch (err) {
        console.error("Erro ao verificar conquistas:", err);
      }

      setCurrentLessonType("normal");
      return;
    }

    const currentPhaseLessons = lessons[currentPhase - 1];
    const isLastQuestion = currentQuestionIndex >= currentPhaseLessons.length - 1;
    console.log("é a ultima ", isLastQuestion);

    if (isLastQuestion) {
      console.log("📤 handleLessonComplete()");
      console.log("🚀 Enviando dados de finalização da lição...");
      setIsLessonActive(false);

      if (!userData) {
        console.warn("🚫 Nenhum usuário logado — não dá pra salvar progresso.");
        return;
      }

      try {
        console.log("📡 Enviando dados para verificar conquistas (fase normal).");
        const res = await fetch(`https://backend-lfaquest.onrender.com/api/users/${userData.id}/checkAchievements`);
        const data = await res.json();
        console.log("🔙 Resposta conquistas:", data);
      } catch (err) {
        console.error("Erro ao verificar conquistas:", err);
      }

      // 🔓 Progressão de fase
      try {
        const nextPhase = currentPhase + 1;
        const alreadyUnlocked = userData.unlocked_phases || ["1"];
        console.log("🧩 Fases já desbloqueadas:", alreadyUnlocked, "Tentando liberar:", nextPhase);
        if (!alreadyUnlocked.includes(String(nextPhase)) && nextPhase <= 5) {
          const updatedPhases = [...alreadyUnlocked, String(nextPhase)];
          console.log(`🔓 Liberando nova fase: ${nextPhase}`, updatedPhases);

          const response = await fetch(
            `https://backend-lfaquest.onrender.com/api/users/${userData.id}/unlockedPhases`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ unlocked_phases: updatedPhases }), // ✅ envia array puro
            }
          );
          
          const result = await response.json();
          console.log("📬 Resposta do backend (update progress):", result);

          if (response.ok) {
            setUserData((prev: any) => ({
              ...prev,
              unlocked_phases: updatedPhases,
            }));
            console.log(`✅ Fase ${nextPhase} liberada e salva com sucesso.`);
          } else {
            console.error("❌ Falha ao atualizar progresso:", result);
          }
        } else {
          console.log("ℹ️ Nenhuma nova fase a liberar ou já desbloqueada.");
        }
      } catch (err) {
        console.error("❌ Erro ao salvar progresso de fases:", err);
      }
    } else {
      console.log("➡️ Indo para a próxima questão.");
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };




  const handlePhaseSummaryContinue = () => {
    setShowPhaseSummary(false)
    setCurrentQuestionIndex(0)
    setPhaseAnswers([])
    if (reviewMode) {
      setReviewMode(false)
      setReviewQuestions([])
      setReviewTags([])
    }
  }

  const getCurrentLesson = () => {
    if (currentLessonType === "automaton") {
      return {
        isAutomaton: true,
        title: "Construção de Autômato Finito Determinístico",
        explanation: `Um AFND (Autômato Finito Não Determinístico) permite múltiplas transições ou transições vazias a partir de um mesmo estado`,
        alternatives: [],
        question: 'Sabendo disso, transforme a AFD ao lado em uma AFND usando os estados abaixo:',
        image: autoimag,
        correctAnswer: 0,
        correctAutomaton: {
          conexoes: [
            { de: 2, para: 3, caractere: "b" },
            { de: 2, para: 6, caractere: "a" },
            { de: 3, para: 5, caractere: "a" },
            { de: 5, para: 2, caractere: "b" },
            { de: 5, para: 5, caractere: "a" },
            { de: 6, para: 7, caractere: "a" },
            { de: 7, para: 6, caractere: "b" },
            { de: 7, para: 7, caractere: "a" },
          ],
        },
      }
    }

    if (reviewMode && reviewQuestions.length > 0) {
      const currentLesson = reviewQuestions[currentQuestionIndex]
      if (currentLesson) {
        return {
          ...currentLesson,
          title: `${currentLesson.title} (Questão ${currentQuestionIndex + 1} de ${reviewQuestions.length}) - Modo Revisão`,
        }
      }
    }

    const currentPhaseLessons = lessons[currentPhase]
    const currentLesson = currentPhaseLessons[currentQuestionIndex - 1]

    if (currentLesson) {
      return {
        ...currentLesson,
        title: `${currentLesson.title} (Questão ${currentQuestionIndex + 1} de ${currentPhaseLessons.length})`,
      }
    }

    return currentPhaseLessons[0]
  }

  if (showPhaseSummary) {
    const totalQuestions = reviewMode
      ? reviewQuestions.length
      : currentPhase === 1
        ? lessonsBubbleFacil.length
        : lessonsBubbleDificil.length
    const correctAnswers = phaseAnswers.filter((answer) => answer).length
    const phaseTitle = reviewMode
      ? `Revisão: ${reviewTags.join(", ")}`
      : currentPhase === 1
        ? "Fundamentos dos Autômatos"
        : "Aplicações Avançadas"

    return (
      <div className="summary-container">
        <div className="summary-card">
          <h1>🎉 {reviewMode ? "Revisão Concluída!" : "Fase Concluída!"}</h1>
          <h2>
            {reviewMode ? "Modo Revisão" : `Fase ${currentPhase}`}: {phaseTitle}
          </h2>

          <p>
            Você respondeu <b>{totalQuestions}</b> pergunta{totalQuestions > 1 ? "s" : ""}{" "}
            {reviewMode ? "nesta revisão" : "nesta fase"}.
          </p>
          <p>
            ✅ Acertos: <b>{correctAnswers}</b> &nbsp;&nbsp; ❌ Erros: <b>{totalQuestions - correctAnswers}</b>
          </p>

          <p className="performance-text">
            {correctAnswers === totalQuestions
              ? "🎯 Performance Perfeita!"
              : correctAnswers >= totalQuestions * 0.7
                ? "🌟 Excelente desempenho!"
                : correctAnswers >= totalQuestions * 0.5
                  ? "👍 Bom trabalho!"
                  : "💪 Continue praticando!"}
          </p>

          <button className="continue-button" onClick={handlePhaseSummaryContinue}>
            {reviewMode ? "Voltar à Jornada →" : "Continuar Jornada →"}
          </button>
        </div>
      </div>
    )
  }

  if (isLessonActive) {

    return (
      <Lesson
        lessonData={getCurrentLesson()}
        onComplete={() => handleLessonComplete(true)}
        onExit={handleExitLesson}
        isAutomaton={currentLessonType === "automaton"}
        questionIndex={currentQuestionIndex}
        totalQuestions={lessons[currentPhase - 1].length}
      />
    )
  }

  return (
    <div className="app-container">
      <Sidebar activeItem={activeNavItem} onNavigate={navigator} />
      <div className="main-content">
        <div className="learning-path">
          <div className="store-title">Jornada de Aprendizado</div>

          <div className="path-nodes">
            {phaseData.map((phase: any, index: number) => {
              // ✅ Correto: aqui é um bloco de função, então posso usar const
              const isUnlocked = userData?.unlocked_phases?.includes(String(phase.phase))
            
              return (
                <React.Fragment key={phase.phase}>
                  {/* 🔹 Divisores de módulos */}
                  {phase.phase === 1 && (
                    <div className="module-divider">
                      <span><SiProbot className="text-blue-500 text-2xl" /> Módulo 1 — Introdução à Ordenação</span>
                    </div>
                  )}

                  {phase.phase === 3 && (
                    <div className="module-divider">
                      <span><FaCode className="w-8 h-8 text-pink-500" /> Módulo 2 — Ordenação Quadrática</span>
                    </div>
                  )}

                  {phase.phase === 5 && (
                    <div className="module-divider">
                      <span><GiSpellBook className="text-green-500 text-2xl" /> Módulo 3 — Ordenação Eficiente</span>
                    </div>
                  )}

                  {phase.phase === 7 && (
                    <div className="module-divider">
                      <span><GiSpellBook className="text-emerald-500 text-2xl" />
                        Módulo 4 — Merge Sort
                      </span>
                    </div>
                  )}
          
                  {/* 🔸 Fase */}
                  <div
                    className={`path-node ${
                      !isUnlocked
                        ? "locked"
                        : currentPhase === phase.phase
                        ? "active"
                        : "completed"
                    }`}
                    onClick={() => isUnlocked && handleNodeClick(phase.phase)}
                  >
                    <div className="node-circle">
                      <span className="node-icon">{phase.icon}</span>
                    </div>
                    <div className="node-label">{phase.title}</div>
                  </div>
                  
                  {/* 🔸 Conector entre fases, exceto entre módulos */}
                  {index < phaseData.length - 1 &&
                    phase.phase !== 2 &&
                    phase.phase !== 4 &&
                    phase.phase !== 6 && (
                      <div className="path-connector"></div>
                  )} 
                </React.Fragment>
              )
            })}
          
          
          
            {/* 🔹 Prática final */}
            <div
              className="path-node upcoming"
              onClick={() => {
                setSelectedTask({
                  title: "Prática: Construção de Autômato",
                  description:
                    "Construa seu próprio autômato finito determinístico arrastando estados e criando transições.",
                  icon: <FaGamepad className="text-purple-500" />,
                  xp: 25,
                  progress: 0,
                  learningPoints: [
                    "Construção de autômatos do zero",
                    "Definição de estados iniciais e finais",
                    "Criação de transições com caracteres",
                    "Validação de autômatos construídos",
                  ],
                })
                setIsTaskOpen(true)
              }}
            >
              <div className="node-circle">
                <span className="node-icon"><FaGamepad className="text-purple-500" /></span>
              </div>
              <div className="node-label">Prática Interativa</div>
              <div className="node-subtitle">Autômatos</div>
            </div>
          </div>


        </div>
      </div>

      <div className="right-sidebar">
        <div className="stats">
          <div className="stat-item green">
            <WiDaySunny size={28} className="text-yellow-900" />
            <span className="stat-number">{userData ? (userData.streak_count ?? 0) : 0}</span>
          </div>
          <div className="stat-item orange">
            <FaCoins className="text-yellow-400 text-xl" />
            <span className="stat-number">{userData ? (userData.diamonds ?? 0) : 0}</span>
          </div>
          <div className="stat-item purple">
            <FaStar className="text-blue-400 text-xl" />
            <span className="stat-number">{userData ? (userData.xp ?? 0) : 0}</span>
          </div>
        </div>

        {analytics && (
          <SuggestionWidget
            analytics={analytics}
            handleReviewTopic={handleReviewTopic}
          />
        )}

        {!userData && (
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

      {showLogin && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowLogin(false)}>
              ✕
            </button>
            <h2>Entrar</h2>
            <input
              type="email"
              placeholder="E-mail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            <button className="confirm-btn-jorney" onClick={handleLogin}>
              Entrar
            </button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setShowRegister(false)}>
              ✕
            </button>
            <h2>Criar Conta</h2>
            <input
              type="text"
              placeholder="Nome"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            {registerError && <p style={{ color: "red" }}>{registerError}</p>}
            <button className="confirm-btn-jorney" onClick={handleRegister}>
              Cadastrar
            </button>
          </div>
        </div>
      )}

      {selectedTask && (
        <Task
          isOpen={isTaskOpen}
          onClose={handleCloseTask}
          taskData={selectedTask}
          onStartLesson={selectedTask.title.includes("Prática") ? handleStartAutomatonLesson : handleStartLesson}
        />
      )}
      {showAchievementsPopup && (
        <div className="modal-overlay">
          <div className="modal achievements-modal">
            <h2>🏆 Novas Conquistas!</h2>
            <div className="achievement-list">
              {newAchievements.map((ach) => (
                <div key={ach.id} className="achievement-item">
                  <span className="achievement-icon">{ach.icon || "✨"}</span>
                  <div className="achievement-info">
                    <strong>{ach.name}</strong>
                    <p>{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="confirm-btn-jorney" onClick={() => setShowAchievementsPopup(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Path_player

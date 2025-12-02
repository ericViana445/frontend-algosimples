// 📘 LessonData.ts — Banco de lições organizado por módulos e fases

// =======================
// 🎯 MÓDULO 1 - BUBBLE SORT
// =======================

// =======================
// 🔹 FASE 1 - FÁCIL
// =======================

// Questão 1 – Bubble Sort Fácil
export const lesson_bubble_facil_q1 = {
  title: "Bubble Sort — Comportamento por Iteração",

  explanation: `Pense em como o algoritmo "varre" o vetor: ele observa dois elementos de cada vez, lado a lado, e decide se precisam trocar de lugar.`,

  question: "O que o Bubble Sort faz em cada iteração?",

  alternatives: [
    "Troca elementos aleatórios",
    "Ordena metades do vetor",
    "Compara e troca elementos adjacentes",
    "Escolhe o menor e coloca no início"
  ],

  image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fasfmbhsv8q0r7ltfc2sk.gif",

  correctAnswer: 2,

  tags: ["Bubble Sort", "algoritmos de ordenação", "iteração"]
};

import l1q2 from "./LessonDataImages/l1q2.png"
// Questão 2 – Bubble Sort Fácil
export const lesson_bubble_facil_q2 = {
  title: "Bubble Sort — Comportamento dos Elementos",

  explanation: `Imagine as "bolhas" subindo — o elemento mais pesado ou maior sempre termina em uma posição específica após cada varredura.`,

  question: "O que acontece com o maior elemento após a primeira passagem completa?",

  alternatives: [
    "Vai para o início",
    "Vai para o final",
    "É removido",
    "Permanece no meio"
  ],

  correctAnswer: 1,

  image: l1q2, 

  tags: ["Bubble Sort", "algoritmos de ordenação", "comportamento"]
};

// Questão 3 – Bubble Sort Fácil
export const lesson_bubble_facil_q3 = {
  title: "Bubble Sort — Condições de Troca",

  explanation: `No Bubble Sort, cada passo do algoritmo envolve comparar dois elementos que estão lado a lado. Dependendo da relação entre esses dois valores, o algoritmo pode decidir mantê-los na posição atual ou trocá-los. A lógica por trás dessas trocas está ligada ao objetivo principal do algoritmo: fazer com que os elementos "subam" para suas posições corretas ao longo das passagens.`,

  question: "O Bubble Sort realiza trocas quando:",

  alternatives: [
    "Os elementos estão em ordem",
    "Os elementos estão fora de ordem",
    "A soma dos dois elementos é maior que 10",
    "O índice atual é par"
  ],

  correctAnswer: 1,

  tags: ["Bubble Sort", "algoritmos de ordenação", "condições"]
};

// Questão 4 – Bubble Sort Fácil
export const lesson_bubble_facil_q4 = {
  title: "Bubble Sort — Condição de Parada",

  explanation: `O algoritmo faz várias passagens. Em algum momento, chega um ponto em que não há mais necessidade de trocas.`,

  question: "O que caracteriza o fim da ordenação no Bubble Sort?",

  alternatives: [
    "Nenhuma troca é feita em uma passagem",
    "Todos os elementos são iguais",
    "A soma total é constante",
    "Há apenas uma troca"
  ],

  correctAnswer: 0,

  tags: ["Bubble Sort", "algoritmos de ordenação", "parada"]
};

// Questão 5 – Bubble Sort Fácil
export const lesson_bubble_facil_q5 = {
  title: "Bubble Sort — Eficiência",

  explanation: `Pense na quantidade de comparações que ele precisa fazer se a lista tiver milhares de elementos. A performance cresce rapidamente conforme o tamanho da entrada.`,

  question: "O Bubble Sort é considerado eficiente para listas grandes?",

  alternatives: [
    "Sim",
    "Não"
  ],

  correctAnswer: 1,

  tags: ["Bubble Sort", "algoritmos de ordenação", "eficiência"]
};

export const lessonsBubbleFacil = [
  lesson_bubble_facil_q1,
  lesson_bubble_facil_q2,
  lesson_bubble_facil_q3,
  lesson_bubble_facil_q4,
  lesson_bubble_facil_q5,
];

// =======================
// 🔹 FASE 2 - DIFÍCIL
// =======================

// Questão 1 – Bubble Sort Difícil
export const lesson_bubble_dificil_q1 = {
  title: "Bubble Sort — Versão Otimizada",

  explanation: `A versão otimizada do Bubble Sort interrompe o processo quando percebe que nenhuma troca foi necessária durante uma passagem completa. Reflita sobre em quais cenários isso acontece cedo e em quais não acontece.`,

  question: "Em qual situação o Bubble Sort otimizado reduz significativamente o número de passagens?",

  alternatives: [
    "Quando o vetor está totalmente invertido",
    "Quando o vetor está quase ordenado",
    "Quando o vetor possui valores muito grandes",
    "Quando o vetor tem muitos elementos repetidos"
  ],

  correctAnswer: 1,

  tags: ["Bubble Sort", "otimização", "complexidade"]
};

import l2q2 from "./LessonDataImages/l2q2.png"
// Questão 2 – Bubble Sort Difícil
export const lesson_bubble_dificil_q2 = {
  title: "Bubble Sort — Análise de Comparações",

  explanation: `O número de comparações do Bubble Sort é diretamente ligado ao fato de que ele percorre o vetor várias vezes, mesmo que poucas trocas sejam necessárias. Pense em quando esse comportamento de percorrer tudo não muda.`,

  question: "Em qual cenário o Bubble Sort realiza o maior número de comparações, independentemente de trocas?",

  alternatives: [
    "Vetor ordenado",
    "Vetor invertido",
    "Vetor parcialmente ordenado",
    "Vetor com valores todos iguais"
  ],

  correctAnswer: 0,

  Image: l2q2,

  tags: ["Bubble Sort", "comparações", "análise"]
};

// Questão 3 – Bubble Sort Difícil
export const lesson_bubble_dificil_q3 = {
  title: "Bubble Sort — Estabilidade",

  explanation: `A estabilidade depende de como o algoritmo trata elementos equivalentes. Se as trocas só ocorrem quando existe uma relação de "fora de ordem", isso influencia diretamente na preservação da ordem relativa de valores iguais.`,

  question: "O Bubble Sort é considerado estável. O que, no comportamento das trocas, justifica essa característica?",

  alternatives: [
    "Ele sempre troca elementos iguais de posição",
    "Ele nunca compara elementos iguais",
    "Ele só troca quando há relação de ordem",
    "Ele não faz trocas aleatórias"
  ],

  correctAnswer: 2,

  tags: ["Bubble Sort", "estabilidade", "propriedades"]
};

// Questão 4 – Bubble Sort Difícil
export const lesson_bubble_dificil_q4 = {
  title: "Bubble Sort — Propriedade após k Passagens",

  explanation: `Observe que, a cada passagem, certos elementos tendem a se deslocar para regiões específicas do vetor. Análise qual direção esses valores seguem durante as trocas sucessivas.`,

  question: "Após k passagens completas do Bubble Sort, qual propriedade sobre os maiores elementos é verdadeira?",

  alternatives: [
    "Todos os menores elementos já estão posicionados",
    "Os maiores elementos foram movidos para frente",
    "Os maiores elementos já estão próximos do fim",
    "Nenhum elemento ainda está no lugar correto"
  ],

  correctAnswer: 2,

  tags: ["Bubble Sort", "propriedades", "passagens"]
};

// Questão 5 – Bubble Sort Difícil
export const lesson_bubble_dificil_q5 = {
  title: "Bubble Sort — Implementação Recursiva",

  explanation: `Pense se há uma forma de fazer o algoritmo repetir seu comportamento chamando a si mesmo em partes menores da lista.`,

  question: "O Bubble Sort pode ser implementado de forma recursiva?",

  alternatives: [
    "Sim",
    "Não"
  ],

  correctAnswer: 0,

  tags: ["Bubble Sort", "recursão", "implementação"]
};

export const lessonsBubbleDificil = [
  lesson_bubble_dificil_q1,
  lesson_bubble_dificil_q2,
  lesson_bubble_dificil_q3,
  lesson_bubble_dificil_q4,
  lesson_bubble_dificil_q5,
];

// =======================
// 🎯 MÓDULO 2 - INSERTION SORT
// =======================
 img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Insertion-sort-example.gif?20110309111239"
// =======================
// 🔹 FASE 1 - FÁCIL
// =======================

// Questão 1 – Insertion Sort Fácil
export const lesson_insertion_facil_q1 = {
  title: "Insertion Sort — Local de Inserção",

  explanation: `O algoritmo mantém uma parte do vetor já organizada e trabalha inserindo o elemento atual no local adequado dessa região. Pense em como se organiza cartas na mão.`,

  question: "O Insertion Sort insere cada novo elemento onde?",

  alternatives: [
    "No final da lista",
    "Em uma posição aleatória",
    "No início da lista",
    "Na parte da lista que já está ordenada"
  ],

  correctAnswer: 3,

  tags: ["Insertion Sort", "algoritmos de ordenação", "inserção"]
};

// Questão 2 – Insertion Sort Fácil
export const lesson_insertion_facil_q2 = {
  title: "Insertion Sort — Melhor Cenário",

  explanation: `A eficiência melhora quando o número de deslocamentos que o algoritmo precisa fazer é muito pequeno. Quanto mais próximo da ordem correta a lista estiver, menor o trabalho.`,

  question: "Em qual situação o Insertion Sort apresenta seu melhor desempenho?",

  alternatives: [
    "Quando o vetor está ordenado",
    "Quando o vetor está invertido",
    "Quando o vetor é aleatório",
    "Quando o vetor tem números grandes"
  ],

  correctAnswer: 0,

  tags: ["Insertion Sort", "eficiência", "cenários"]
};

// Questão 3 – Insertion Sort Fácil
export const lesson_insertion_facil_q3 = {
  title: "Insertion Sort — Operação Fundamental",

  explanation: `Ele não depende de dividir o vetor, mas sim de mover alguns valores para a direita para abrir espaço para o novo elemento que está sendo inserido.`,

  question: "Qual operação é fundamental para o funcionamento do Insertion Sort?",

  alternatives: [
    "Dividir o vetor ao meio",
    "Deslocar elementos",
    "Sortear posições",
    "Trocar elementos aleatoriamente"
  ],

  correctAnswer: 1,

  tags: ["Insertion Sort", "operações", "fundamentos"]
};

// Questão 4 – Insertion Sort Fácil
export const lesson_insertion_facil_q4 = {
  title: "Insertion Sort — Estabilidade",

  explanation: `Repare que o algoritmo apenas desloca elementos maiores para abrir espaço. Isso influencia diretamente em como elementos iguais se comportam entre si.`,

  question: "Em relação a elementos iguais, o Insertion Sort é:",

  alternatives: [
    "Capaz de alterar a ordem deles",
    "Incapaz de lidar com eles",
    "Um algoritmo que sempre muda a posição relativa deles",
    "Um algoritmo que mantém a ordem relativa deles"
  ],

  correctAnswer: 3,

  tags: ["Insertion Sort", "estabilidade", "elementos iguais"]
};

// Questão 5 – Insertion Sort Fácil
export const lesson_insertion_facil_q5 = {
  title: "Insertion Sort — Comparações",

  explanation: `O algoritmo caminha "de trás para frente" dentro da parte ordenada da lista para encontrar o local onde o novo elemento deve ficar.`,

  question: "O Insertion Sort trabalha comparando:",

  alternatives: [
    "Elementos distantes um do outro",
    "Apenas o primeiro e o último elemento",
    "O elemento atual com elementos anteriores a ele",
    "Elementos aleatórios da lista"
  ],

  correctAnswer: 2,

  tags: ["Insertion Sort", "comparações", "técnica"]
};

export const lessonsInsertionFacil = [
  lesson_insertion_facil_q1,
  lesson_insertion_facil_q2,
  lesson_insertion_facil_q3,
  lesson_insertion_facil_q4,
  lesson_insertion_facil_q5,
];

// =======================
// 🔹 FASE 2 - DIFÍCIL
// =======================

// Questão 1 – Insertion Sort Difícil
export const lesson_insertion_dificil_q1 = {
  title: "Insertion Sort — Comparação com Outros Algoritmos",

  explanation: `Pense em quando os deslocamentos são mínimos.`,

  question: "Em qual cenário o Insertion Sort pode superar algoritmos mais rápidos como Merge Sort?",

  alternatives: [
    "Em vetores muito grandes",
    "Em vetores aleatórios",
    "Em vetores quase ordenados",
    "Nunca acontece"
  ],

  correctAnswer: 2,

  image: "https://miro.medium.com/v2/resize:fit:633/1*JP-wURjwf4k23U2G3GNQDw.gif",

  tags: ["Insertion Sort", "comparação", "performance"]
};

// Questão 2 – Insertion Sort Difícil
export const lesson_insertion_dificil_q2 = {
  title: "Insertion Sort — Pior Caso",

  explanation: `Considere o que precisa acontecer para inserir um elemento na primeira posição repetidas vezes.`,

  question: "Qual operação o Insertion Sort realiza mais frequentemente no pior caso?",

  alternatives: [
    "Comparação",
    "Trocas aleatórias",
    "Divisão do vetor",
    "Deslocamentos de elementos"
  ],

  correctAnswer: 3,

  tags: ["Insertion Sort", "pior caso", "operações"]
};

// Questão 3 – Insertion Sort Difícil
export const lesson_insertion_dificil_q3 = {
  title: "Insertion Sort — Aplicabilidade",

  explanation: `Pense no tamanho do conjunto de dados com que o algoritmo lida melhor.`,

  question: "O Insertion Sort é particularmente eficiente em qual tipo de sistema?",

  alternatives: [
    "Sistemas que usam muita memória RAM",
    "Sistemas com alto custo para operações de escrita",
    "Sistemas que trabalham com pequenos conjuntos de dados",
    "Sistemas distribuídos"
  ],

  correctAnswer: 2,

  image:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Sorting_odd_even_anim.gif?20220209223142",

  tags: ["Insertion Sort", "aplicabilidade", "sistemas"]
};

import l5q4 from "./LessonDataImages/l5q4.jpeg"
// Questão 4 – Insertion Sort Difícil
export const lesson_insertion_dificil_q4 = {
  title: "Insertion Sort — Análise de Deslocamentos",

  explanation: `Imagine que o último elemento precise ser movido para o início da lista.`,

  question: "No pior caso, quantos deslocamentos o algoritmo realiza para inserir o último elemento?",

  alternatives: [
    "1",
    "n − 1",
    "n",
    "n²"
  ],

  correctAnswer: 1,

  image: l5q4,

  tags: ["Insertion Sort", "análise", "deslocamentos"]
};

// Questão 5 – Insertion Sort Difícil
export const lesson_insertion_dificil_q5 = {
  title: "Insertion Sort — Justificativa de Estabilidade",

  explanation: `Reflita sobre como o algoritmo desloca elementos e como isso afeta pares com valores iguais.`,

  question: "O Insertion Sort é considerado estável porque:",

  alternatives: [
    "Sempre troca elementos iguais",
    "Nunca desloca elementos iguais",
    "Mantém a ordem relativa de elementos iguais",
    "Não compara elementos iguais"
  ],

  correctAnswer: 2,

  tags: ["Insertion Sort", "estabilidade", "justificativa"]
};

export const lessonsInsertionDificil = [
  lesson_insertion_dificil_q1,
  lesson_insertion_dificil_q2,
  lesson_insertion_dificil_q3,
  lesson_insertion_dificil_q4,
  lesson_insertion_dificil_q5,
];

// =======================
// MÓDULO 3 - QUICK SORT
// =======================

// =======================
// FASE 1 - FÁCIL
// =======================

import l6q1 from "./LessonDataImages/l6q1.jpeg"
// Questão 1 – Quick Sort Fácil
export const lesson_quick_facil_q1 = {
  title: "Quick Sort — Definição",

  explanation: `Quick Sort é um algoritmo de ordenação baseado na estratégia Dividir para Conquistar. Ele funciona escolhendo um pivô, separando os elementos menores e maiores que ele (particionando), e depois ordenando recursivamente essas partes.`,

  question: "O que é Quick Sort?",

  alternatives: [
    "Algoritmo que usa contagem",
    "Algoritmo que divide o vetor com base em um pivô",
    "Troca de vizinhos",
    "Uso de árvores"
  ],

  correctAnswer: 1,

  image: l6q1,

  tags: ["Quick Sort", "definição", "algoritmos"]
};

import l6q2 from "./LessonDataImages/l6q2.jpeg"
// Questão 2 – Quick Sort Fácil
export const lesson_quick_facil_q2 = {
  title: "Quick Sort — Função do Pivô",

  explanation: `O pivô é o elemento escolhido para comparar os outros.`,

  question: "Para que serve o pivô no Quick Sort?",

  alternatives: [
    "Remover elementos",
    "Calcular memória",
    "Separar menores e maiores",
    "Dar estabilidade"
  ],

  correctAnswer: 2,

  image: l6q2,

  tags: ["Quick Sort", "pivô", "função"]
};

// Questão 3 – Quick Sort Fácil
export const lesson_quick_facil_q3 = {
  title: "Quick Sort — Complexidade Média",

  explanation: `Quando a divisão é equilibrada, o tempo de execução cresce proporcionalmente à divisão em logaritmos.`,

  question: "Qual é a complexidade média do Quick Sort?",

  alternatives: [
    "O(n²)",
    "O(log n)",
    "O(n log n)",
    "O(n)"
  ],

  correctAnswer: 2,

  tags: ["Quick Sort", "complexidade", "análise"]
};

// Questão 4 – Quick Sort Fácil
export const lesson_quick_facil_q4 = {
  title: "Quick Sort — Estabilidade",

  explanation: `Durante as trocas, elementos iguais podem mudar de posição.`,

  question: "O Quick Sort é estável?",

  alternatives: [
    "Sim",
    "Não",
    "Apenas com sequências pequenas",
    "Apenas com pivô aleatório"
  ],

  correctAnswer: 1,

  tags: ["Quick Sort", "estabilidade", "propriedades"]
};

// Questão 5 – Quick Sort Fácil
export const lesson_quick_facil_q5 = {
  title: "Quick Sort — Pior Caso",

  explanation: `Partições extremamente desiguais fazem o algoritmo percorrer quase o vetor inteiro repetidas vezes.`,

  question: "Qual é o pior caso do Quick Sort?",

  alternatives: [
    "Pivô divide ao meio",
    "Pivô sempre nas extremidades",
    "Elementos duplicados",
    "Vetor aleatório"
  ],

  correctAnswer: 1,

  tags: ["Quick Sort", "pior caso", "cenários"]
};

export const lessonsQuickFacil = [
  lesson_quick_facil_q1,
  lesson_quick_facil_q2,
  lesson_quick_facil_q3,
  lesson_quick_facil_q4,
  lesson_quick_facil_q5,
];

// =======================
// 🔹 FASE 2 - DIFÍCIL
// =======================

// Questão 1 – Quick Sort Difícil
export const lesson_quick_dificil_q1 = {
  title: "Quick Sort — Influência do Pivô",

  explanation: `A eficiência depende de como o vetor se divide; pense no impacto das alturas das chamadas recursivas.`,

  question: "Por que a escolha do pivô influencia tanto o desempenho do Quick Sort?",

  alternatives: [
    "Determina o total de trocas",
    "Pode criar partições equilibradas",
    "Escolhe elementos ignorados",
    "Controla estabilidade"
  ],

  correctAnswer: 1,

  tags: ["Quick Sort", "pivô", "desempenho"]
};

// Questão 2 – Quick Sort Difícil
export const lesson_quick_dificil_q2 = {
  title: "Quick Sort — Particionamentos",

  explanation: `Compare a movimentação dos índices e como cada método posiciona o pivô ao final do processo.`,

  question: "O que diferencia o particionamento de Lomuto e Hoare?",

  alternatives: [
    "Hoare usa dois ponteiros e Lomuto usa um",
    "Lomuto é mais rápido sempre",
    "Hoare escolhe o maior pivô",
    "Ambos retornam o mesmo índice"
  ],

  correctAnswer: 0,

  tags: ["Quick Sort", "particionamento", "técnicas"]
};

// Questão 3 – Quick Sort Difícil
export const lesson_quick_dificil_q3 = {
  title: "Quick Sort — Vantagens Comparativas",

  explanation: `Pense em cenários onde não usar memória extra traz vantagem, especialmente em estruturas grandes.`,

  question: "Em que situação o Quick Sort pode superar o Merge Sort?",

  alternatives: [
    "Com elementos duplicados",
    "Memória limitada",
    "Vetores pequenos",
    "Elementos iguais"
  ],

  correctAnswer: 1,

  tags: ["Quick Sort", "comparação", "vantagens"]
};

// Questão 4 – Quick Sort Difícil
export const lesson_quick_dificil_q4 = {
  title: "Quick Sort — Não Estabilidade",

  explanation: `Observe como elementos iguais podem ser reposicionados durante a partição.`,

  question: "Por que o Quick Sort não é estável?",

  alternatives: [
    "Usa dois pivôs sempre",
    "Troca a posição relativa de elementos iguais",
    "Depende muito de recursão",
    "Funciona só com inteiros"
  ],

  correctAnswer: 1,

  tags: ["Quick Sort", "estabilidade", "limitações"]
};

import l7q5 from "./LessonDataImages/l7q5.jpeg"
// Questão 5 – Quick Sort Difícil
export const lesson_quick_dificil_q5 = {
  title: "Quick Sort — Caso Específico",

  explanation: `Reflita sobre como ficam os tamanhos das sublistas se o pivô sempre for o menor ou maior elemento.`,

  question: "O que ocorre se o pivô for sempre o primeiro elemento em um array já ordenado?",

  alternatives: [
    "Fica mais estável",
    "Usa menos memória",
    "Partições muito desbalanceadas",
    "Vira O(log n)"
  ],

  correctAnswer: 2,

  image: l7q5,

  tags: ["Quick Sort", "casos específicos", "análise"]
};

export const lessonsQuickDificil = [
  lesson_quick_dificil_q1,
  lesson_quick_dificil_q2,
  lesson_quick_dificil_q3,
  lesson_quick_dificil_q4,
  lesson_quick_dificil_q5,
];

// =======================
// 🎯 MÓDULO 4 - MERGE SORT
// =======================

// =======================
// 🔹 FASE 1 - FÁCIL
// =======================


//import il8 from "./LessonDataImages/il8.jpeg"
// Questão 1 – Merge Sort Fácil
export const lesson_merge_facil_q1 = {
  title: "Merge Sort — Funcionamento",

  explanation: `O Merge Sort trabalha quebrando o problema em partes muito pequenas. Primeiro divide o array no meio diversas vezes, até cada parte ter apenas um elemento. Depois junta essas partes comparando os menores elementos de cada lista, formando listas maiores já ordenadas.`,

  question: "O que o Merge Sort faz para ordenar um array?",

  alternatives: [
    "Troca elementos vizinhos repetidamente",
    "Escolhe pivôs e particiona",
    "Divide em partes menores e intercala ordenando",
    "Usa contagem de frequência"
  ],

  correctAnswer: 2,

  tags: ["Merge Sort", "funcionamento", "algoritmos"]
};

// Questão 2 – Merge Sort Fácil
export const lesson_merge_facil_q2 = {
  title: "Merge Sort — Estabilidade",

  explanation: `A estabilidade garante que, se dois elementos têm o mesmo valor, sua ordem original será preservada. O Merge Sort consegue manter essa característica porque durante o processo de intercalação os elementos iguais são colocados na ordem em que aparecem, sem trocas diretas caóticas.`,

  question: "O Merge Sort é considerado um algoritmo estável?",

  alternatives: [
    "Sim",
    "Não",
    "Apenas com vetores grandes",
    "Apenas em listas encadeadas"
  ],

  correctAnswer: 0,

  tags: ["Merge Sort", "estabilidade", "propriedades"]
};

// Questão 3 – Merge Sort Fácil
export const lesson_merge_facil_q3 = {
  title: "Merge Sort — Complexidade no Pior Caso",

  explanation: `Mesmo quando o array está completamente invertido ou embaralhado, o Merge Sort executa as mesmas etapas: dividir em metades e intercalar. Por isso, seu comportamento não é afetado pelo estado inicial dos dados, mantendo sempre o mesmo custo total de processamento.`,

  question: "Qual é a complexidade de tempo do Merge Sort no pior caso?",

  alternatives: [
    "O(n²)",
    "O(n log n)",
    "O(log n)",
    "O(n)"
  ],

  correctAnswer: 1,

  tags: ["Merge Sort", "complexidade", "análise"]
};

// Questão 4 – Merge Sort Fácil
export const lesson_merge_facil_q4 = {
  title: "Merge Sort — Desvantagem Principal",

  explanation: `A fase de intercalação cria arranjos temporários para organizar os elementos antes de devolvê-los ao vetor final. Isso significa que ele não trabalha apenas "dentro do próprio array", exigindo um espaço extra proporcional ao tamanho da entrada.`,

  question: "Qual é a principal desvantagem do Merge Sort?",

  alternatives: [
    "Funciona apenas para números",
    "Precisa de memória adicional",
    "Não funciona com recursão",
    "Seu pior caso é muito lento"
  ],

  correctAnswer: 1,

  tags: ["Merge Sort", "desvantagens", "limitações"]
};

// Questão 5 – Merge Sort Fácil
export const lesson_merge_facil_q5 = {
  title: "Merge Sort — Estratégia de Solução",

  explanation: `A lógica central do Merge Sort é quebrar o problema em pedaços menores e resolver cada pedaço individualmente, juntando as respostas no final. Isso é exatamente a essência da estratégia de dividir e conquistar: resolver pequenos problemas e combiná-los de forma organizada.`,

  question: "Qual estrutura de pensamento o algoritmo segue?",

  alternatives: [
    "Programação dinâmica",
    "Dividir e conquistar",
    "Busca e seleção",
    "Tabelas hash"
  ],

  correctAnswer: 1,

  tags: ["Merge Sort", "estratégia", "paradigma"]
};

export const lessonsMergeFacil = [
  lesson_merge_facil_q1,
  lesson_merge_facil_q2,
  lesson_merge_facil_q3,
  lesson_merge_facil_q4,
  lesson_merge_facil_q5,
];

// =======================
// 🔹 FASE 2 - DIFÍCIL
// =======================

// Questão 1 – Merge Sort Difícil
export const lesson_merge_dificil_q1 = {
  title: "Merge Sort — Requisito de Memória",

  explanation: `Durante o processo de intercalação, o algoritmo precisa comparar duas partes do array e criar uma sequência final ordenada. Para isso, ele utiliza uma área auxiliar onde deposita temporariamente os elementos até que toda a fusão seja concluída.`,

  question: "Por que o Merge Sort exige memória extra proporcional ao tamanho do vetor?",

  alternatives: [
    "Para armazenar o pivô",
    "Para guardar cópias temporárias durante a fusão",
    "Porque recicla índices",
    "Porque usa duas recursões simultâneas"
  ],

  correctAnswer: 1,

  tags: ["Merge Sort", "memória", "requisitos"]
};

import l10q2 from "./LessonDataImages/l10q2.png"
// Questão 2 – Merge Sort Difícil
export const lesson_merge_dificil_q2 = {
  title: "Merge Sort — Consistência de Performance",

  explanation: `Diferente de outros algoritmos, o Merge Sort não depende da condição inicial dos dados. Ele sempre divide o array em metades e executa o mesmo percurso de chamadas recursivas. A etapa de fusão sempre será realizada por completo independentemente do estado inicial dos elementos.`,

  question: "Por que o Merge Sort mantém sua complexidade mesmo com dados já ordenados?",

  alternatives: [
    "Pois troca menos elementos",
    "Porque sempre explora todos os níveis da divisão",
    "Porque escolhe o menor sempre",
    "Porque ignora elementos iguais"
  ],

  correctAnswer: 1,

  image: l10q2,

  tags: ["Merge Sort", "consistência", "performance"]
};

import l10q3 from "./LessonDataImages/l10q3.webp"
// Questão 3 – Merge Sort Difícil
export const lesson_merge_dificil_q3 = {
  title: "Merge Sort — Aplicações Específicas",

  explanation: `A lógica de fusão funciona muito bem com estruturas onde percorrer os elementos sequencialmente é natural, como listas encadeadas. Nessas estruturas, acessar um elemento aleatório é caro, mas percorrer de forma linear é barato — e o Merge Sort explora exatamente isso.`,

  question: "Em qual situação o Merge Sort é especialmente eficiente?",

  alternatives: [
    "Quando precisa ordenar estruturas que não permitem acesso aleatório rápido",
    "Quando há muitos elementos iguais",
    "Quando precisa evitar recursão",
    "Quando se usa tabelas hash"
  ],

  correctAnswer: 0,

    image: l10q3,

  tags: ["Merge Sort", "aplicações", "eficiência"]
};

// Questão 4 – Merge Sort Difícil
export const lesson_merge_dificil_q4 = {
  title: "Merge Sort — Justificativa da Estabilidade",

  explanation: `Durante a fusão, quando dois elementos iguais precisam ser escolhidos, o algoritmo sempre seleciona primeiro aquele que aparece primeiro na lista original. Essa decisão lógica garante que a posição relativa entre iguais seja respeitada.`,

  question: "Por que o Merge Sort é considerado estável?",

  alternatives: [
    "Porque evita comparações",
    "Porque nunca move elementos iguais entre si",
    "Porque preserva a ordem original na etapa de fusão",
    "Porque não divide demais o array"
  ],

  correctAnswer: 2,

  tags: ["Merge Sort", "estabilidade", "justificativa"]
};

import l10q5 from "./LessonDataImages/l10q5.jpeg"
// Questão 5 – Merge Sort Difícil
export const lesson_merge_dificil_q5 = {
  title: "Merge Sort — Profundidade de Divisão",

  explanation: `O processo de divisão segue um padrão: cada divisão reduz o tamanho pela metade. Esse tipo de redução repetida gera uma profundidade de divisão que cresce de forma logarítmica. Pense no número de vezes que você pode dividir um número por 2 até chegar em 1.`,

  question: "Em um array de tamanho n, quantas vezes ele será dividido até chegar em listas unitárias?",

  alternatives: [
    "Cerca de n vezes",
    "Aproximadamente log n vezes",
    "Apenas duas vezes",
    "Nenhuma divisão ocorre"
  ],

  correctAnswer: 1,

    image: l10q5,

  tags: ["Merge Sort", "divisão", "profundidade"]
};

export const lessonsMergeDificil = [
  lesson_merge_dificil_q1,
  lesson_merge_dificil_q2,
  lesson_merge_dificil_q3,
  lesson_merge_dificil_q4,
  lesson_merge_dificil_q5,
];

// =======================
// 📦 EXPORTAÇÕES AGRUPADAS POR MÓDULO
// =======================

export const moduleBubbleSort = {
  name: "Bubble Sort",
  introductionFacil: "O método funciona examinando cada conjunto de elementos adjacentes na string, da esquerda para a direita, trocando suas posições se estiverem fora de ordem. O algoritmo então repete esse processo até que possa percorrer toda a string e não encontrar dois elementos que precisem ser trocados. Apesar da simplicidade, ele não é muito eficiente para listas grandes, pois realiza muitas comparações repetidas.",
  introductionDificil: "No Bubble Sort, cada comparação entre dois elementos adjacentes tem um propósito bem definido: ajustar gradualmente a posição de valores que ainda não estão alinhados com a ordem desejada. A decisão de realizar uma troca depende da relação entre esses dois elementos e do papel que cada um desempenha durante a 'subida' ou 'descida' no vetor. Entender essa lógica é essencial para perceber como o algoritmo identifica situações em que a ordem local precisa ser corrigida para que o conjunto completo avance rumo à ordenação total.",
  faseFacil: lessonsBubbleFacil,
  faseDificil: lessonsBubbleDificil
};

export const moduleInsertionSort = {
  name: "Insertion Sort",
  introductionFacil: "Insertion Sort é o método que percorre um vetor de elementos da esquerda para a direita e à medida que avança vai ordenando os elementos à esquerda. Considerado estável, um método de ordenação é estável se a ordem relativa dos itens iguais não se altera durante a ordenação. O funcionamento consiste em cada passo a partir do segundo elemento selecionar o próximo item da sequência e colocá-lo no local apropriado de acordo com o critério de ordenação.",
  introductionDificil: "Nesta parte, você analisará os detalhes mais complexos do Insertion Sort: seu comportamento em diferentes distribuições de dados, a relação entre quantidade de deslocamentos e comparações e como ele se destaca em cenários específicos.",
  faseFacil: lessonsInsertionFacil,
  faseDificil: lessonsInsertionDificil
};

export const moduleQuickSort = {
  name: "Quick Sort",
  introductionFacil: "Quick Sort é um algoritmo de ordenação baseado na estratégia Dividir para Conquistar. Ele funciona escolhendo um pivô, separando os elementos menores e maiores que ele (particionando), e depois ordenando recursivamente essas partes. É conhecido por sua eficiência média e por ser muito usado na prática graças ao bom desempenho para grandes conjuntos de dados.",
  introductionDificil: "Agora vamos aprofundar no funcionamento interno do Quick Sort. Você verá como diferentes métodos de particionamento influenciam o desempenho, como a escolha do pivô afeta o tempo de execução e por que o algoritmo pode variar de extremamente rápido a muito lento dependendo da entrada.",
  faseFacil: lessonsQuickFacil,
  faseDificil: lessonsQuickDificil
};

export const moduleMergeSort = {
  name: "Merge Sort",
  introductionFacil: "Merge Sort é um algoritmo de ordenação que segue rigorosamente a estratégia Dividir para Conquistar. Ele divide o vetor repetidamente em metades, até formar listas unitárias, e depois intercala (merge) essas pequenas listas, sempre mantendo a ordenação durante o processo. Por isso, seu maior ponto forte é a estabilidade e o desempenho consistente, sempre garantindo O(n log n) mesmo no pior caso.",
  introductionDificil: "Agora você vai se aprofundar na parte técnica do Merge Sort. A fase difícil explora temas como custos internos do algoritmo, comportamento em diferentes estruturas de dados, motivos da estabilidade e impacto da memória extra no desempenho.",
  faseFacil: lessonsMergeFacil,
  faseDificil: lessonsMergeDificil
};

export const allModules = [
  moduleBubbleSort,
  moduleInsertionSort,
  moduleQuickSort,
  moduleMergeSort
];
# 🧮 Vanilla JS Calculator

Uma calculadora web responsiva e funcional desenvolvida com **HTML5, CSS3 e JavaScript puro (Vanilla JS)**. O projeto destaca a aplicação de boas práticas de arquitetura em manipulação do DOM, controle de estado via _getters_ e _setters_, e prevenção de cenários de erro de cálculo.

---

## 🚀 Demonstração

👉 **[Acesse a demonstração online](https://ph-macedo.github.io/vanilla-js-calculator/)**

---

## 🛠️ Funcionalidades

- **Operações Básicas:** Adição (+), Subtração (−), Multiplicação (×) e Divisão (÷).
- **Inversão de Sinal:** Tecla `+/-` para alternar entre positivo e negativo.
- **Tratamento de Exceções:** Prevenção contra divisões por zero exibindo mensagem de `"Erro"`.
- **Display Duplo:**
  - Visor superior: Exibe a expressão matemática e o operador selecionado.
  - Visor principal: Exibe o termo atual digitado ou o resultado final.
- **Limpeza de Estado:** Tecla `C` para resetar todas as variáveis e restaurar a calculadora ao estado inicial (`0`).

---

## 🏗️ Arquitetura e Decisões de Código

Diferente de implementações simples baseadas na função global `eval()`, este projeto foi construído focando em **previsibilidade e manutenibilidade**:

- **Gerenciamento de Estado Abstraído:** Acesso e alteração das variáveis de cálculo (`term1`, `operator`, `term2`, `result`) feitos exclusivamente via funções _getters_ e _setters_.
- **Evitação de Strings Vazias:** O primeiro termo inicia padrão em `"0"`, garantindo que parsing numérico (`parseFloat`) nunca retorne valores inválidos como `NaN`.
- **Prevenção de Encadeamento com Erro:** Se a operação resultar em erro, ações subsequentes limpam o estado para não propagar operações inconsistentes.

---

## 🧰 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do display e botões (`pad`).
- **CSS3:** Estilização moderna e layout flexível.
- **JavaScript (ES6+):** Manipulação de eventos do DOM (`addEventListener`), condicionais ternárias e estruturas de decisão (`switch`).

---

## 📂 Como Executar o Projeto

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/ph-macedo/vanilla-js-calculator.git
   ```

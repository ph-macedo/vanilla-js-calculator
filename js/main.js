const pad = document.getElementById("pad");
const smDisplay = document.getElementById("smDisplay");
const lgDisplay = document.getElementById("lgDisplay");

let expression = {
  term1: "0",
  operator: "",
  term2: "",
  result: "",
};

updateDisplay();

pad.addEventListener("click", pressKey);

function pressKey(event) {
  const key = event.target;

  if (!key.classList.contains("key")) return;

  // PRESS NUMBER KEY
  if (key.classList.contains("number")) {
    if (getResult()) {
      resetExpression(key.innerHTML, "", "", "");
      updateDisplay();
      return;
    }

    if (!getOperator()) {
      if (getTerm1() === "0") {
        setTerm1(key.innerHTML);
      } else {
        setTerm1(getTerm1() + key.innerHTML);
      }
    } else {
      if (getTerm2() === "0") {
        setTerm2(key.innerHTML);
      } else {
        setTerm2(getTerm2() + key.innerHTML);
      }
    }
    updateDisplay();
    return;
  }

  // PRESS OPERATOR KEY

  if (key.classList.contains("operator")) {
    if (getResult()) {
      // let term1;
      const term1 = getResult() === "Erro" ? "0" : getResult();
      resetExpression(term1, "", "", "");
    }

    if (getTerm1()) {
      setOperator(key.innerHTML);
    }

    updateDisplay();
    return;
  }

  // PRESS CLEAR KEY

  if (key.classList.contains("clear")) {
    resetExpression("0", "", "", "");
    updateDisplay();
    return;
  }

  // PRESS EQUALS KEY

  if (key.classList.contains("equals")) {
    if (getResult() === "Erro") return;

    if (getResult()) {
      setTerm1(getResult());
    }

    if (getTerm1() && getOperator() && getTerm2()) {
      const term1 = parseFloat(getTerm1());
      const term2 = parseFloat(getTerm2());

      switch (getOperator()) {
        case "+":
          setResult(String(term1 + term2));
          break;
        case "−":
          setResult(String(term1 - term2));
          break;
        case "×":
          setResult(String(term1 * term2));
          break;
        case "÷":
          setResult(term2 === 0 ? "Erro" : String(term1 / term2));
          break;
      }
    }
    updateDisplay();
    return;
  }

  // PRESS NEGATE KEY

  if (key.classList.contains("negate")) {
    if (getResult() && getResult() !== "Erro") {
      resetExpression(String(-parseFloat(getResult())), "", "", "");
      updateDisplay();
      return;
    }

    if (!getOperator()) {
      if (getTerm1() && getTerm1() !== "0") {
        setTerm1(String(-parseFloat(getTerm1())));
      }
    } else {
      if (getTerm2() && getTerm2() !== "0") {
        setTerm2(String(-parseFloat(getTerm2())));
      }
    }
    updateDisplay();
    return;
  }

  // PRESS BACKSPACE KEY

  if (key.classList.contains("backspace")) {
    if (getResult()) return;

    if (!getOperator()) {
      if (getTerm1() && getTerm1() !== "0") {
        const updated = getTerm1().slice(0, -1);
        setTerm1(updated === "" || updated === "-" ? "0" : updated);
      }
    } else {
      if (getTerm2() && getTerm2() !== "0") {
        const updated = getTerm2().slice(0, -1);
        setTerm2(updated === "" || updated === "-" ? "0" : updated);
      }
    }

    updateDisplay();
    return;
  }

  // PRESS DECIMAL KEY

  if (key.classList.contains("decimal")) {
    if (getResult()) {
      resetExpression("0", "", "", "");
    }

    if (!getOperator()) {
      if (getTerm1() && getTerm1().includes(".") === false) {
        setTerm1(getTerm1() + ".");
      }
    } else {
      if (!getTerm2()) {
        setTerm2("0.");
      } else if (!getTerm2().includes(".")) {
        setTerm2(getTerm2() + ".");
      }
    }

    updateDisplay();
    return;
  }

  // PRESS CLEAR-ENTRY KEY

  if (key.classList.contains("clear-entry")) {
    if (getResult()) {
      resetExpression("0", "", "", "");
      updateDisplay();
      return;
    }

    if (!getOperator()) {
      if (getTerm1() && getTerm1() !== "0") {
        setTerm1("0");
      }
    } else {
      if (getTerm2() !== "0") {
        setTerm2("0");
      }
    }

    updateDisplay();
    return;
  }
}

function updateDisplay() {
  if (!getOperator()) {
    smDisplay.innerHTML = "&nbsp;";
    lgDisplay.innerHTML = getTerm1();
    return;
  }

  if (!getTerm2()) {
    smDisplay.innerHTML = `${getTerm1()} ${getOperator()}`;
    lgDisplay.innerHTML = getTerm1();
    return;
  }

  if (getResult()) {
    smDisplay.innerHTML = `${getTerm1()} ${getOperator()} ${getTerm2()}`;
    lgDisplay.innerHTML = getResult();
    return;
  }

  smDisplay.innerHTML = `${getTerm1()} ${getOperator()}`;
  lgDisplay.innerHTML = getTerm2();
}

function resetExpression(term1, operator, term2, result) {
  setTerm1(term1);
  setOperator(operator);
  setTerm2(term2);
  setResult(result);
}

// GETTERS

function getResult() {
  return expression.result;
}

function getOperator() {
  return expression.operator;
}

function getTerm1() {
  return expression.term1;
}

function getTerm2() {
  return expression.term2;
}

// SETTERS

function setResult(result) {
  expression.result = result;
}

function setOperator(operator) {
  expression.operator = operator;
}

function setTerm1(term1) {
  expression.term1 = term1;
}

function setTerm2(term2) {
  expression.term2 = term2;
}

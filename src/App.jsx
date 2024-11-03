import { useState } from "react";
import "./style.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };
  const [resultado, setResultado] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [operacao, setOperacao] = useState();

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
    setIsVisible(true);
    setOperacao("soma");
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
    setIsVisible(true);
    setOperacao("subtração");
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
    setIsVisible(true);
    setOperacao("multiplicação");
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
    setIsVisible(true);
    setOperacao("divisão");
  };

  return (
    <>
      <header>
        <h1>Calculadora</h1>
        <p>Com as 4 operações básicas</p>
      </header>
      <main>
        <p>Informe o primeiro valor:</p>
        <input onChange={capturandoPrimeiroValor} />
        <p>Informe o segundo valor:</p>
        <input onChange={capturandoSegundoValor} />
        <div>
          <button onClick={soma}>+</button>
          <button onClick={subtracao}>-</button>
          <button onClick={multiplicacao}>x</button>
          <button onClick={divisao}>/</button>
        </div>
        {isVisible && (
          <section>
            <p>
              O resultado dessa {operacao} é: {resultado}
            </p>
          </section>
        )}
      </main>
    </>
  );
}

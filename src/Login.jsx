import React, { useState } from 'react';

export default function Login({ aoEntrar, irParaCadastro, irParaPlanos }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert('Preencha o e-mail e a senha.');
      return;
    }

    // Demonstração: ainda não valida uma conta real.
    if (aoEntrar) {
      aoEntrar({ email });
    } else {
      alert('Tela de demonstração: precisamos configurar a autenticação.');
    }
  }

  return (
    <main className="tela-conta">
      <section className="cartao-conta">

        <h1>Bem-vindo de volta!</h1>
        <p>Acesse sua conta para continuar.</p>

        <form onSubmit={entrar}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit" className="botao-principal">
            Entrar
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{' '}
          <button className="botao-texto" onClick={irParaCadastro}>
            Criar conta
          </button>
        </p>

        <button className="botao-texto" onClick={irParaPlanos}>
          Conhecer os planos
        </button>
      </section>
    </main>
  );
}

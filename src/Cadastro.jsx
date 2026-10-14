import React, { useState } from 'react';

export default function Cadastro({ irParaLogin, irParaPlanos }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar(e) {
    e.preventDefault();

    if (senha.length < 8) {
      alert('A senha deve ter pelo menos 8 caracteres.');
      return;
    }

    // Demonstração: ainda não salva a conta em um servidor.
    alert('A tela está funcionando! O cadastro real precisa de autenticação.');

    setNome('');
    setEmail('');
    setSenha('');
  }

  return (
    <main className="tela-conta">
      <section className="cartao-conta">

        <h1>Crie sua conta</h1>
        <p>Tenha suas informações de saúde organizadas.</p>

        <form onSubmit={cadastrar}>
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="cadastro-email">E-mail</label>
          <input
            id="cadastro-email"
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="cadastro-senha">Senha</label>
          <input
            id="cadastro-senha"
            type="password"
            placeholder="Crie uma senha com 8 caracteres ou mais"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            minLength={8}
            required
          />

          <button type="submit" className="botao-principal">
            Criar minha conta
          </button>
        </form>

        <p>
          Já possui uma conta?{' '}
          <button className="botao-texto" onClick={irParaLogin}>
            Fazer login
          </button>
        </p>

        <button className="botao-texto" onClick={irParaPlanos}>
          Ver planos
        </button>
      </section>
    </main>
  );
}

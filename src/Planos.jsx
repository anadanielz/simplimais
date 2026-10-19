
import React from 'react';

export default function Planos({ irParaLogin, irParaCadastro }) {
  return (
    <main className="tela-conta">
      <section className="area-planos">
        

        <h1>Escolha seu plano</h1>
        <p>Organize seus cuidados de saúde do seu jeito.</p>

        <div className="lista-planos">

          {/* PLANO GRATUITO */}
          <article className="cartao-plano">
            <h2>Plano Gratuito</h2>

            <p className="preco-plano">
              R$ 0 <span>/ sempre</span>
            </p>

            <ul>
              <li>Informações sobre medicamentos</li>
              <li>Organização de lembretes</li>
              <li>Acesso às principais áreas do aplicativo</li>
              <li>Consulta aos medicamentos cadastrados</li>
              <li>Assistente básico do Simpli+</li>
            </ul>

            <button
              className="botao-principal"
              onClick={irParaCadastro}
            >
              Começar grátis
            </button>
          </article>

          {/* PLANO PREMIUM */}
          <article className="cartao-plano plano-destaque">

            <span className="etiqueta-plano">
              Plano Premium
            </span>

            <h2>Mais cuidado para você</h2>

            <p className="preco-plano">
             R$79,90
            </p>

            <p>
              Mais praticidade para organizar sua rotina
              e benefícios exclusivos planejados para você.
            </p>

            <ul>
              <li>
                Recursos avançados de organização de medicamentos
              </li>

              <li>
                Histórico e acompanhamento da rotina de cuidados
              </li>

              <li>
                Experiência personalizada
              </li>

              <li>
                Assistente com recursos ampliados
              </li>

              <li>
                Benefícios planejados em farmácias parceiras
              </li>

              <li>
                Possíveis ofertas e cupons exclusivos para assinantes
              </li>
            </ul>

            <p className="aviso">
              Os benefícios em farmácias dependem de futuras
              parcerias e da definição das condições de participação.
            </p>

            <button
              className="botao-principal"
              onClick={irParaCadastro}
            >
              Tenho interesse
            </button>

          </article>
        </div>

        <button
          className="botao-texto"
          onClick={irParaLogin}
        >
          Já tenho uma conta
        </button>

      </section>
    </main>
  );
}

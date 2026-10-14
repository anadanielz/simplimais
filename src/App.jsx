import { useState } from 'react';
import Login from './Login.jsx';
import Cadastro from './Cadastro.jsx';
import Planos from './Planos.jsx';
import {
  House, Stethoscope, CalendarDays, Store, MessageCircle,
  Star, Search, Heart, ClipboardList, Droplet, Baby,
  Thermometer, Wind, Clock3, Info, Trash2, Send, X,
  CreditCard
} from 'lucide-react';

const categorias = [
  { nome: 'Todos', descricao: 'Ver medicamentos', icone: ClipboardList },
  { nome: 'Diabetes', descricao: 'Controle da glicose', icone: Droplet },
  { nome: 'Hipertensão', descricao: 'Pressão arterial', icone: Heart },
  { nome: 'Gravidez', descricao: 'Cuidados especiais', icone: Baby },
  { nome: 'Dor e febre', descricao: 'Alívio de sintomas', icone: Thermometer },
  { nome: 'Alergias', descricao: 'Sintomas alérgicos', icone: Wind }
];

const medicamentos = [
  {
    nome: 'Paracetamol',
    categoria: 'Dor e febre',
    descricao: 'Usado para aliviar dores leves a moderadas e reduzir a febre.',
    informacao: 'O paracetamol é um analgésico e antitérmico. Leia a bula e procure orientação profissional antes de usar.'
  },
  {
    nome: 'Metformina',
    categoria: 'Diabetes',
    descricao: 'Medicamento utilizado no tratamento do diabetes tipo 2.',
    informacao: 'A metformina pode fazer parte do tratamento do diabetes tipo 2 conforme prescrição.'
  },
  {
    nome: 'Losartana',
    categoria: 'Hipertensão',
    descricao: 'Utilizada no controle da pressão arterial, conforme prescrição.',
    informacao: 'A losartana é usada para tratar pressão alta em algumas pessoas. O acompanhamento médico é importante.'
  },
  {
    nome: 'Ácido fólico',
    categoria: 'Gravidez',
    descricao: 'Vitamina importante em fases específicas da gestação.',
    informacao: 'A necessidade e a dose devem ser discutidas com um profissional de saúde.'
  },
  {
    nome: 'Loratadina',
    categoria: 'Alergias',
    descricao: 'Antialérgico usado para aliviar alguns sintomas alérgicos.',
    informacao: 'Confira a bula e consulte um profissional se tiver dúvidas.'
  }
];

const profissionais = [
  {
    nome: 'Dra. Ana Paula Martins',
    especialidade: 'Clínico geral',
    horarios: ['09:00', '10:30', '14:00', '16:00']
  },
  {
    nome: 'Dr. Rafael Costa',
    especialidade: 'Cardiologia',
    horarios: ['08:30', '11:00', '13:30', '15:30']
  },
  {
    nome: 'Dra. Mariana Souza',
    especialidade: 'Endocrinologia',
    horarios: ['09:30', '12:00', '14:30']
  }
];

const parceiros = [
  {
    nome: 'Farmácia Vida+',
    tipo: 'Farmácia',
    emoji: '💊',
    descricao: 'Medicamentos e itens de cuidado'
  },
  {
    nome: 'Farmácia Bem-Estar',
    tipo: 'Farmácia',
    emoji: '🩹',
    descricao: 'Produtos para saúde e bem-estar'
  },
  {
    nome: 'Laboratório Nova Vida',
    tipo: 'Laboratório',
    emoji: '🧪',
    descricao: 'Exames laboratoriais e coleta'
  },
  {
    nome: 'Laboratório Saúde+',
    tipo: 'Laboratório',
    emoji: '🔬',
    descricao: 'Análises clínicas demonstrativas'
  }
];

const menu = [
  { id: 'inicio', nome: 'Início', icone: House },
  { id: 'consultas', nome: 'Consultas', icone: Stethoscope },
  { id: 'medicacao', nome: 'Medicação', icone: CalendarDays },
  { id: 'parceiros', nome: 'Parceiros', icone: Store },
  { id: 'assistente', nome: 'Assistente', icone: MessageCircle },
  { id: 'favoritos', nome: 'Favoritos', icone: Star },
  { id: 'planos', nome: 'Planos', icone: CreditCard }
];


function Aviso({ children, alerta = false }) {
  return (
    <div className={`aviso ${alerta ? 'alerta' : ''}`}>
      <Info size={20} />
      <span>{children}</span>
    </div>
  );
}

export default function App() {
  const [pagina, setPagina] = useState('inicio');
  const [categoria, setCategoria] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [favoritos, setFavoritos] = useState([]);
  const [medicamentoSelecionado, setMedicamentoSelecionado] = useState(null);
  const [buscaMedicamento, setBuscaMedicamento] = useState('');

  const [filtroParceiro, setFiltroParceiro] = useState('Todos');
  const [especialidade, setEspecialidade] = useState('Todas as especialidades');
  const [dataConsulta, setDataConsulta] = useState('');
  const [horarioSelecionado, setHorarioSelecionado] = useState('');
  const [consultasAgendadas, setConsultasAgendadas] = useState([]);

  const [medicamento, setMedicamento] = useState('Metformina');
  const [dataInicial, setDataInicial] = useState('');
  const [dias, setDias] = useState([]);
  const [horario, setHorario] = useState('');
  const [lembretes, setLembretes] = useState([]);

  const [mensagem, setMensagem] = useState('');
  const [conversa, setConversa] = useState([
    {
      autor: 'bot',
      texto: 'Olá! Sou o assistente do Simpli+. Posso explicar informações gerais sobre os medicamentos cadastrados. Como posso ajudar?'
    }
  ]); 


function paginaPlanos() {
  return (
    <Planos
      irParaLogin={() => setPagina('login')}
      irParaCadastro={() => setPagina('cadastro')}
    />
  );
}

function paginaLogin() {
  return (
    <Login
      aoEntrar={() => setPagina('inicio')}
      irParaCadastro={() => setPagina('cadastro')}
      irParaPlanos={() => setPagina('planos')}
    />
  );
}

function paginaCadastro() {
  return (
    <Cadastro
      irParaLogin={() => setPagina('login')}
      irParaPlanos={() => setPagina('planos')}
    />
  );
}


  function alternarFavorito(nome) {
    setFavoritos(atual =>
      atual.includes(nome)
        ? atual.filter(item => item !== nome)
        : [...atual, nome]
    );
  }

  function Cabecalho() {
  return (
    <header className="hero">
      <div className="logo">
        <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Simpli Mais"
        className="logo-imagem"/>
      </div>
      <p>Como podemos simplificar sua vida hoje?</p>
    </header>
  );
}

const termo = busca.trim().toLowerCase();

const listaMedicamentos = medicamentos.filter(item => {
  const correspondeBusca =
    `${item.nome} ${item.descricao} ${item.categoria}`
      .toLowerCase()
      .includes(termo);

  const correspondeCategoria =
    categoria === 'Todos' || item.categoria === categoria;

  return termo
    ? correspondeBusca
    : correspondeCategoria;
});

  function adicionarLembrete(evento) {
    evento.preventDefault();

    if (!dias.length || !horario) {
      alert('Escolha os dias da semana e um horário.');
      return;
    }

    setLembretes(atual => [
      ...atual,
      {
        id: Date.now(),
        medicamento,
        dataInicial,
        dias: [...dias],
        horario
      }
    ]);

    setDias([]);
    setHorario('');
    alert('Lembrete adicionado nesta demonstração!');
  }

  function enviarMensagem(evento) {
    evento.preventDefault();

    const pergunta = mensagem.trim();
    if (!pergunta) return;

    const encontrado = medicamentos.find(item =>
      pergunta.toLowerCase().includes(item.nome.toLowerCase())
    );


const texto = pergunta.toLowerCase();
let resposta;

if (
  texto.includes('oi') ||
  texto.includes('olá') ||
  texto.includes('bom dia') ||
  texto.includes('boa tarde') ||
  texto.includes('boa noite')
) {
  resposta = 'Olá! Seja bem-vindo(a) ao Simpli+! Posso ajudar com informações sobre medicamentos, cuidados com a saúde e as funcionalidades do aplicativo. O que você gostaria de saber?';

} else if (texto.includes('gravidez') || texto.includes('grávida')) {
  resposta = 'Durante a gravidez, é importante ter cuidado com medicamentos. Não utilize nenhum medicamento sem orientação do profissional que acompanha sua gestação. Você também pode consultar a seção de medicamentos do Simpli+ para ver informações gerais.';

} else if (texto.includes('diabetes') || texto.includes('glicose')) {
  resposta = 'O diabetes exige acompanhamento contínuo. O Simpli+ disponibiliza informações gerais sobre medicamentos relacionados a essa condição, como a metformina. Para orientações sobre seu tratamento, consulte um profissional de saúde.';

} else if (
  texto.includes('pressão') ||
  texto.includes('hipertensão')
) {
  resposta = 'A hipertensão é a pressão arterial elevada. No Simpli+, você pode consultar informações gerais sobre medicamentos relacionados a essa condição, como a losartana. O tratamento deve ser acompanhado por um profissional de saúde.';

} else if (
  texto.includes('ajuda') ||
  texto.includes('aplicativo') ||
  texto.includes('funciona')
) {
  resposta = 'Estou aqui para ajudar você a utilizar o Simpli+! No aplicativo, você pode consultar informações sobre medicamentos, organizar lembretes de medicação, visualizar parceiros e explorar a área de consultas. Qual dessas funcionalidades você quer conhecer melhor?';

} else if (encontrado) {
  resposta = `O medicamento ${encontrado.nome} está cadastrado no Simpli+. ${encontrado.informacao}`;

} else {
  resposta = 'Vamos tentar entender melhor sua dúvida! Posso ajudar com informações gerais sobre medicamentos cadastrados, diabetes, hipertensão, gravidez e funcionalidades do Simpli+. Conte um pouco mais sobre o que você precisa saber.';
}


    setConversa(atual => [
      ...atual,
      { autor: 'usuario', texto: pergunta },
      { autor: 'bot', texto: resposta }
    ]);

    setMensagem('');
  }

  function inicio() {
    return (
      <>
    <label className="busca">
  <Search />
  <input
    type="text"
    placeholder="Buscar medicamentos..."
    value={busca}
    onChange={(e) => setBusca(e.target.value)}/>
    </label>

        <section>
          <h2>Categorias</h2>

          <div className="categorias">
            {categorias.map(item => {
              const Icone = item.icone;

              return (
                <button
                  key={item.nome}
                  className={`cartao-categoria ${categoria === item.nome ? 'selecionado' : ''}`}
                  onClick={() => setCategoria(item.nome)}
                >
                  <Icone />
                  <b>{item.nome}</b>
                  <span>{item.descricao}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h2>Medicamentos</h2>

          {listaMedicamentos.map(item => (
            <article className="cartao" key={item.nome}>
              <div className="linha">
                <h3>{item.nome}</h3>
                <span className="etiqueta">{item.categoria}</span>
              </div>

              <p>{item.descricao}</p>

              <div className="linha">
                <button
                  className="botao-principal"
                  onClick={() => setMedicamentoSelecionado(item)}
                >
                  Ver informações
                </button>

                <button
                  className="botao-estrela"
                  onClick={() => alternarFavorito(item.nome)}
                  aria-label="Adicionar aos favoritos"
                >
                  <Star
                    fill={favoritos.includes(item.nome) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>
            </article>
          ))}

          {!listaMedicamentos.length && (
            <p>Nenhum medicamento encontrado.</p>
          )}
        </section>

        <Aviso alerta>
          <b>Atenção:</b> informações educativas. Não use, suspenda ou altere medicamentos por conta própria.
        </Aviso>
      </>
    );
  }


function consultas() {
  const lista = profissionais.filter(item =>
    especialidade === 'Todas as especialidades' ||
    item.especialidade === especialidade
  );

  function marcarConsulta(profissional, horario) {
    if (!dataConsulta) {
      alert('Escolha a data da consulta.');
      return;
    }

    const jaExiste = consultasAgendadas.some(item =>
      item.data === dataConsulta &&
      item.horario === horario &&
      item.profissional === profissional.nome
    );

    if (jaExiste) {
      alert('Essa consulta já foi marcada.');
      return;
    }

    setConsultasAgendadas(atual => [
      ...atual,
      {
        id: Date.now(),
        profissional: profissional.nome,
        especialidade: profissional.especialidade,
        data: dataConsulta,
        horario
      }
    ]);

    alert('Consulta marcada com sucesso!');
    setHorarioSelecionado('');
  }

  return (
    <section>
      <h1>Consultas online</h1>

      <div className="painel">
        <label>
          Especialidade
          <select
            value={especialidade}
            onChange={evento => setEspecialidade(evento.target.value)}
          >
            <option>Todas as especialidades</option>
            {profissionais.map(item => (
              <option key={item.especialidade}>
                {item.especialidade}
              </option>
            ))}
          </select>
        </label>

        <label>
          Data da consulta
          <input
            type="date"
            min={new Date().toLocaleDateString('en-CA')}
            value={dataConsulta}
            onChange={evento => {
              setDataConsulta(evento.target.value);
              setHorarioSelecionado('');
            }}
            required
          />
        </label>

        <Aviso>
          Escolha a data e marque um horário disponível. Esta é uma demonstração.
        </Aviso>
      </div>

      <h2>Profissionais disponíveis</h2>

      {lista.map(item => (
        <article className="cartao" key={item.nome}>
          <h3>{item.nome}</h3>
          <span className="etiqueta">{item.especialidade}</span>
          <p>Atendimento online demonstrativo</p>
          <h3>Horários disponíveis</h3>

          <div className="horarios">
            {item.horarios.map(hora => (
              <button
                type="button"
                key={hora}
                className="botao-contorno"
                onClick={() =>
                  setHorarioSelecionado(`${item.nome}|${hora}`)
                }
              >
                <Clock3 size={16} /> {hora}
              </button>
            ))}
          </div>

          {horarioSelecionado.startsWith(`${item.nome}|`) && (
            <button
              type="button"
              className="botao-principal largura-total"
              onClick={() =>
                marcarConsulta(
                  item,
                  horarioSelecionado.split('|')[1]
                )
              }
            >
              Marcar consulta
            </button>
          )}
        </article>
      ))}

      <h2>Consultas agendadas</h2>

      {consultasAgendadas.map(item => (
        <article className="cartao" key={item.id}>
          <h3>{item.profissional}</h3>
          <p>{item.especialidade}</p>
          <p>
            Data: {item.data.split('-').reverse().join('/')}
          </p>
          <p>Horário: {item.horario}</p>
          <span className="etiqueta">Agendamento demonstrativo</span>

          <button
            type="button"
            className="botao-contorno"
            onClick={() =>
              setConsultasAgendadas(atual =>
                atual.filter(consulta => consulta.id !== item.id)
              )
            }
          >
            <Trash2 size={16} /> Cancelar consulta
          </button>
        </article>
      ))}

      {consultasAgendadas.length === 0 && (
        <p className="vazio">
          Você ainda não marcou nenhuma consulta.
        </p>
      )}
    </section>
  );
}

  function medicacao() {
    const medicamentosFiltrados = medicamentos.filter(item =>
    item.nome.toLowerCase().includes(buscaMedicamento.toLowerCase())
);
    return (
      <section>
        <h1>📅 Minha medicação</h1>

        <form className="painel" onSubmit={adicionarLembrete}>
          <label>
            Medicamento
            <select
              value={buscaMedicamento}
              onChange={evento => setMedicamento(evento.target.value)}
            >
              {medicamentosFiltrados.map(item => (
                <option key={item.nome}>{item.nome}</option>
              ))}
            </select>
          </label>

          <label>
            Data inicial
            <input
              type="date"
              value={dataInicial}
              onChange={evento => setDataInicial(evento.target.value)}
              required
            />
          </label>

          <b>Dias da semana</b>

          <div className="dias">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(dia => (
              <button
                type="button"
                key={dia}
                className={`dia ${dias.includes(dia) ? 'ativo' : ''}`}
                onClick={() => setDias(atual =>
                  atual.includes(dia)
                    ? atual.filter(item => item !== dia)
                    : [...atual, dia]
                )}
              >
                {dia}
              </button>
            ))}
          </div>

          <label>
            Horário
            <input
              type="time"
              value={horario}
              onChange={evento => setHorario(evento.target.value)}
              required
            />
          </label>

          <button className="botao-principal largura-total">
            ＋ Adicionar lembrete
          </button>
        </form>

        <h2>Lembretes cadastrados</h2>

        {lembretes.map(item => (
          <article className="cartao linha" key={item.id}>
            <div>
              <h3>{item.medicamento}</h3>
              <p>{item.dias.join(', ')} • {item.horario}</p>
              <small>Início: {item.dataInicial}</small>
            </div>

            <button
              className="botao-estrela"
              onClick={() => setLembretes(atual =>
                atual.filter(lembrete => lembrete.id !== item.id)
              )}
            >
              <Trash2 />
            </button>
          </article>
        ))}

        {!lembretes.length && (
          <p className="vazio">Seus lembretes aparecerão aqui.</p>
        )}

        <Aviso alerta>
          O lembrete serve para organização pessoal e não substitui uma prescrição.
        </Aviso>
      </section>
    );
  }

  function paginaParceiros() {
    const lista = parceiros.filter(item =>
      filtroParceiro === 'Todos' || item.tipo === filtroParceiro
    );

    return (
      <section>
        <h1>🏪 Parceiros</h1>

        <div className="filtros">
          {['Todos', 'Farmácia', 'Laboratório', 'Premium'].map(filtro => ( 
            <button
              key={filtro}
              className={`chip ${filtroParceiro === filtro ? 'ativo' : ''}`}
              onClick={() => setFiltroParceiro(filtro)}
            >
              {filtro === 'Farmácia' ? '💊 Farmácias' :
              filtro === 'Laboratório' ? '🧪 Laboratórios' :
              filtro === 'Premium' ? '⭐ Premium' : 'Todos'}
            </button>
          ))}
        </div>

{filtroParceiro === 'Premium' && (
  <section className="cartao">
    <span className="etiqueta">⭐ Benefícios Premium</span>

    <h2>Vantagens para cuidar de você</h2>

    <p>
      Estamos planejando benefícios exclusivos para assinantes
      do Simpli+ Premium.
    </p>

    <article className="cartao">
      <h3>💊 Descontos em farmácias</h3>
      <p>
        Futuras parcerias poderão oferecer descontos e cupons
        especiais em medicamentos e produtos de saúde.
      </p>
      <span className="etiqueta">Em desenvolvimento</span>
    </article>

    <article className="cartao">
      <h3>🧪 Benefícios em serviços de saúde</h3>
      <p>
        Possíveis condições especiais em laboratórios e
        estabelecimentos parceiros.
      </p>
      <span className="etiqueta">Em desenvolvimento</span>
    </article>

    <p>
      Os benefícios estarão sujeitos à confirmação de parcerias
      e às condições definidas por cada estabelecimento.
    </p>

    <button
      className="botao-principal largura-total"
      onClick={() => setPagina('planos')}
    >
      Conhecer o plano Premium
    </button>
  </section>
)}

      {filtroParceiro !== 'Premium' && lista.map(item => (
          <article className="cartao" key={item.nome}>
            <div className="linha">
              <span className="emoji">{item.emoji}</span>
              <span className="etiqueta">{item.tipo}</span>
            </div>

            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <span className="etiqueta">📍 Localização ilustrativa</span>

            <div className="linha botoes-parceiro">
              <button
                className="botao-suave"
                onClick={() => setMedicamentoSelecionado({
                  nome: item.nome,
                  categoria: item.tipo,
                  informacao: `${item.descricao}. Parceiro fictício usado para demonstrar a interface.`
                })}
              >
                Ver detalhes
              </button>

              <button
                className="botao-principal"
                onClick={() => alert('Parceiro demonstrativo: não há canal real de contato.')}
              >
                Entrar em contato
              </button>
            </div>
          </article>
        ))}
      </section>
    );
  }

  function assistente() {
    return (
      <section>
        <h1>🤖 Assistente</h1>

        <div className="filtros">
          {['Metformina', 'Gravidez', 'Hipertensão'].map(assunto => (
            <button
              className="chip"
              key={assunto}
              onClick={() => setMensagem(assunto)}
            >
              {assunto}
            </button>
          ))}
        </div>

        <div className="conversa">
          {conversa.map((item, indice) => (
            <div
              key={indice}
              className={`mensagem ${item.autor}`}
            >
              {item.texto}
            </div>
          ))}

          <form className="enviar" onSubmit={enviarMensagem}>
            <input
              value={mensagem}
              onChange={evento => setMensagem(evento.target.value)}
              placeholder="Digite sua pergunta..."
            />

            <button className="botao-principal" aria-label="Enviar mensagem">
              <Send />
            </button>
          </form>
        </div>

        <Aviso alerta>
          O assistente é demonstrativo e não substitui avaliação médica ou farmacêutica.
        </Aviso>
      </section>
    );
  }

  function paginaFavoritos() {
    const lista = medicamentos.filter(item =>
      favoritos.includes(item.nome)
    );

    return (
      <section>
        <h1>⭐ Favoritos</h1>

        {lista.map(item => (
          <article className="cartao" key={item.nome}>
            <div className="linha">
              <h3>{item.nome}</h3>
              <button
                className="botao-estrela"
                onClick={() => alternarFavorito(item.nome)}
              >
                <Star fill="currentColor" />
              </button>
            </div>

            <span className="etiqueta">{item.categoria}</span>
            <p>{item.descricao}</p>

            <button
              className="botao-principal"
              onClick={() => setMedicamentoSelecionado(item)}
            >
              Ver informações
            </button>
          </article>
        ))}

        {!lista.length && (
          <p className="vazio">
            ⭐ Área preparada para seus medicamentos favoritos. Use a estrela na página Início.
          </p>
        )}
      </section>
    );
  }

  const paginas = {
    inicio,
    consultas,
    medicacao,
    parceiros: paginaParceiros,
    assistente,
    favoritos: paginaFavoritos,
    planos: paginaPlanos,
    login: paginaLogin,
    cadastro: paginaCadastro
  };

  return (
    <div className="aplicativo">
      <Cabecalho />

      <main>
        {paginas[pagina]()}
      </main>

      <nav className="menu-inferior">
        {menu.map(item => {
          const Icone = item.icone;

          return (
            <button
              key={item.id}
              className={pagina === item.id ? 'ativo' : ''}
              onClick={() => setPagina(item.id)}
            >
              <Icone />
              <span>{item.nome}</span>
            </button>
          );
        })}
      </nav>

      {medicamentoSelecionado && (
        <div className="fundo-modal" onClick={() => setMedicamentoSelecionado(null)}>
          <div className="modal" onClick={evento => evento.stopPropagation()}>
            <button
              className="fechar-modal"
              onClick={() => setMedicamentoSelecionado(null)}
            >
              <X />
            </button>

            <h2>{medicamentoSelecionado.nome}</h2>
            <p>
              {medicamentoSelecionado.informacao ||
                medicamentoSelecionado.descricao}
            </p>

            <Aviso alerta>
              Informação educativa. Confira a bula e procure orientação profissional.
            </Aviso>

            {medicamentoSelecionado.categoria && (
              <button
                className="botao-principal largura-total"
                onClick={() => alternarFavorito(medicamentoSelecionado.nome)}
              >
                {favoritos.includes(medicamentoSelecionado.nome)
                  ? '★ Remover dos favoritos'
                  : '☆ Adicionar aos favoritos'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
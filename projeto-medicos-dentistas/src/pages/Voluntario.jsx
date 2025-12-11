import '../styles/voluntario.scss'
function Voluntario() {
  return (
    <>
      <section className='seja-volun'>
        <div className="titulo-volun">
          <h1>Seja Voluntario</h1>
          <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
        </div>
        <div className="cards-volun">
          <div className="card-volun">
            <h2>Impacto Direto</h2>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
          </div>
          <div className="card-volun">
            <h2>Crescimento Pessoal</h2>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
          </div>
          <div className="card-volun">
            <h2>Comunidade</h2>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
          </div>
        </div>
      </section>

      <section className='fundo-verde'>
        <div className='form-volun'>
            <h3>Inscrição para Voluntários</h3>
            <form action="">
              <label htmlFor="">Dados Pessoais</label>
              <div className="form-group">
                <input type="text"  placeholder='Seu Nome *' className='metade'/>
                <input type="text"  placeholder='Seu Email *' className='metade'/>
                <input type="text"  placeholder='Seu Telefone *'/>
              </div>
              <label htmlFor="">Mensagem Adicional</label>
              <textarea name="" id="" className='textarea' placeholder='Conte-nos porque você quer ser voluntario...'></textarea>
              <p>Entraremos em contato para mais informações</p>
              <div className="container-botao"><button>Enviar Inscrição</button></div>
            </form>
        </div>
      </section>
    </>
  )
}

export default Voluntario
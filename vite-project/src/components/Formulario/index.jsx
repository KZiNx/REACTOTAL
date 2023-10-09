import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
     <form>
        <h2>Preencha os seus dados para a compra</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="sobrenome" placeholder="Digite o seu Sobrenome" />
     </form>
      <button>Cadastrar</button>
    </section>
  );
};
export default Formulario;
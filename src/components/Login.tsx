import IntroImage from "./IntroImage";

function Login() {
  return (
    <div className="intro-page login">
      <IntroImage description="dining view" src="src/assets/dining-view.png" />
      <div className="intro-text">
        <p>Hola, somos Dennis y Andy.
          Estamos muy felices de formar nuestro hogar y queremos compartirlo con nuestros amigos mas cercanos
        </p>
      </div>
      <div className="cta">
        <button type="button">Coloca tu nombre para iniciar</button>
      </div>
    </div>
  )
}

export default Login;

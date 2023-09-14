import IntroImage from './IntroImage';
import { signInWithGoogle } from '../helpers/auth_helpers';
import imageUrl from '../assets/dining-view.png';

function Login() {
  const login = async () => {
    const result = await signInWithGoogle();
    if (result?.email) {
      location.reload();
    }
  }

  return (
    <div className="intro-page login">
      <IntroImage description="dining view" src={imageUrl} />
      <div className="intro-text">
        <p>Hola, somos Dennis y Andy.
          Estamos muy felices de formar nuestro hogar y queremos compartirlo con nuestros amigos mas cercanos
        </p>
      </div>
      <div className="cta">
        <button type="button" onClick={() => login()}>Inicia sesion para continuar</button>
      </div>
    </div>
  )
}

export default Login;

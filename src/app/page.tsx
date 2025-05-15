import './globals.css';

function Login() {
  
  return (

    <div className="flex flex-col h-screen justify-center items-center gap-10 bg-violet-300">
     
      <h2 className="text-3xl font-bold text-black">Bienvenidos!</h2>

      <form 
      className="form-login bg-violet-500
      flex flex-col items-center justify-center w-1/3 p-8 gap-8 rounded-4xl"
      action="">

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Email</label>
          <input id="name" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Contraseña</label>
          <input id="name" type="password" />
        </div>

        <div className="flex flex-col gap-2">
          <button
          className='p-4 border-2 border-white rounded-xl cursor-pointer hover:bg-violet-700 '
          type="submit">Ingresar</button>
        </div>

        <a href="">¿Olvidaste tu contraseña?</a>

      </form>

    </div>

  );
}

export default Login;
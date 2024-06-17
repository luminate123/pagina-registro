import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';


const buttonStyle = {
  borderRadius : "5px"
}
const fonts = {
  '@import': "@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');",
  fontFamily: "Merriweather",
};

const backColor1 = {
  backgroundColor : "#12377B"
}

const backColor2 = {
  backgroundColor : "E6AD09"
}

export default function Home() {
  return (
    <main className="grid grid-cols-2">
      <div className="flex justify-center items-center h-screen" style={backColor1}>
        <div className="flex flex-col items-center justify-center mx-16">
          <img src="/logoUNT.png" alt="Logo" width={400} height={400} />
          <h1 className='text-4xl text-center text-white' style={fonts}>UNIVERSIDAD NACIONAL DE TRUJILLO</h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen bg-slate-200">
        <div className="flex flex-col items-center justify-center">
          <div className='Titule flex flex-col items-center justify-center mb-5 font-serif'>
            <p className='text-2xl '>Bienvenido Ex-Alumnos</p>
            <div className='subtitule'>
              Ingrese sus datos para acceder a la plataforma
            </div>
          </div>
          <div className='username'>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <div className="flex  rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 w-96  border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 max-md:w-48 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
          <div className='contraseña mt-8'>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block flex-1 w-96 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 max-md:w-48 sm:text-sm sm:leading-6"
                  placeholder="********"
                />
              </div>
            </div>
          </div>
          <div className='buttons mt-8 flex gap-2 w-full'>
            <Button as={Link} href='/' className='bg-blue-700 text-white w-1/2 ' style={{... buttonStyle, ... backColor1}}>Ingresar</Button>
            <Button as={Link} href='/Registro' className='bg-yellow-600 text-white w-1/2 ' style={{...buttonStyle,...backColor2}}>Registrarme</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client"
import React from "react";
import { Input } from "@nextui-org/react";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { RadioGroup, Radio } from "@nextui-org/react";

function RegistroPage() {
  return (
    <>
      <main className='bg-blue-800 h-screen flex justify-center p-8'>
        <div className='bg-white w-3/4 rounded-3xl pl-16 pt-11 pb-11 overflow-auto'>
          <h1 className='text-xl'>
            Registrarse
          </h1>
          <p className='text-slate-950/50'>
            Ingrese sus datos personales
          </p>
          <div className='datos pt-9 flex flex-wrap gap-3'>
            <Input
              type="number"
              label="DNI"
              defaultValue=""
              description="Ingrese su número de DNI"
              className="max-w-xs"
            />
            <Input
              type="text"
              label="Nombres"
              defaultValue=""
              className="max-w-xs"
            />
            <Input
              type="text"
              label="Apellido Materno"
              defaultValue=""
              className="max-w-xs"
            />
            <Input
              type="text"
              label="Apellido Paterno"
              defaultValue=""
              className="max-w-xs"
            />
            <DateInput label={"Birth date"} placeholderValue={new CalendarDate(1995, 11, 6)} className="max-w-xs" />

            <RadioGroup
              label="Género"
              orientation="horizontal"
            >
              <Radio value="Masculino">Masculino</Radio>
              <Radio value="Femenino">Femenino</Radio>
            </RadioGroup>

            <Input
              type="text"
              label="Correo Electrónico"
              defaultValue=""
              className="max-w-xs pt-3"
            />
            <Input
              type="number"
              label="Número de Celular"
              defaultValue=""
              className="max-w-xs pt-3"
            />
          </div>

          <p className='text-slate-950/50 pt-9'>
            Lugar de residencia / domicilio
          </p>
          <div className='datosResidencia pt-5 flex flex-wrap gap-3'>
            <Input
              type="number"
              label="Codigo Postal"
              defaultValue=""
              className="max-w-xs"
            />
            <Input
              type="text"
              label="Pais"
              defaultValue=""
              className="max-w-xs"
            />
            <Input
              type="text"
              label="Ciudad"
              defaultValue=""
              className="max-w-xs"
            />
          </div>

        </div>
      </main>
    </>
  )
}

export default RegistroPage
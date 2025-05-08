import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../icons/Logo";

const SignInSignUp = ({ onBackClick }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="bg-primary-1500 w-full py-12">
      {}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {}
        <div className="relative">
          {}
          <div className="from-primary-500/50 animate-pulse-slow animation-delay-2000 absolute -top-20 -left-20 h-72 w-72 rounded-full bg-radial to-transparent opacity-70 blur-3xl"></div>
          <div className="from-primary-500/50 animate-pulse-slow animation-delay-2000 absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-radial to-transparent opacity-70 blur-3xl"></div>

          {}
          <div className="bg-primary-1300/40 border-primary-1400/50 animate-fade-in @container relative top-10 mx-auto w-full max-w-md rounded-2xl border p-8 shadow-lg backdrop-blur-xl">
            {}
            {onBackClick && (
              <button
                onClick={onBackClick}
                className="text-primary-100 hover:text-primary-500 absolute top-4 left-4 z-10 cursor-pointer"
                aria-label="Voltar"
              >
                ←
              </button>
            )}

            <div className="bg-gradient-t-br from-primary-1500/20 absolute inset-0 rounded-2xl to-transparent"></div>

            <div className="relative">
              <Logo
                className="stroke-primary-500 mx-auto mb-4 h-24 w-24"
                alt="Ícone do NoteFlow"
                width={5}
              />
              <h2 className="text-primary-500 mb-2 text-center text-3xl font-extrabold tracking-tight">
                {isSignUp ? "Criar Conta" : "Bem-vindo de volta!"}
              </h2>
              <p className="text-primary-100 mb-8 text-center">
                {isSignUp
                  ? "Entre para nossa comunidade hoje"
                  : "Entre na sua conta"}
              </p>

              <form className="perspective-1000 mt-8 space-y-5">
                {isSignUp && (
                  <>
                    <div className="group">
                      <input
                        type="text"
                        placeholder="Nome"
                        className="bg-primary-100 border-primary-1400/50 text-primary-1500 placeholder-primary-700 focus:ring-primary-500/50 w-full rounded-xl border p-4 transition-all outline-none focus:border-transparent focus:ring-2"
                      />
                    </div>
                    <div className="group">
                      <input
                        type="phone"
                        placeholder="Telefone"
                        className="bg-primary-100 border-primary-1400/50 text-primary-1500 placeholder-primary-700 focus:ring-primary-500/50 w-full rounded-xl border p-4 transition-all outline-none focus:border-transparent focus:ring-2"
                      />
                    </div>
                  </>
                )}

                <div className="group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-primary-100 border-primary-1400/50 text-primary-1500 placeholder-primary-700 focus:ring-primary-500/50 w-full rounded-xl border p-4 transition-all outline-none focus:border-transparent focus:ring-2"
                  />
                </div>

                <div className="group">
                  <input
                    type="password"
                    placeholder="Senha"
                    className="bg-primary-100 border-primary-1400/50 text-primary-1500 placeholder-primary-700 focus:ring-primary-500/50 w-full rounded-xl border p-4 transition-all outline-none focus:border-transparent focus:ring-2"
                  />
                </div>

                <button className="cursor-pointer group from-primary-500 to-primary-600 text-primary-1300 hover:shadow-primary-500/40 w-full transform overflow-hidden rounded-xl bg-gradient-to-r p-4 font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]">
                  <span className="relative z-10">
                    {isSignUp ? "Criar Conta" : "Entrar"}
                  </span>
                  <span className="from-primary-500 to-primary-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100"></span>
                </button>
              </form>

              <p className="text-primary-100/80 mt-8 text-center ">
                {isSignUp ? "Já tem uma conta?" : "Não tem uma conta ainda?"}
                <span
                  className="text-primary-500 hover:text-primary-400 ml-1 cursor-pointer font-bold transition-colors"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Entrar" : "Criar"}
                </span>
              </p>

              <div className="border-primary-1400/30 mt-3 border-t pt-6">
                <p className="text-primary-100/70 mb-4 text-center text-sm">
                  Ou continue com
                </p>
                <div className="flex justify-center space-x-6 ">
                  <button className="cursor-pointer bg-primary-1400 hover:bg-primary-1300 text-primary-100 hover:text-primary-500 rounded-lg p-3 transition-colors">
                    <i className="bx bxl-google text-2xl"></i>
                  </button>
                  <button className="cursor-pointer bg-primary-1400 hover:bg-primary-1300 text-primary-100 hover:text-primary-500 rounded-lg p-3 transition-colors">
                    <i className="bx bxl-linkedin text-2xl"></i>
                  </button>
                  <button className="cursor-pointer bg-primary-1400 hover:bg-primary-1300 text-primary-100 hover:text-primary-500 rounded-lg p-3 transition-colors">
                    <i className="bx bxl-facebook text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;

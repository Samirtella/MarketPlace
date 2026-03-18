import {
  ChevronRightIcon,
  EyeClosedIcon,
  LockIcon,
  MailIcon,
} from "lucide-react";
import React from "react";
import "../app.css";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "~/components/ui/input-group";
import { Label } from "~/components/ui/label";
import { Checkbox } from "~/components/ui/checkbox";
import { Separator } from "~/components/ui/separator";

const Login = () => {
  return (
    <div>
      <header className="bg-[#FBFFFC] shadow relative p-5">
        <div className="flex justify-between ">
          <h1 className="text-[#1DC956] text-2xl font-bold pl-30 font-sans">
            AgriConnect
          </h1>
          <div className="flex gap-4 pr-30">
            <Button variant="ghost" className="cursor-pointer ">
              {" "}
              Se connecter{" "}
            </Button>
            <Button
              variant="default"
              className="bg-[#1DC956] text-black cursor-pointer px-6 "
            >
              S'incrire
            </Button>
          </div>
        </div>
      </header>
      <div>
        <div className="bg-[#F6FEF8] h-80 text-center bg-fixed ">
          <div className="p-15 space-y-3">
            <h1 className="text-center text-3xl font-bold font-sans  ">
              Bon retour parmi nous
            </h1>
            <p style={{ fontFamily: "Open Sans" }} className=" text-gray-500">
              Accédez à votre compte pour gérer vos produits ou vos <br />{" "}
              commandes.
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-white w-120 h-auto p-10 -mt-32.5 absolute rounded-xl shadow space-y-2">
            <div className="space-y-2">
              <h1 className="text-xl font-sans font-semibold">Se connecter</h1>
              <p
                style={{ fontFamily: "Open Sans" }}
                className="text-gray-500 text-sm"
              >
                Entrez vos identifiants ci-dessous pour continuer
              </p>
            </div>
            <div className="space-y-2 mt-4">
              <Label className="text-gray-500">E-mail</Label>
              <InputGroup className="h-10">
                <InputGroupInput placeholder="nom@email.com" />
                <InputGroupAddon align="inline-start">
                  <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between">
                <Label className="text-gray-500">Mot de passe</Label>
                <h1 className="text-[#1DC956] cursor-pointer">
                  Mot de passe oublié ?
                </h1>
              </div>
              <InputGroup className="h-10">
                <InputGroupInput placeholder="*******" />
                <InputGroupAddon align="inline-start">
                  <LockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <EyeClosedIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="p-1 flex items-center gap-2">
              <Checkbox className="cursor-pointer" />
              <p className="text-gray-500">Se souvenir de moi</p>
            </div>
            <Button
              variant="default"
              className="bg-[#1DC956] cursor-pointer w-full h-10 text-black"
            >
              Se connecter
              <ChevronRightIcon />
            </Button>
            <div className="flex mt-5 items-center gap-2 justify-center">
              <Separator className="" style={{ width: "25%" }} />
              <p
                style={{ fontFamily: "Open Sans" }}
                className="text-sm text-gray-500"
              >
                OU CONTINUER AVEC
              </p>
              <Separator className="" style={{ width: "25%" }} />
            </div>
            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="ghost"
                className="border border-gray-300 px-10 py-4 gap-2 cursor-pointer"
              >
                <img src="../images/logo.jpg" alt="" className="h-5 w-5" />
                Google
              </Button>
              <Button
                variant="ghost"
                className="border border-gray-300 px-10 py-4 gap-2 cursor-pointer"
              >
                <img src="../images/face.png" alt="" className="h-5 w-5" />
                Facebook
              </Button>
            </div>
            <Separator className="mt-6 " />
            <p className="text-center w-full p-2 text-gray-500">
              Vous n'avez pas de compte ?{" "}
              <span className="text-[#1DC956] cursor-pointer">
                S'inscrire
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

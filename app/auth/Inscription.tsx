import {
  ArrowRight,
  Building2,
  EyeClosed,
  Facebook,
  LockIcon,
  MailIcon,
  MapIcon,
  MapPin,
  PackageCheck,
  PhoneCallIcon,
  Search,
  ShieldCheckIcon,
  Store,
  User,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "~/components/ui/input-group";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";

const Inscription = () => {
  const navigate = useNavigate ()
  return (
    <div>
      <div className="flex">
        {/* Session de gauche */}
        <div className="bg-[#EDFDF1] w-250 h-290 shadow ">
          <div className="flex justify-center p-15 items-center">
            <img src="../images/Logo_agricole.png" alt="" className="w-25 h-25 " />
            <h1 className="text-[#1DC956] text-2xl font-sans font-bold  ">
              AgriConnect
            </h1>
          </div>
          <div className="ml-10">
              <p className="text-4xl font-extrabold font-sans ">
                Rejoignez le plus grand <br /> réseau d'acheteurs <br />{" "}
                professionnels.
              </p>
              <p className="text-gray-500 font-sans mt-10 text-xl">
                Simplifiez vos approvisionnement, gérez vos <br /> commandes et trouvez les meilleurs <br />
                fournisseurs en quelques clics.
              </p>
              <div className="p-10 mt-4">
                <div className="flex gap-4 ">
                  <div className="bg-[#D8F7E1] w-12 h-12 rounded-sm flex justify-center">
                    <Search className="text-[#29CC5F] text-center mt-2 h-7 w-7 " />
                  </div>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "Open Sans" }}> <span className="font-sans font-semibold text-black text-xl">Rechercher des produits</span> <br /> Accédez à un catalogue de plus de 50,000 <br /> références vérifiées avec des prix négociés pour <br /> votre secteur. </p>
                </div>
                <div className="flex gap-4 mt-20">
                  <div className="bg-[#D8F7E1] w-12 h-12 rounded-sm flex justify-center">
                    <Store className="text-[#29CC5F] text-center mt-2 h-7 w-7 " />
                  </div>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "Open Sans" }}> <span className="font-sans font-semibold text-black text-xl">Voir les vendeurs</span> <br /> Consultez les profils détaillés des grossistes, <br /> rcommercants et producteurs locaux en toute <br /> transparence. </p>
                </div>
                <div className="flex gap-4 mt-20">
                  <div className="bg-[#D8F7E1] w-12 h-12 rounded-sm flex justify-center">
                    <PackageCheck className="text-[#29CC5F] text-center mt-2 h-7 w-7 " />
                  </div>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "Open Sans" }}> <span className="font-sans font-semibold text-black text-xl">Passer des commandes</span> <br /> Passez vos commandes directement auprès des fournisseurs, <br /> gérez vos achats et suivez vos transactions en toute <br /> simplicité. </p>
                </div>
              </div>
          </div>
        </div>
        {/* Session de droite */}
        <div className="w-full ">
          {/* En tête */}
          <header className="  ">
            <div className="flex justify-end items-center gap-6 p-6 ">
              <span className="text-sm">Déjà un compte ?</span>
              <Button variant="ghost" className="text-[#21CA59] cursor-pointer hover:bg-[#1DC956] hover:text-black" onClick={()=>navigate ('../connexion')}>
                Se connecter
              </Button>
            </div>
          </header>
          {/* Réseau sociaux */}
          <div className="flex justify-center-safe">
            <div className="p-18  space-y-2 ">
            <h1 className="text-2xl font-semibold font-sans">
              
              Créer un compte utilisateur
            </h1>
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "Open Sans" }}
            >
              Inscrivez-vous gratuitement pour commencer à commander
            </p>
            <div className="flex  mt-12 gap-4">
              <Button
                variant="ghost"
                className="border border-gray-300 px-50 py-6 gap-2 cursor-pointer"
              >
                <img src="../images/logo.jpg" alt="" className="h-5 w-5" />
                Google
              </Button>
              <Button
                variant="ghost"
                className="border border-gray-300 px-50 py-6 gap-2 cursor-pointer"
              >
                <Facebook className="text-[#1877F2]" />
                Facebook
              </Button>
            </div>

            <div className="flex mt-8 items-center gap-2 ">
              <Separator className="" style={{ width: "38%" }} />
              <p style={{ fontFamily: "Open Sans" }} className="text-sm ">
                OU INSCRIVEZ VOUS PAR EMAIL
              </p>
              <Separator className="" style={{ width: "38%" }} />
            </div>

            {/* Formulaire */}
            <div className="mt-7">
              <div className="flex gap-8">
                <div className="space-y-3">
                  <Label> Nom complet </Label>

                  <InputGroup className="h-10 w-118">
                    <InputGroupInput placeholder="Ex : Jean Dupont" />
                    <InputGroupAddon align="inline-start">
                      <User className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="space-y-3">
                  <Label> Type d'utilisateur </Label>

                  <Select>
                    <SelectTrigger className="w-118 py-5">
                      <SelectValue placeholder="Choisissez votre rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Vendeur">Vendeur</SelectItem>
                      <SelectItem value="Acheteur">Acheteur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <Label> Nom de l'entreprise (Optionnel) </Label>

                <InputGroup className="h-10 w-244">
                  <InputGroupInput placeholder="Nom de votre société" />
                  <InputGroupAddon align="inline-start">
                    <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="flex gap-8 mt-7">
                <div className="space-y-3">
                  <Label> Adresse e-mail </Label>

                  <InputGroup className="h-10 w-118">
                    <InputGroupInput placeholder="exemple@gmail.com" />
                    <InputGroupAddon align="inline-start">
                      <LockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <MailIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="space-y-3">
                  <Label> Téléphone </Label>

                  <InputGroup className="h-10 w-118">
                    <InputGroupInput placeholder="+229 67 00 00 00" />
                    <InputGroupAddon align="inline-start">
                      <PhoneCallIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>

              <div className="space-y-3 mt-7">
                <Label> Ville/Région </Label>

                <InputGroup className="h-10 w-244">
                  <InputGroupInput placeholder="Ex : Bénin, Cotonou" />
                  <InputGroupAddon align="inline-start">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <div className="flex gap-8 mt-7">
                <div className="space-y-3">
                  <Label> Mot de passe </Label>

                  <InputGroup className="h-10 w-118">
                    <InputGroupInput placeholder="******" />
                    <InputGroupAddon align="inline-start">
                      <LockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <EyeClosed className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="space-y-3">
                  <Label> Confirmer le mot de passe </Label>

                  <InputGroup className="h-10 w-118">
                    <InputGroupInput placeholder="******" />
                    <InputGroupAddon align="inline-start">
                      <LockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </InputGroupAddon>
                  </InputGroup>
                </div>
              </div>

              <div className="p-1 flex items-center gap-3 mt-5">
                <Checkbox className="cursor-pointer" />
                <p className="text-sm ">
                  J'accepte les{" "}
                  <span className="text-[#21CA59]">
                    conditions générales d'utilisation
                  </span>{" "}
                  et la{" "}
                  <span className="text-[#21CA59]">
                    politique de confidentialité
                  </span>
                </p>
              </div>

              <Button
                variant="default"
                className="bg-[#1DC956] hover:bg-green-600 cursor-pointer w-244 h-10 text-black mt-10 font-semibold"
              >
                S'inscrire
                <ArrowRight />
              </Button>

              <div className="bg-[#FAFBFB] mt-5 w-244 rounded-xl p-4 flex justify-center items-center gap-4 shadow">
                <ShieldCheckIcon className="text-[#1DC956] w-10 h-10 " />
                <p className="" style={{ fontFamily: "Open Sans" }} >Note sur la confidentialité : <span className="text-gray-500">Nous sécurisons vos données avec un chiffrement AES-256. Vos <br /> informations personnelles ne sont jamais partagées avec des tiers sans votre consentement explicite.</span></p>
              </div>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Inscription;

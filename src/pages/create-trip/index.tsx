import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  Plus,
  User,
  Car,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InvetGuestModal } from "./invet-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "edson@youngdev.ao",
    "joao@youngdev.ao",
  ]);
  const [isConformTripModalOpen, setConformTripModalOpen] = useState(false);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function openIsGuestModalOpen() {
    setIsGuestModalOpen(true);
  }
  function closeIsGuestModalOpen() {
    setIsGuestModalOpen(false);
  }

  function openCornformTripModal() {
    setConformTripModalOpen(true);
  }
  function closeConformTripModal() {
    setConformTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    // console.log(email);

    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      return;
    }
    setEmailsToInvite([
      ...emailsToInvite, //ExpreidOpereitor
      email,
    ]);

    event.currentTarget.reset();
  }

  function removeEmailFromEnvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );
    setEmailsToInvite(newEmailList);
  }

  function createTrip() {
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Logo SVG plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>
            {isGuestInputOpen ? (
              <button
                onClick={closeGuestInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 ml-8"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={openGuestInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ml-8"
              >
                Continuar
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            )}
          </div>
          {isGuestInputOpen ? (
            <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center gap-3">
              <button
                type="button"
                onClick={openIsGuestModalOpen}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="text-zinc-100 text-lg flex-1 text-left">
                    {emailsToInvite.length} Pessao(s) convidada(s)
                  </span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1 text-left">
                    Quem estará na viagem
                  </span>
                )}
              </button>
              <button
                onClick={openCornformTripModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 ml-8"
              >
                Confirmar viagem
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </div>
          ) : null}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termoas de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            politicas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestModalOpen && (
        <InvetGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeIsGuestModalOpen={closeIsGuestModalOpen}
          removeEmailFromEnvites={removeEmailFromEnvites}
        />
      )}

      {isConformTripModalOpen && (
        <ConfirmTripModal
          addNewEmailToInvite={addNewEmailToInvite}
          closeConformTripModal={closeConformTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}

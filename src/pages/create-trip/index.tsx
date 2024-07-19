import { ArrowRight, UserRoundPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InvetGuestModal } from "./invet-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndStepsDate } from "./steps/destination-and-steps-date";
import { InviteGuestStep } from "./steps/inveti-guests-step";

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

  function createTrip(event: FormEvent<HTMLElement>) {
    event.preventDefault();
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
          <DestinationAndStepsDate
            closeGuestInput={closeGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
          />
          {isGuestInputOpen ? (
            <InviteGuestStep
              emailsToInvite={emailsToInvite}
              openCornformTripModal={openCornformTripModal}
              openIsGuestModalOpen={openIsGuestModalOpen}
            />
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
          closeConformTripModal={closeConformTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}

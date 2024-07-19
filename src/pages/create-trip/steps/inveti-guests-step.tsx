import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestStepProps {
  openIsGuestModalOpen: () => void;
  openCornformTripModal: () => void;
  emailsToInvite: string[];
}
export function InviteGuestStep({
  emailsToInvite,
  openCornformTripModal,
  openIsGuestModalOpen,
}: InviteGuestStepProps) {
  return (
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
  );
}

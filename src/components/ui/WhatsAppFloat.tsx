import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

export function WhatsAppFloat() {
  return (
    <a
      href={`${WHATSAPP_URL}?text=Olá%20Diego!%20Gostaria%20de%20agendar%20uma%20avaliação%20gratuita.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-2xl transition-colors"
      aria-label="Falar no WhatsApp"
      title="Falar com Diego no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

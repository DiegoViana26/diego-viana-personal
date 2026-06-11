"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/lib/faq-data";

export { homeFaqs };

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="badge mx-auto mb-4">Dúvidas Frequentes</p>
          <h2 className="section-title mb-4">Perguntas Frequentes</h2>
          <p className="section-subtitle mx-auto text-center">
            Tire suas dúvidas antes de começar. Não encontrou sua resposta? Fale com Diego no WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <div
              key={i}
              className="border border-dark-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-dark-800 text-sm pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary-600 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-sm text-dark-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

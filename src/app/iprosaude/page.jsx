export const metadata = {
  title: "IPRO Saúde — IA para Clínicas e Odontologia",
  description: "Atendentes virtuais, automação de agendamentos, análise de dados e integrações para clínicas.",
};

export default function IPROSaudePage() {
  const whatsapp = "https://wa.me/5575991897547?text=Olá!+Sou+da+IPRO+Saúde+e+quero+conversar+sobre+IA+para+clínicas.";
  return (
    <main className="min-h-screen bg-[#0f0f10] text-zinc-100">
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-semibold">IA para Clínicas e Odontologia</h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">
          Atendentes virtuais no WhatsApp, automação de confirmação de consultas, integração com planilhas e relatórios inteligentes.
        </p>
        <div className="mt-8 flex gap-4">
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#c6a661] px-6 py-3 text-[#1e1e1e] font-semibold shadow-[0_10px_30px_rgba(198,166,97,0.35)]">
            Falar com especialista
          </a>
          <a href="/#solutions" className="rounded-2xl px-6 py-3 border border-white/10 hover:border-[#c6a661]">
            Ver soluções gerais
          </a>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {t: "Bot de triagem 24/7", d: "Responde dúvidas, coleta dados e encaminha urgências."},
            {t: "Agendamentos automáticos", d: "Integração com agenda; confirmações e lembretes."},
            {t: "Relatórios de produção", d: "Indicadores semanais e insights em um clique."},
          ].map((c, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/0 to-white/[0.02]">
              <p className="text-lg font-semibold">{c.t}</p>
              <p className="text-sm text-zinc-400 mt-2">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

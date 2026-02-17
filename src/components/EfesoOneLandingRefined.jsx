const WHATSAPP_URL = "https://wa.me/5575991897547?text=Olá!+Vim+pelo+site+da+Éfeso+One+e+quero+saber+mais+sobre+as+soluções+em+Inteligência+Artificial.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Éfeso One",
  url: "https://efeso1.com.br",
  logo: "/favicon.svg",
  sameAs: ["https://www.instagram.com/"],
  slogan: "Integrar. Simplificar. Evoluir.",
  description:
    "Soluções práticas de Inteligência Artificial: automações, atendentes virtuais, análise de dados e integrações para empresas.",
};

const SOLUTIONS = [
  {title: 'Atendentes virtuais (WhatsApp / Instagram / Web)', desc: 'Qualificação de leads, agendamentos, respostas e integrações com CRM.'},
  {title: 'Automação de processos', desc: 'Robôs executam tarefas repetitivas, reduzem custos e erros.'},
  {title: 'Análise e relatórios inteligentes', desc: 'Dashboards com insights automáticos para decisões rápidas.'},
  {title: 'IA treinada com seus documentos', desc: 'Assistentes com a sua base: políticas, PDFs, FAQ e conhecimento interno.'},
  {title: 'Integrações', desc: 'ERP, CRM, Google Sheets, APIs e Webhooks numa mesma camada.'},
  {title: 'Consultoria & implantação', desc: 'Descobrimos oportunidades e entregamos um plano de ROI.'},
];

const HOW_IT_WORKS = [
  {step: '1. Diagnóstico', desc: 'Reunião de 20–30min para mapear processos, dados e metas.'},
  {step: '2. Piloto', desc: 'Implantação enxuta em 2–4 semanas para provar valor.'},
  {step: '3. Escala', desc: 'Integrações, monitoração e suporte humano contínuo.'},
];

const CURRENT_YEAR = new Date().getFullYear();

export default function EfesoOneLandingRefined() {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-zinc-100 selection:bg-[#c6a661]/30">
      <div className="hidden" dangerouslySetInnerHTML={{
        __html: `<script type="application/ld+json">${JSON.stringify(JSON_LD)}</script>`,
      }} />

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label="Ir para início">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#e8d49b] to-[#a88a3b] ring-2 ring-[#c6a661]/40 shadow-[0_0_40px_rgba(198,166,97,0.35)] grid place-items-center">
              <span className="font-semibold text-[#1e1e1e]">E¹</span>
            </div>
            <div className="font-semibold tracking-wide">
              <span className="text-zinc-100">ÉFESO </span>
              <span className="text-[#c6a661]">ONE</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#solutions" className="hover:text-[#c6a661]">Soluções</a>
            <a href="#how" className="hover:text-[#c6a661]">Como funciona</a>
            <a href="#cases" className="hover:text-[#c6a661]">Resultados</a>
            <a href="#faq" className="hover:text-[#c6a661]">FAQ</a>
            <a href="#contact" className="hover:text-[#c6a661]">Contato</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="inline-flex items-center gap-2 rounded-2xl bg-[#c6a661] px-4 py-2 text-[#1e1e1e] font-medium shadow-[0_10px_30px_rgba(198,166,97,0.35)] hover:brightness-110">
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_60%_at_50%_-10%,rgba(198,166,97,0.25),transparent_60%)]"/>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Inteligência que <span className="text-[#c6a661]">integra</span>,
              <br/> <span className="text-[#c6a661]">simplifica</span> e evolui seu negócio
            </h1>
            <p className="mt-5 text-zinc-300 max-w-xl">
              Desenvolvemos soluções de IA para automatizar processos, criar atendentes virtuais e transformar dados em decisões. 
              Comece com um piloto rápido e veja ROI em semanas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#c6a661] px-6 py-3 text-[#1e1e1e] font-semibold hover:brightness-110 shadow-[0_10px_30px_rgba(198,166,97,0.35)]">Solicitar diagnóstico gratuito</a>
              <a href="#solutions" className="rounded-2xl px-6 py-3 border border-white/10 hover:border-[#c6a661]">Ver soluções</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c6a661]"/>Implantação em 2–4 semanas</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c6a661]"/>LGPD & segurança</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#c6a661]"/>Suporte humano dedicado</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 ring-1 ring-white/10 p-1">
              <div className="h-full w-full rounded-2xl bg-[#0d0d0f] grid place-items-center">
                <div className="w-40 h-40 rounded-full border-2 border-[#c6a661]/40 grid place-items-center shadow-[0_0_60px_rgba(198,166,97,0.25)]">
                  <div className="w-28 h-28 rounded-full border border-[#c6a661]/30 grid place-items-center">
                    <span className="text-3xl text-[#c6a661] font-semibold">E¹</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 mt-3">Ícone conceitual da marca • Éfeso One</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 grid sm:grid-cols-3 gap-6 text-center">
          <div><p className="text-4xl font-semibold text-[#c6a661]">-47%</p><p className="text-zinc-400">tempo operacional com automações</p></div>
          <div><p className="text-4xl font-semibold text-[#c6a661]">+32%</p><p className="text-zinc-400">conversões com atendentes virtuais</p></div>
          <div><p className="text-4xl font-semibold text-[#c6a661]">99.9%</p><p className="text-zinc-400">uptime e confiabilidade</p></div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Soluções de IA</h2>
        <p className="mt-2 text-zinc-400 max-w-2xl">Comece por onde dói mais. Nossos módulos são independentes e integráveis.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {title: 'Atendentes virtuais (WhatsApp / Instagram / Web)', desc: 'Qualificação de leads, agendamentos, respostas e integrações com CRM.'},
            {title: 'Automação de processos', desc: 'Robôs executam tarefas repetitivas, reduzem custos e erros.'},
            {title: 'Análise e relatórios inteligentes', desc: 'Dashboards com insights automáticos para decisões rápidas.'},
            {title: 'IA treinada com seus documentos', desc: 'Assistentes com a sua base: políticas, PDFs, FAQ e conhecimento interno.'},
            {title: 'Integrações', desc: 'ERP, CRM, Google Sheets, APIs e Webhooks numa mesma camada.'},
            {title: 'Consultoria & implantação', desc: 'Descobrimos oportunidades e entregamos um plano de ROI.'},
          ].map((card, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-gradient-to-b from-white/0 to-white/[0.02] hover:border-[#c6a661]/50 transition">
              <h3 className="text-lg font-semibold text-zinc-100">{card.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Como funciona</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
          {[
            {step: '1. Diagnóstico', desc: 'Reunião de 20–30min para mapear processos, dados e metas.'},
            {step: '2. Piloto', desc: 'Implantação enxuta em 2–4 semanas para provar valor.'},
            {step: '3. Escala', desc: 'Integrações, monitoração e suporte humano contínuo.'},
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6">
              <p className="text-[#c6a661] font-semibold">{s.step}</p>
              <p className="mt-2 text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Resultados</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-lg font-semibold">Atendente virtual em saúde</p>
            <p className="text-4xl font-semibold text-[#c6a661] mt-2">+38%</p>
            <p className="mt-1 text-zinc-400">mais agendamentos em 30 dias</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-lg font-semibold">Automação financeira</p>
            <p className="text-4xl font-semibold text-[#c6a661] mt-2">-63%</p>
            <p className="mt-1 text-zinc-400">tempo em tarefas repetitivas</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="text-lg font-semibold">Relatórios inteligentes</p>
            <p className="text-4xl font-semibold text-[#c6a661] mt-2">x4</p>
            <p className="mt-1 text-zinc-400">agilidade em decisões táticas</p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-16 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-semibold">Perguntas frequentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm text-zinc-300">
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="font-semibold">Quanto tempo leva para ver resultado?</p>
            <p className="mt-2 text-zinc-400">Normalmente entre 2 e 4 semanas no piloto inicial. A partir daí, ampliamos o escopo conforme o ROI.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="font-semibold">É compatível com meus sistemas?</p>
            <p className="mt-2 text-zinc-400">Sim. Integramos via API, Webhooks, Google Sheets ou conectores sob medida.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="font-semibold">E a LGPD?</p>
            <p className="mt-2 text-zinc-400">Projetos seguem princípios de minimização, criptografia em trânsito e acesso com controle e auditoria.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="font-semibold">Qual o investimento?</p>
            <p className="mt-2 text-zinc-400">Começamos com um piloto de baixo risco e pacote sob medida. O foco é gerar ROI mensurável rapidamente.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">Vamos construir seu primeiro caso de IA</h3>
            <p className="mt-2 text-zinc-400">Fale com um especialista agora e receba um plano de implantação.</p>
          </div>
          <div className="flex md:justify-end">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-[#c6a661] px-6 py-3 text-[#1e1e1e] font-semibold hover:brightness-110">
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-zinc-500 pb-8">© {CURRENT_YEAR} Éfeso One. Todos os direitos reservados.</div>
      </footer>
    </div>
  );
}

import { CASE_STUDIES } from '../data/content';
import { Language } from '../types';

interface CaseStudyDetailProps {
  caseId: string;
  language: Language;
  onBack: () => void;
  onSelectCase: (caseId: string) => void;
  onOpenBooking: () => void;
}

export default function CaseStudyDetail({
  caseId,
  language,
  onBack,
  onSelectCase,
  onOpenBooking
}: CaseStudyDetailProps) {
  const currentCase = CASE_STUDIES.find((c) => c.id === caseId) || CASE_STUDIES[0];
  const currentIndex = CASE_STUDIES.findIndex((c) => c.id === currentCase.id);
  const nextCase = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <article className="case-study-page pt-32 pb-24 px-6 sm:px-12 bg-[#070808] min-h-screen text-[#E9E9EB]">
      <div className="max-w-[1300px] mx-auto">
        {/* Back Link */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-[#8C8C90] hover:text-[#E9E9EB] transition-colors cursor-pointer"
          >
            <span>←</span> {language === 'en' ? 'Back' : 'Tillbaka'}
          </button>
        </div>

        {/* Hero Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-wider text-[#8C8C90] uppercase block mb-4">
              {currentCase.client}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#E9E9EB] leading-[1.1] mb-6">
              {currentCase.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#B4B4B8] leading-relaxed">
              {currentCase.subtitle}
            </p>
          </div>

          <aside className="lg:col-span-4 bg-[#121215] border border-[#1C1D20] rounded-2xl p-6 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#7C7C80] mb-1">
                {language === 'en' ? 'Client' : 'Kund'}
              </div>
              <div className="text-base font-medium text-[#E9E9EB]">{currentCase.client}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#7C7C80] mb-1">
                {language === 'en' ? 'Role' : 'Roll'}
              </div>
              <div className="text-base font-medium text-[#E9E9EB]">{currentCase.role}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#7C7C80] mb-1">
                {language === 'en' ? 'Timeline' : 'Tidsram'}
              </div>
              <div className="text-base font-medium text-[#E9E9EB]">{currentCase.timeline}</div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#7C7C80] mb-2">
                {language === 'en' ? 'Key Outcomes' : 'Viktiga resultat'}
              </div>
              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-[#262828]">
                {currentCase.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-xs text-[#8C8C90]">{m.label}</span>
                    <span className="text-sm font-mono font-medium text-[#E9E9EB]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Media Hero Banner */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#121215] border border-[#1C1D20] mb-24">
          {currentCase.videoSrc ? (
            <video
              src={currentCase.videoSrc}
              muted
              loop
              playsInline
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={currentCase.heroImage}
              alt={currentCase.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Overview & Goals */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-4xl font-medium mb-8">
            {language === 'en' ? 'Project goals' : 'Projektmål'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentCase.goals.map((g, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#121215] border border-[#1C1D20]">
                <span className="text-xs font-mono text-[#7C7C80] block mb-3">0{idx + 1}</span>
                <h3 className="text-xl font-medium text-[#E9E9EB] mb-3">{g.title}</h3>
                <p className="text-sm sm:text-base text-[#B4B4B8] leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How I led the process */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-4xl font-medium mb-8">
            {language === 'en' ? 'How I led the process' : 'Hur jag ledde processen'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCase.process.map((p, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#121215] border border-[#1C1D20]">
                <h3 className="text-xl font-medium text-[#E9E9EB] mb-3">{p.title}</h3>
                <p className="text-base text-[#B4B4B8] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shipped Solutions */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-4xl font-medium mb-8">
            {language === 'en' ? 'What was shipped' : 'Vad som levererades'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCase.shipped.map((s, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-[#121215] border border-[#1C1D20]">
                <h3 className="text-xl font-medium text-[#E9E9EB] mb-3">{s.title}</h3>
                <p className="text-base text-[#B4B4B8] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results & Measurable Outcomes */}
        <section className="mb-28 p-8 sm:p-12 rounded-3xl bg-[#121215] border border-[#1C1D20]">
          <h2 className="text-2xl sm:text-4xl font-medium mb-8">
            {language === 'en' ? 'Outcomes' : 'Utfall'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCase.results.map((r, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-medium text-[#E9E9EB] mb-2">{r.title}</h3>
                <p className="text-base text-[#B4B4B8] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Case Study Preview */}
        <div className="pt-16 border-t border-[#1C1D20] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#7C7C80] block mb-2">
              {language === 'en' ? 'Next Case Study' : 'Nästa case study'}
            </span>
            <h4 className="text-2xl font-medium text-[#E9E9EB]">{nextCase.title}</h4>
          </div>

          <button
            onClick={() => {
              onSelectCase(nextCase.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full border border-[#48484D] text-[#E9E9EB] hover:bg-[#E9E9EB] hover:text-[#070808] transition-all whitespace-nowrap cursor-pointer"
          >
            {language === 'en' ? 'View next case →' : 'Visa nästa case →'}
          </button>
        </div>
      </div>
    </article>
  );
}

import { CASE_STUDIES, ARCHIVE_ITEMS } from '../data/content';
import { Language } from '../types';

interface WorkViewProps {
  language: Language;
  onSelectCase: (caseId: string) => void;
  onOpenBooking: () => void;
}

export default function WorkView({ language, onSelectCase }: WorkViewProps) {
  return (
    <div className="work-page pt-32 pb-24 px-6 sm:px-12 bg-[#070808] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#E9E9EB] max-w-[960px] leading-[1.1]">
            {language === 'en'
              ? 'Work — Five case studies. Strategic outcomes.'
              : 'Arbete — Fem case studies. Strategiska utfall.'}
          </h1>
        </div>

        {/* Selected Cases List */}
        <div className="space-y-16 mb-32">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              onClick={() => onSelectCase(study.id)}
              className="group bg-[#121215] border border-[#1C1D20] hover:border-[#48484D] rounded-3xl p-6 sm:p-12 transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#070808]">
                {study.videoSrc ? (
                  <video
                    src={study.videoSrc}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8C8C90]">
                      {study.client}
                    </span>
                    <span className="text-xs font-mono text-[#7C7C80]">0{idx + 1}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#E9E9EB] group-hover:text-white transition-colors mb-6 leading-tight">
                    {study.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#B4B4B8] leading-relaxed mb-8">
                    {study.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1C1D20] flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-lg sm:text-xl font-mono font-medium text-[#E9E9EB]">
                          {m.value}
                        </div>
                        <div className="text-xs text-[#7C7C80]">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <span className="text-sm font-medium text-[#8C8C90] group-hover:text-[#E9E9EB] flex items-center gap-2 transition-colors">
                    {language === 'en' ? 'View case' : 'Visa case'}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Section */}
        <section className="archive pt-20 border-t border-[#1C1D20]">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#E9E9EB] mb-12">
            {language === 'en' ? 'Archive' : 'Arkiv'}
          </h2>

          <div className="divide-y divide-[#1C1D20]">
            {ARCHIVE_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#121215]/50 px-4 rounded-xl transition-colors"
              >
                <span className="text-lg font-medium text-[#E9E9EB] sm:w-1/4">{item.company}</span>
                <span className="text-sm text-[#8C8C90] sm:w-2/4">{item.role}</span>
                <span className="text-xs font-mono text-[#7C7C80] sm:w-1/4 sm:text-right">{item.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

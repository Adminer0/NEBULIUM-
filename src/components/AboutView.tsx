import { BELIEFS } from '../data/content';
import { Language } from '../types';

interface AboutViewProps {
  language: Language;
  onOpenBooking: () => void;
}

export default function AboutView({ language, onOpenBooking }: AboutViewProps) {
  return (
    <div className="about-page pt-32 pb-24 px-6 sm:px-12 bg-[#070808] min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        {/* Hero Section */}
        <div className="mb-24">
          <span className="text-xs uppercase tracking-[0.15em] text-[#7C7C80] font-medium block mb-4">
            {language === 'en' ? 'About' : 'Om mig'}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#E9E9EB] max-w-[960px] leading-[1.1] mb-12">
            {language === 'en' ? "I almost didn't become a designer" : 'Jag blev nästan inte designer'}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden bg-[#121215] border border-[#1C1D20]">
              <img
                src="/_astro/metacci-def.DVFklYC9_ZjbsOr.webp"
                alt="Simon Metacci"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 text-lg sm:text-xl text-[#B4B4B8] space-y-6 leading-relaxed">
              <p>
                {language === 'en'
                  ? 'In 2005, I wanted to design buildings. Then I realised digital products could be designed, shipped, tested, and iterated in days instead of decades. I taught myself front-end development, built websites for local businesses, and never looked back.'
                  : 'År 2005 ville jag rita byggnader. Sedan insåg jag att digitala produkter kunde formges, skeppas, testas och itereras på dagar istället för decennier. Jag lärde mig front-end, byggde sajter åt lokala företag och såg mig aldrig om.'}
              </p>
              <p>
                {language === 'en'
                  ? 'Over the next nineteen years, I worked across agencies, scale-ups, and state monopolies. I saw the same pattern repeat: teams with brilliant engineers and ambitious roadmaps got bogged down by slow feedback loops, fragmented design files, and endless stakeholder opinions.'
                  : 'Under de följande nitton åren arbetade jag över byråer, scale-ups och statliga monopol. Jag såg samma mönster upprepas: team med briljanta utvecklare och ambitiösa planer fastnade i långsamma feedback-loopar, fragmenterade designfiler och oändliga åsikter.'}
              </p>
              <p>
                {language === 'en'
                  ? 'I founded Metacci to be the fractional leader I wished I had in those rooms: setting clear product direction, constructing living design systems that double engineering velocity, and aligning design decisions directly with commercial growth.'
                  : 'Jag grundade Metacci för att vara den fractionella ledare jag önskade fanns i de rummen: sätta tydlig produktriktning, bygga levande designsystem som dubblar utvecklingstakten och koppla designbeslut direkt till kommersiell tillväxt.'}
              </p>
            </div>
          </div>
        </div>

        {/* Six Beliefs */}
        <div className="py-24 border-t border-[#1C1D20]">
          <h2 className="text-3xl sm:text-5xl font-medium text-[#E9E9EB] mb-16">
            {language === 'en'
              ? 'Six things nineteen years taught me'
              : 'Sex saker nitton år lärt mig'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BELIEFS.map((b, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#121215] border border-[#1C1D20] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#7C7C80] block mb-4">0{idx + 1}</span>
                  <h3 className="text-xl font-medium text-[#E9E9EB] mb-4">{b.title}</h3>
                  <p className="text-base text-[#B4B4B8] leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-24 border-t border-[#1C1D20] text-center">
          <h2 className="text-3xl sm:text-5xl font-medium text-[#E9E9EB] mb-6">
            {language === 'en' ? 'Tell me about your product' : 'Berätta om din produkt'}
          </h2>
          <p className="text-lg text-[#B4B4B8] max-w-[600px] mx-auto mb-10">
            {language === 'en'
              ? "Book an introductory call and let's explore if we're the right fit."
              : 'Boka ett introduktionssamtal så utforskar vi om vi passar ihop.'}
          </p>
          <button
            onClick={onOpenBooking}
            className="px-10 py-5 rounded-full bg-[#E9E9EB] text-[#070808] font-semibold text-lg hover:bg-white transition-all shadow-[0_0_24px_rgba(233,233,235,0.2)]"
          >
            {language === 'en' ? 'Book an intro call' : 'Boka ett introsamtal'}
          </button>
        </div>
      </div>
    </div>
  );
}

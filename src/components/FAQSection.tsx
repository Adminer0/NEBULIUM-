import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/content';
import { Language } from '../types';

interface FAQSectionProps {
  language: Language;
}

export default function FAQSection({ language }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqList = FAQS[language];

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq py-28 px-6 sm:px-12 bg-[#070808] border-t border-[#121215]" id="faq">
      <div className="max-w-[1040px] mx-auto">
        <div className="faq-head mb-16">
          <span className="eyebrow text-xs uppercase tracking-[0.15em] text-[#7C7C80] font-medium block mb-4">
            FAQ
          </span>
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E9E9EB]">
            {language === 'en' ? 'Before you book' : 'Innan du bokar'}
          </h2>
        </div>

        <div className="list divide-y divide-[#1C1D20] border-t border-b border-[#1C1D20]">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="item py-8">
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="trigger w-full flex items-center justify-between text-left gap-6 group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="question text-xl sm:text-2xl font-medium text-[#E9E9EB] group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <span
                    className="icon text-[#7C7C80] group-hover:text-[#E9E9EB] transition-transform duration-300 shrink-0"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <svg width="22" height="12" viewBox="0 0 24 13" fill="none">
                      <path
                        d="M2 2.5L12 11L22 2.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                      role="region"
                    >
                      <p className="answer pt-6 text-base sm:text-lg text-[#B4B4B8] font-normal leading-relaxed max-w-[840px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

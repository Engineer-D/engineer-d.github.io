import { talks, certifications, skills } from "@/lib/constants";
import { Award, Mic, Users, GraduationCap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Oluwadamifogore Daramola — ML/AI Engineer, founder, researcher, and community leader.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
        About Me
      </h1>

      {/* Bio */}
      <div className="prose prose-invert max-w-none mb-14">
        <p className="text-base text-muted leading-relaxed">
          I&apos;m an ML/AI Engineer based in Lagos, Nigeria, building
          production AI systems at the intersection of cybersecurity, fintech,
          and healthcare. With a B.Eng in Electrical and Electronics Engineering
          from the Federal University of Technology, Akure (First Class Honours,
          4.55/5.0), I bring a strong engineering foundation to everything I
          build.
        </p>
        <p className="text-base text-muted leading-relaxed">
          My work spans the full AI stack — from edge-deployed computer vision on
          ESP32 and Raspberry Pi, to production LLM-powered agent systems at
          SmartComply and Fertitude, to reinforcement learning research for LLM
          alignment at Meridus Research Lab. I&apos;ve architected 6 production
          AI agents for cybersecurity compliance, built multilingual voice AI
          supporting 5 Nigerian languages, and developed autonomous agents for
          sales automation.
        </p>
        <p className="text-base text-muted leading-relaxed">
          As the founder of Eusate, I&apos;m building AI-powered customer
          support specifically designed for Africa — with culturally-aware,
          multilingual conversational AI that reduces hallucinations by 78%.
        </p>
        <p className="text-base text-muted leading-relaxed">
          Beyond building, I&apos;m deeply invested in growing the AI community
          in Nigeria. As a core organizer at GDG Akure, 2x co-lead at GDSC FUTA,
          and deputy/acting lead at DSN AI+, I&apos;ve mentored over 500 students
          and organized workshops on machine learning, NLP, and embedded AI.
        </p>
      </div>

      {/* Skills */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-tag-bg text-tag-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Talks */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Mic size={22} className="text-accent" /> Conference Talks
        </h2>
        <div className="space-y-3">
          {talks.map((talk, i) => (
            <div
              key={i}
              className="border border-card-border rounded-lg p-4 bg-card flex justify-between items-start gap-4"
            >
              <div>
                <p className="font-medium text-sm">{talk.title}</p>
                <p className="text-sm text-muted">{talk.event}</p>
              </div>
              <span className="text-xs text-muted shrink-0">{talk.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award size={22} className="text-accent" /> Certifications
        </h2>
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border border-card-border rounded-lg p-4 bg-card flex justify-between items-start gap-4"
            >
              <div>
                <p className="font-medium text-sm">{cert.name}</p>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
              <span className="text-xs text-muted shrink-0">{cert.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Education */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users size={22} className="text-accent" /> Community & Leadership
        </h2>
        <div className="space-y-3">
          <div className="border border-card-border rounded-lg p-4 bg-card">
            <p className="font-medium text-sm">
              Core Organizer — Google Developer Groups (GDG), Akure
            </p>
            <p className="text-sm text-muted">
              Organizing workshops and events on ML, NLP, and AI for developers
            </p>
          </div>
          <div className="border border-card-border rounded-lg p-4 bg-card">
            <p className="font-medium text-sm">
              2x Co-Lead — Google Developer Student Clubs (GDSC), FUTA
            </p>
            <p className="text-sm text-muted">
              Leading student developer community and organizing technical workshops
            </p>
          </div>
          <div className="border border-card-border rounded-lg p-4 bg-card">
            <p className="font-medium text-sm">
              Deputy Lead / Acting Lead — Data Science Nigeria (DSN AI+)
            </p>
            <p className="text-sm text-muted">
              Mentoring 500+ students in machine learning and data science
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GraduationCap size={22} className="text-accent" /> Education
        </h2>
        <div className="border border-card-border rounded-lg p-4 bg-card">
          <p className="font-medium text-sm">
            B.Eng, Electrical and Electronics Engineering
          </p>
          <p className="text-sm text-muted">
            Federal University of Technology, Akure (FUTA)
          </p>
          <p className="text-sm text-muted">
            First Class Honours &middot; CGPA: 4.55/5.0
          </p>
        </div>
      </section>
    </div>
  );
}

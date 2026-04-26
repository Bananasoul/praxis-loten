"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { CalendarPlus, ArrowRight } from "lucide-react";

const teamMembers = [
  { key: "philippe", name: "Philippe Banaszak", initials: "PB", color: "from-primary-500 to-primary-700", href: "/team/philippe-banaszak", slug: "philippe-banaszak" },
{ key: "felix", name: "Félix Esser", initials: "FE", color: "from-accent-500 to-accent-700", href: "/team/felix-esser", slug: "felix-esser" },
  { key: "fabienne", name: "Fabienne Dormann", initials: "FD", color: "from-purple-500 to-purple-700", href: "/team/fabienne-dormann", slug: "fabienne-dormann" },
  { key: "thom", name: "Thom Petit", initials: "TP", color: "from-teal-500 to-teal-700", href: "/team/thom-petit", slug: "thom-petit" },
  { key: "loic", name: "Loïc Meunier", initials: "LM", color: "from-indigo-500 to-indigo-700", href: "/team/loic-meunier", slug: "loic-meunier" },
];

export function TeamSection() {
  const t = useTranslations("team");
  const [members, setMembers] = useState(teamMembers);

  useEffect(() => {
    const arr = [...teamMembers];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setMembers(arr);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {t("sectionTitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {members.map((member) => (
            <StaggerItem key={member.key}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={member.href} className="group block">
                  <div className="relative bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500">
                    {/* Avatar */}
                    <div className="relative h-56 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20`} />
                      <Image
                        src={`/avatars/${member.slug}.jpg`}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-[center_15%]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium mb-3">
                        {t(`${member.key}.role`)}
                      </p>
                      <p className="text-sm text-neutral-500 leading-relaxed italic mb-4">
                        &ldquo;{t(`${member.key}.quote`)}&rdquo;
                      </p>

                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                          {t("viewProfile")}
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-50 text-accent-600 rounded-lg text-xs font-semibold hover:bg-accent-100 transition-colors">
                          <CalendarPlus className="w-3 h-3" />
                          {t("bookAppointment")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

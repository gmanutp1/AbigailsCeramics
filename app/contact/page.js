import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { contactDetails } from "@/lib/data";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the studio."
        description="For order questions, wholesale conversations, or project ideas, this page gives the brand a clear and polished contact surface."
        image="/images/editorial/our-offering.svg"
        imageAlt="Editorial ceramics contact page image."
      />

      <section className="site-frame section-space grid gap-8 px-4 pt-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <div className="soft-panel rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow">Contact details</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-[var(--ink-soft)]">
              <p>{contactDetails.email}</p>
              <p>{contactDetails.phone}</p>
              <p>{contactDetails.studio}</p>
            </div>
          </div>
          <div className="soft-panel rounded-[2rem] p-6 sm:p-8">
            <p className="eyebrow">Social</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {contactDetails.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-[color:var(--line)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ink)]"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}

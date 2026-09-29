import { Card } from "@/components/ui/Card";
import { ArrowRight, Mail, Message } from "@/components/ui/icons";
import { contact, mailtoHref, whatsappHref } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-content px-6 py-24"
    >
      <Card as="div" tone="panel" className="flex flex-col gap-12 overflow-hidden p-14">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-7 flex flex-col gap-4 self-center">
            <h2 id="contact-heading" className="text-heading text-text-strong">
              {contact.heading[0]}
              <br />
              {contact.heading[1]}
            </h2>
            <p className="text-body-lg text-text-muted">{contact.body}</p>
          </div>

          <div className="col-span-5 flex flex-col gap-3.5 self-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-action bg-accent-action px-5 py-4 text-accent-action-text shadow-action"
            >
              <span className="flex items-center gap-2.5">
                <Message size={16.667} />
                <span className="text-button font-semibold">{contact.whatsapp}</span>
              </span>
              <ArrowRight size={12} />
            </a>

            <a
              href={mailtoHref}
              className="flex items-center gap-2.5 rounded-action border border-border-strong bg-surface-action px-5 py-4"
            >
              <Mail size={16.667} className="text-text-muted" />
              <span className="text-button font-medium whitespace-nowrap text-text">{contact.email}</span>
            </a>
          </div>
        </div>

        <ul className="flex gap-6 border-t border-border pt-8">
          {contact.reassurance.map((item) => (
            <li key={item.title} className="flex min-w-0 flex-1 flex-col gap-0.875">
              <p className="text-caption font-medium text-text-strong">{item.title}</p>
              <p className="text-caption text-text-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}

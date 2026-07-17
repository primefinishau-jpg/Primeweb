import { useRef, useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── Replace these three values with your own from emailjs.com ───────────────
const EMAILJS_SERVICE_ID  = "service_1hmadib";   // Dashboard → Email Services
const EMAILJS_TEMPLATE_ID = "template_l66vu98";  // Dashboard → Email Templates
const EMAILJS_PUBLIC_KEY  = "vFiLFSapNZ3GGTz2v"; // Account → General → Public Key
// ─────────────────────────────────────────────────────────────────────────────

const projectTypes = [
  "Full Home Renovation",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Commercial Fitout",
  "Other",
];

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setErrorMsg("Something went wrong — please try again or call us directly.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal" />
        <h3 className="text-xl font-semibold">We've received your enquiry!</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          One of our project managers will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-teal underline underline-offset-4 hover:text-teal-deep transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field name="name" label="Full name" required />
        <Field name="phone" label="Phone" type="tel" required />
      </div>
      <Field name="email" label="Email" type="email" required />
      <Field name="suburb" label="Suburb / Postcode" />

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Project type <span className="text-teal">*</span>
        </label>
        <select
          name="projectType"
          required
          className="w-full rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="">Select a service…</option>
          {projectTypes.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
          Tell us about your project
        </label>
        <textarea
          name="details"
          rows={4}
          className="w-full rounded-sm border border-input bg-card px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none"
          placeholder="Scope, timeline, indicative budget…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-teal px-6 py-4 text-sm font-semibold text-white hover:bg-teal-deep transition-colors disabled:opacity-70"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "sending" ? "Sending…" : "Request My Free Quote"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Replies within 24 hours · No obligation · Fully confidential
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
        {label} {required && <span className="text-teal">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-input bg-card px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
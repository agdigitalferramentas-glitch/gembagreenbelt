import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";

const FORM_ID = "18d01129-a244-4f98-8e77-a2aef73564db";
const SUPABASE_URL = "https://gmemxbfibakfpsjbsvyt.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtZW14YmZpYmFrZnBzamJzdnl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTMxOTQsImV4cCI6MjA4NTYyOTE5NH0.Aq7KveS7PwwAADPK-n0rz-CEYM0dTYZLnttTph1EfD0";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(10, "WhatsApp inválido")
    .max(20, "WhatsApp inválido"),
});

const LeadForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const digits = whatsapp.replace(/\D/g, "");
    const parsed = schema.safeParse({ name, email, whatsapp: digits });
    if (!parsed.success) {
      setError(parsed.error.errors[0].message);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/form_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "content-profile": "public",
        },
        body: JSON.stringify({
          form_id: FORM_ID,
          data: {
            name: parsed.data.name,
            email: parsed.data.email,
            whatsapp: `+55${digits}`,
          },
        }),
      });
      if (!res.ok) throw new Error("Falha ao enviar. Tente novamente.");
      navigate("/gb-obrigado");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-14 rounded-full bg-foreground/5 border border-foreground/15 px-6 text-base text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
        maxLength={100}
        required
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
        maxLength={255}
        required
      />
      <input
        type="tel"
        placeholder="DDD + WhatsApp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className={inputClass}
        maxLength={20}
        required
      />

      {error && (
        <p className="text-sm text-destructive font-medium" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full h-14 rounded-full bg-accent text-accent-foreground font-bold text-sm sm:text-base tracking-wide uppercase shadow-[0_0_30px_hsla(156,58%,45%,0.35)] hover:shadow-[0_0_45px_hsla(156,58%,45%,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="flex items-center justify-center gap-3">
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>Quero baixar o guia gratuito</>
          )}
        </span>
        {!loading && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-background text-accent group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-5 h-5" />
          </span>
        )}
      </button>
    </form>
  );
};

export default LeadForm;

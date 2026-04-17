export function BespokeForm() {
  return (
    <form className="soft-panel rounded-[2rem] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            Name
          </span>
          <input className="min-h-12 w-full rounded-[1rem] border border-[color:var(--line)] bg-white/70 px-4 outline-none transition focus:border-[color:var(--line-strong)]" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            Email
          </span>
          <input type="email" className="min-h-12 w-full rounded-[1rem] border border-[color:var(--line)] bg-white/70 px-4 outline-none transition focus:border-[color:var(--line-strong)]" />
        </label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            Project type
          </span>
          <select className="min-h-12 w-full rounded-[1rem] border border-[color:var(--line)] bg-white/70 px-4 outline-none transition focus:border-[color:var(--line-strong)]">
            <option>Custom dinnerware</option>
            <option>Event gifting</option>
            <option>Hospitality / restaurant</option>
            <option>Decorative vessels</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
            Desired timeline
          </span>
          <input placeholder="Example: 8 weeks" className="min-h-12 w-full rounded-[1rem] border border-[color:var(--line)] bg-white/70 px-4 outline-none transition focus:border-[color:var(--line-strong)]" />
        </label>
      </div>
      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)]">
          Scope and details
        </span>
        <textarea
          rows={7}
          className="w-full rounded-[1.25rem] border border-[color:var(--line)] bg-white/70 p-4 outline-none transition focus:border-[color:var(--line-strong)]"
          placeholder="Share quantity, color direction, sizing, references, and anything you already know."
        />
      </label>
      <button
        type="submit"
        className="mt-6 min-h-[3.25rem] rounded-full bg-[var(--ink)] px-7 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5"
      >
        Submit request
      </button>
    </form>
  );
}

export function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-title mt-4 text-4xl text-[var(--ink)] sm:text-5xl">{title}</h2>
      {body ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--ink-soft)] sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}

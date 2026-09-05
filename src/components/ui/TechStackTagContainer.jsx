import TechStackPageTag from "./TechStackPageTag";

export default function TechStackTagContainer({ title, stack, index = 0 }) {
  return (
    <section
      className="reveal space-y-3"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
      <ul className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <li key={item}>
            <TechStackPageTag stack={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

import { reviews } from "../../utils/content";

export default function Reviews() {
  return (
    <section className="m-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 px-24 max-xl:gap-x-3 max-xl:px-16 max-lg:px-8 max-md:px-6 transition-all duration-200 ease-out">
      <ul className="flex">
        {reviews.map((review) => (
          <li key={review.id} className="-mr-4 last:mr-0">
            <img
              className="border-primary-100 h-12 rounded-full border-2 max-xl:h-10"
              src={review.src}
              alt={review.alt}
            />
          </li>
        ))}
      </ul>
      <p className="text-primary-100 text-xl/loose font-light max-lg:text-base/loose">
        Confiado por{" "}
        <span className="text-primary-500 font-bold tracking-tighter">
          12.653+ {" "}
        </span>
        viciados em produtividade
      </p>
    </section>
  );
}
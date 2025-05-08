import Testimonal from "./Testimonal";

export default function TestimonialList({ testimonials }) {
  return (
    <ul className="flex flex-col gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden">
      {testimonials.map((test) => (
        <Testimonal test={test} key={test.name} />
      ))}
    </ul>
  );
}

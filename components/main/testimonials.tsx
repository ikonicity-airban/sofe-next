import Heading from "../ui/heading";
import Section from "../ui/section";

function Testimonials() {
  return (
    <Section className="p-6 max-w-screen-laptop mx-auto">
      <Heading subtitle="Hear what People say about us" title="Testimonials" />

      <div className="flex grid-col-3 md:grid-col-3 max-h-fit gap-6">
        {new Array(3).fill(0).map((idx) => (
          <div className="h-full max-h-fit relative" key={idx}>
            <div className="h-fit min-w-full text-base flex-1 grid place-items-center">
             
            </div>
            <div className="space-y-6 md:pr-10 top-0 rounded-2xl p-4 backdrop-filter peer-focus-within:block bg-[#0028]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, veritatis. Aspernatur sit adipisci earum odio
              </p>
              <p className="text-xs text-right text-muted">2 days ago</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;

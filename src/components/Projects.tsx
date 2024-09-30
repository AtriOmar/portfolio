import ShowOnScroll from "@/components/ShowOnScroll";

export default function Projects() {
  return (
    <section className="container-1 px-4 scr900:px-8 py-20">
      <ShowOnScroll>
        <h2 className="mt-8 font-bold text-3xl scr900:text-4xl">Projects</h2>
      </ShowOnScroll>
      <ShowOnScroll>
        <p className="mt-4 font-medium text-lg">I've worked on a variety of projects over the years and I'm proud of the progress I've made</p>
      </ShowOnScroll>
    </section>
  );
}

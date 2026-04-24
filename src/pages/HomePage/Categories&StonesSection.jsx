import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import CategoriesStonesCarousel from "./Catigories&StonesCarousel";

export default function CategoriesStonesSection({
  title,
  content,
  classNameNext,
  classNamePrev,
}) {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* TITLE */}
        <h2 className="text-3xl text-center font-semibold mb-10">{title}</h2>

        {/* PRODUCTS */}

        <CategoriesStonesCarousel
          content={content}
          title={title}
          classNameNext={classNameNext}
          classNamePrev={classNamePrev}
        />

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <Button>View All</Button>
        </div>
      </Container>
    </section>
  );
}

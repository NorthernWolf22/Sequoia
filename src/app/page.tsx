//Services
import { getAccordion } from "@/services/getAccordion";
import { getLogoRows } from "@/services/getLogoRows";
import { getCarouselQuotes } from "@/services/getCarouselQuotes";

//Modules
import HeroModule from "@/modules/HeroModule";
import ServicesModule from "@/modules/ServicesModule";
import TestimonialsModule from "@/modules/TestimonialsModule";
import LogoScrollModule from "@/modules/LogoScrollModule";


export default async function Home() {
  const accordion = await getAccordion("services");
  const logoRows = await getLogoRows();
  const carouselQuotes = await getCarouselQuotes("testimonials");

  console.log('logo rows: ', logoRows);

  return (
    <>
      <HeroModule />
      <LogoScrollModule
        rows={logoRows}
      />
      <ServicesModule
        accordion={accordion}
      />
      <TestimonialsModule 
        carouselQuotes={carouselQuotes}
      />
    </>
  );
}
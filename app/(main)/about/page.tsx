import Heading from "@/app/ui/heading";
import Welcome from "@/app/ui/main/welcome-section";
import Section from "@/app/ui/section";

function AboutPage() {
  return <Section>
    <Heading title="about us" subtitle="Brief History of the SOFE Group"/>
    <Welcome />
  </Section>;
}

export default AboutPage;

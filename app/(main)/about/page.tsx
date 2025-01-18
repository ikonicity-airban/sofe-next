import Heading from "@/components/ui/heading";
import Welcome from "@/components/main/welcome-section";
import Section from "@/components/ui/section";

function AboutPage() {
  return <Section>
    <Heading title="about us" subtitle="Brief History of the SOFE Group"/>
    <Welcome />
  </Section>;
}

export default AboutPage;

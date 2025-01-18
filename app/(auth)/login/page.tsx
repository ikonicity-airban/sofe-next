import LoginForm from "@/components/auth/login-form";
import Section from "@/components/ui/section";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Section className="w-full min-h-[70vh] flex flex-col items-center">
        <LoginForm />
      </Section>
    </div>
  );
}

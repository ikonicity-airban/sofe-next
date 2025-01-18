import CTAForm from "@/components/main/CTA";

function ContactsPage() {
  return <div>
    <div className="bg-[url('/map.png')] bg-fixed bg-contain bg-no-repeat bg-center">
        <div className="backdrop-blur-[4px] bg-[#0018]">
          <CTAForm />
        </div>
      </div>
  </div>;
}

export default ContactsPage;

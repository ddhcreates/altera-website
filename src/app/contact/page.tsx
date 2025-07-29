import ContactForm from '../../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Send us an Inquiry</h1>
      <ContactForm />
    </div>
  );
}
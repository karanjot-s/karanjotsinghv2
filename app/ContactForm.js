import { Button, Input, Textarea } from "@nextui-org/react";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
        <Input type="text" label="Name" required />
        <Input type="email" label="Email" required />
      </div>
      <Input type="text" label="Title" required />
      <Textarea label="Message" required />
      <Button variant="shadow" color="warning" size="lg">
        Send
      </Button>
    </form>
  );
}

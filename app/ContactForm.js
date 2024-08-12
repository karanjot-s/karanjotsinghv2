"use client";

import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const setError = (field, message) => {
    switch (field) {
      case "name":
        setNameError(message);
        break;
      case "email":
        setEmailError(message);
        break;
      case "title":
        setTitleError(message);
        break;
      case "message":
        setMessageError(message);
        break;
      default:
        break;
    }
  };

  const validateField = (field) => {
    let isValid = false;
    switch (field) {
      case "name":
        if (name.length === 0) {
          setError("name", "Name is required");
        } else if (name.length < 3) {
          setError("name", "Name should be atleast 3 characters long");
        } else if (name.length > 50) {
          setError("name", "Name should be atmost 50 characters long");
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
          setError("name", "Name should only contain alphabets and spaces");
        } else {
          setNameError("");
          isValid = true;
        }
        break;
      case "email":
        if (email.length === 0) {
          setError("email", "Email is required");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          setError("email", "Email is invalid");
        } else {
          setEmailError("");
          isValid = true;
        }
        break;
      case "title":
        if (!title) {
          setError("title", "Title is required");
        } else {
          setTitleError("");
          isValid = true;
        }
        break;
      case "message":
        if (!message) {
          setError("message", "Message is required");
        } else {
          setMessageError("");
          isValid = true;
        }
        break;
      default:
        break;
    }

    return isValid;
  };

  const validateForm = () => {
    const nameIsValid = validateField("name");
    const emailIsValid = validateField("email");
    const titleIsValid = validateField("title");
    const messageIsValid = validateField("message");
    return nameIsValid && emailIsValid && titleIsValid && messageIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Send the form data
    const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScrKiaNy5Z1vG0cFcc6-nYlMkXqq0lhnmvXeRWTn91KrBDrMw/formResponse`;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("entry.1607478728", name);
    formData.append("entry.1250004895", email);
    formData.append("entry.2009023949", title);
    formData.append("entry.1826299485", message);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .catch(() => {})
      .finally(() => {
        setName("");
        setEmail("");
        setTitle("");
        setMessage("");
        setIsSubmitting(false);
        toast.success(
          "Awesome! Just received your message. I will contact you shortly",
          {
            icon: <>🚀</>,
          }
        );
      });
  };

  const handleChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
    validateField(field);
  };

  useEffect(() => {
    console.log(nameError, emailError, titleError, messageError);
  }, [nameError, emailError, titleError, messageError]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex gap-2 flex-col md:flex-row">
        <Input
          type="text"
          label="Name*"
          required
          value={name}
          onChange={(e) => handleChange("name", e.target.value)}
          errorMessage={nameError}
        />
        <Input
          type="email"
          label="Email*"
          required
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          errorMessage={emailError}
        />
      </div>
      <Input
        type="text"
        label="Title*"
        required
        value={title}
        onChange={(e) => handleChange("title", e.target.value)}
        errorMessage={titleError}
      />
      <Textarea
        label="Message*"
        required
        value={message}
        onChange={(e) => handleChange("message", e.target.value)}
        errorMessage={messageError}
      />
      <Button
        variant="shadow"
        color="warning"
        size="lg"
        type="submit"
        disabled={isSubmitting}
        isDisabled={isSubmitting}
      >
        {isSubmitting && <Spinner color="default" size="sm" />} Send
      </Button>
    </form>
  );
}

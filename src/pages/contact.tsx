import React from "react";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { PageProps } from "gatsby";

const ContactPage: React.FC<PageProps> = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const formBody = React.useCallback(
    (name: string, email: string, message: string, phone: string) => {
      return `My name is ${name}. My prefered email is ${email}. My phone number is ${phone}. \n\n ${message}.`;
    },
    []
  );
  return (
    <Page includeFooter includeHeader>
      <Section title="Contact Me">
        <div className="flex flex-1 items-center justify-center">
          <div className="max-w-md flex-1">
            <div className="grid grid-cols-1 gap-10">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input
                  type="text"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input
                  type="email"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Phone Number</span>
                <input
                  type="tel"
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea
                  className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                  rows={3}
                  placeholder="What can I help you with?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
              <a
                href={`mailto:kushalshah@flash.net?body=${formBody(
                  name,
                  email,
                  message,
                  phone
                )}&subject=Hello! Request to connect`}
                className="text-secondary bg-white hover:bg-secondary_hover outline-secondary outline focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 no-underline w-min whitespace-nowrap justify-self-end"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
};

export default ContactPage;

export const Head: React.FC = () => <title>Contact</title>;

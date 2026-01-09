"use client";
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { useState } from "react";

export default function App() {
  return <FAQ />;
}

const FAQ = () => {
  return (
    <div className="flex flex-col items-center justify-center w-fit shadow-lg  bg-white mt-30 mx-auto p-12 rounded-md ">
      <h1 className="text-[48.8px] text-gray-700 w-180 px-12  flex justify-center">
        Questions
      </h1>
      <div className="flex flex-col gap-6">
        <FaqRender faqData={faqData} />
      </div>
    </div>
  );
};

const FaqRender = ({ faqData }) => {
  return faqData.map((faq) => {
    const { id, question, answer } = faq;
    const [isClicked, setIsClicked] = useState(false);

    const toggleAnswer = () => {
      if (isClicked) {
        setIsClicked(false);
      } else {
        setIsClicked(true);
      }
    };

    return (
      <div key={id} className="flex gap-4 flex-col justify-items-start">
        <div className="flex flex-col text-[20px] shadow-lg inset-shadow-gray-300 rounded-md">
          <div className="flex justify-between text-[20px] text-gray-700 px-6 py-4 w-180 leading-normal font-medium ">
            <p>{question}</p>
            <button onClick={toggleAnswer}>
              {isClicked ? <CircleMinus size={32} /> : <CirclePlus size={32} />}
            </button>
          </div>
          <p className="flex  text-[16px] text-gray-500 px-6 pb-4 w-180 leading-normal font-medium ">
            {isClicked ? answer : ""}
          </p>
        </div>
      </div>
    );
  });
};

const faqData = [
  {
    id: 1,
    question: "Do I have to allow the use of cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixid cred kickstarter post-ironic street art.",
  },

  {
    id: 2,
    question: "How do I change my My Page password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },

  {
    id: 3,
    question: "What is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },

  {
    id: 4,
    question: "Whose birth number can I use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    question: "When do I recieve a password ordered by letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
  },
];

import Link from "next/link";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
    <div className="w-full max-w-6xl mt-16 mb-16 p-8 rounded-lg space-y-8">
      <h2 id="Prijzen" className=" text-3xl font-bold text-center mb-8">
        Prijzen
      </h2>
      <p className="text-center"></p>
      <div className="flex flex-wrap justify-center lg:space-x-4 space-y-4 lg:space-y-0 items-stretch">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col border rounded-lg p-4 w-full lg:w-1/4 ${option.bgColor}`}>
            <div className="flex-grow space-y-4">
              <h3 className="text-2xl font-semibold text-center">
                {option.title}
              </h3>
              <p className="text-4xl font-extrabold text-center mb-2">
                {option.price}
              </p>
              <p className="text-sm text-gray-600 text-center">
                {option.description}
              </p>
              <ul className="space-y-2 mb-4 pl-4">
                {option.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <div className="mt-10 text-center">
              <Link href="/login">
                {" "}
                <Button className="border  rounded-full h-12 px-6 m-2 text-lg text-white hover:bg-sky-700 bg-sky-600">
                  {option.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const pricingOptions = [
  {
    title: "1 Credit",

    price: "29€",
    description: "1 fotosessie voor 1 persoon.",
    features: [
      "1 fotosessie",
      "40 HD-foto's met AI",
      "Meer dan 20 stijlen",
      "Klaar in 60 minuten",
    ],
    buttonText: "Selecteer ",
    bgColor: "bg-white",
  },
  {
    title: "3 Credits",

    price: "59€ ",
    description: "3 fotosessies ook te gebruiken voor verschillende personen",
    features: [
      "3 fotosessies",
      "Elk 40 HD AI-foto's",
      "Meer dan 20 stijlen",
      "Klaar in 60 minuten",
    ],

    buttonText: "Selecteer ",
    bgColor: "bg-blue-50",
  },
  {
    title: "5 Credits",

    price: "99€",
    description: "5 fotosessies ook te gebruiken voor verschillende personen",
    features: [
      "5 fotosessies",
      "Elk 40 HD AI-foto's",
      "Meer dan 20 stijlen",
      "Klaar in 60 minuten",
    ],
    buttonText: "Selecteer ",
    bgColor: "bg-white",
  },
];

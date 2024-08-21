import Link from "next/link";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
    <div className="w-full max-w-6xl mt-16 mb-16 p-8 rounded-lg space-y-8">
      <h2 id="Precio" className=" text-3xl font-bold text-center mb-8">
        Precios
      </h2>
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
                <Button className="border rounded-full  h-12 px-6 m-2 text-lg text-white hover:bg-sky-700 bg-sky-600">
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

    price: "25€",
    description: "Perfecto para quienes buscan mejorar su presencia en línea.",
    features: [
      "1 sesión de fotos",
      "40 fotos HD con IA",
      "Más de 20 estilos",
      "Listo en 30 minutos",
    ],
    buttonText: "Comprar ",
    bgColor: "bg-white",
  },
  {
    title: "3 Credits",

    price: "55€ ",
    description:
      "Ideal para equipos pequeños de 3 personas que quieran mejorar su presencia online.",
    features: [
      "3 sesiones de fotos individuales",
      "40 fotos HD AI cada una",
      "Más de 20 estilos",
      "Listo en 30 minutos",
    ],

    buttonText: "Comprar ",
    bgColor: "bg-blue-50",
  },
  {
    title: "5 Credits",

    price: "95€",
    description:
      "Ideal para equipos de 5 personas que quieran mejorar su presencia online.",
    features: [
      "5 sesiones de fotos individuales",
      "40 fotos HD AI cada una",
      "Más de 20 estilos",
      "Listo en 30 minutos",
    ],
    buttonText: "Comprar ",
    bgColor: "bg-white",
  },
];

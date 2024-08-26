import voorbeeld1 from "/public/voorbeeld1.png";
import wazig1 from "/public/wazig1.png";
import resultaat1 from "/public/resultaat1.png";

export default function ExplainerSection() {
  return (
    <div
      id="Zo werkt het"
      className="w-full max-w-6xl mt-16  px-6 p-8 bg-gray-100 rounded-lg space-y-8">
      {/* Step 1: Upload your images */}{" "}
      <h2 className="text-3xl  font-bold text-center mb-8">Hoe werkt het?</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">
            Upload 4 tot 10 verschillende foto's.
          </h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          Zorg ervoor dat je gezicht in het midden van de foto is en dat je naar
          de camera kijkt. <br />
          Vermijd hoeden en zonnebrillen. Trek geen gekke gezichten(duckfaces
          etc) <br />
          Zorg voor gevarieerde foto's met verschillende achtergronden,
          <br />
          verschillende situaties, verschillende outfits, gemaakt op
          verschillende dagen.
          <br /> Zoals op het voorbeeld hieronder.
        </p>
        <img
          src={voorbeeld1.src}
          alt="AI Headshot example"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
      {/* Step 2: Train your model */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            2
          </div>
          <h3 className="text-2xl font-semibold">Onze AI gaat aan de slag</h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          De AI training duurt ongeveer 60 minuten, als deze klaar is ontvang je
          een e-mail,
          <br /> klik op de link in de e-mail.{" "}
        </p>
        <img
          src={wazig1.src}
          alt="AI Headshot blur"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
      {/* Step 3: Generate images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            3
          </div>
          <h3 className="text-2xl font-semibold">
            Selecteer je portretfoto's{" "}
          </h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          Je krijgt verschillende achtergronden, poses en stijlen. <br /> om de
          perfecte AI-portretfoto te kiezen
        </p>
        <img
          src={resultaat1.src}
          alt="AI Headshot result"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
}

import voorbeeld1 from "/public/voorbeeld1.png";
import wazig1 from "/public/wazig1.png";
import resultaat1 from "/public/resultaat1.png";

export default function ExplainerSection() {
  return (
    <div
      id="How"
      className="w-full scroll-smooth max-w-6xl mt-16 border-2 border-white  p-8 bg-black rounded-lg ">
      {/* Step 1: Upload your images */}{" "}
      <h2 className="text-3xl  font-bold text-center mb-8">
        How does it work?
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">
            Upload 4 to 10 different photos.{" "}
          </h3>
        </div>
        <p className="text-l text-white text-center">
          Make sure your face is in the center of the photo and that you are
          looking at the camera. <br />
          Avoid hats and sunglasses. Don't make funny faces (duck faces etc){" "}
          <br />
          Provide varied photos with different backgrounds, different
          situations, different outfits, made on taken on different days. <br />
          <br /> As in the example below.
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
          <h3 className="text-2xl font-semibold">Our AI gets to work</h3>
        </div>
        <p className="text-l text-white text-center">
          The AI ​​training takes approximately 60 minutes, when it is finished
          you will receive an email,
          <br /> click on the link in the email.{" "}
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
            Select your portrait photos{" "}
          </h3>
        </div>
        <p className="text-l text-white text-center">
          you get different backgrounds, poses and styles. <br /> to choose the
          perfect AI photo
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

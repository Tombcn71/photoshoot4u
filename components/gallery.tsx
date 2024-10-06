import Image from "next/image";
import Link from "next/link";
import React from "react";

const Gallery = () => {
  const data = [
    {
      link: "add link here",
      image: "/1.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/2.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/3.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/4.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },

    {
      link: "add link here",
      image: "/5.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/6.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/7.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/8.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/9.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/10.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/11.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/12.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/13.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/14.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/15.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: "/16.jpg",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
  ];
  return (
    <>
      <div className="pt-20">
        <div className="p-6 container mx-auto">
          <div className="py-2 pb-16">
            <h1 className="text-center font-semibold text-3xl">
              👉 Keuze uit verschillende thema packs.
            </h1>
          </div>
          <div className="container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {data.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="   rounded-2xl cursor-pointer">
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={600}
                        className="max-h-100 rounded-2xl w-full object-cover "
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

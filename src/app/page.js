"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

export default function Home() {
  const classesRef = useRef();

  useEffect(() => {
    const quotesWrapper = document.querySelector(".cust-quotes");
    if (!quotesWrapper) return;

    const getTimeout = (el) =>
      parseInt(el.getAttribute("data-timeout") || "8000", 10);

    const selectNextQuote = () => {
      const firstQuote = quotesWrapper.querySelector(
        "blockquote:first-of-type"
      );
      if (!firstQuote) return;

      // Move first quote to the end
      quotesWrapper.appendChild(firstQuote);

      setTimeout(selectNextQuote, getTimeout(firstQuote));
    };

    const firstQuote = quotesWrapper.querySelector("blockquote:first-of-type");
    if (firstQuote) {
      setTimeout(selectNextQuote, getTimeout(firstQuote));
    }
  }, []);

  return (
    <>
      <header className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-[var(--primary)]">
        <div className="self-center py-[2rem] order-2 md:order-1 flex flex-col items-center justify-center w-full md:w-2/4 px-[1rem] gap-[2rem]">
          <h1 className="text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--secondary)]">
            {/* Cooking Redefined */}
            Great Tasing Food and Top-tier Service
          </h1>
          <q className="text-2xl text-center italic text-[var(--secondary)]">
            {/* Best catering in ZW */}
            Wide variety of meals to choose from, to meet the needs and
            preferences of all our customers.
          </q>
          <button
            className="bg-[var(--secondary)] text-[var(--primary)] p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90"
            onClick={() =>
              classesRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join My Classes
          </button>
        </div>
        <video
          className="order-1 md:order-2 mx-auto w-full md:w-2/4"
          autoPlay
          loop
          muted
          plays-inline="true"
        >
          <source src="/images/videoplayback.mp4" type="video/mp4" />
        </video>
      </header>
      <section
        className="py-[1rem] px-[1rem] min-h-screen flex flex-col md:flex-row items-center"
        id="about"
      >
        <div className="chef-section w-full md:w-2/4 h-[80vh] md:max-h-[90vh]"></div>
        <div className="mt-[1rem] flex flex-col w-full md:w-2/4 justify-center gap-[2rem] self-start">
          <h2 className="text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--secondary)]">
            Meet The Celebrity Chef
          </h2>
          <p className="font-[family-name:var(--font-geist-sans)] text-center md:text-justify text-balance">
            Duslie Mudekwa is the Executive Chef and Owner of Dulsie Kys Cooking
            School. A pioneer in the culinary arts, she is renowned as an Edible
            Insects Chef and serves as the host of a popular TV cooking show.
            She also presents{" "}
            <a
              href="https://www.facebook.com/ztvmenu/about"
              className="underline"
              target="_blank"
            >
              The Menu
            </a>{" "}
            on radio and is the Founder of Dulsie Investment Pvt Ltd. Dulsie
            holds an MBA in Global Entrepreneurship from the Catholic University
            of Zimbabwe and an additional Master of Business Administration from
            the Catholic University of Italy.
          </p>
          <h2 className="text-center font-[family-name:var(--font-aclonica)] text-2xl md:text-4xl text-[var(--secondary)]">
            Accomplishments
          </h2>
          <ul className="font-[family-name:var(--font-geist-sans)] list-disc pl-6 md:pl-4 text-lg font-bold">
            <li>
              <a
                className="underline hover:no-underline hover:text-[var(--primary)]"
                target="_blank"
                href="https://www.zbcnews.co.zw/zim-cook-book-scoops-international-award/"
              >
                International Cook Book Award (Edible Insects: Food for the
                Future)
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline hover:text-[var(--primary)]"
                target="_blank"
                href="https://www.herald.co.zw/restaurants-embrace-first-ladys-traditional-foods-call/"
              >
                ENDORSEMENT BY 1ST LADY-"Embracing Traditional Dishes"
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="cooking-school" className="p-[1rem]" ref={classesRef}>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-2/4 flex flex-col items-center self-center">
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--secondary)] text-center">
              Cooking School Programs
            </h2>
            <div className="my-[2rem] flex flex-col font-[family-name:var(--font-aclonica)] text-xl text-[var(--secondary)] gap-[1rem]">
              <p className="uppercase">Short course: 6 weeks</p>
              <p className="uppercase">Full course: 8 months</p>
            </div>
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--primary)]">
              Programs
            </h2>
            <ol className="pl-8 list-decimal text-[var(--primary)] font-semibold my-[1rem]">
              <li>Cookery and kitchen management - $180</li>
              <li>Bakery Studies - $180</li>
              <li>Cake Making and Design - $150</li>
              <li>Cookery and Baking - $180</li>
            </ol>
            <p className="my-[1rem] font-[family-name:var(--font-aclonica)] text-[var(--primary)]">
              $50 registration and uniforms
            </p>
            <a
              href="tel:0774510544"
              className="uppercase my-[1rem] font-[family-name:var(--font-aclonica)] text-[var(--secondary)] hover:underline"
            >
              Register 0774510544
            </a>
          </div>
          <div className="w-full md:w-2/4 school-banner min-h-[90vh]"></div>
        </div>
        <h2 className="my-[2rem] md:my-[1rem] text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--primary)]">
          Become a Trained Professional
        </h2>
        <div className="flex flex-col md:flex-row justify-center md:gap-[3rem]">
          <div className="w-full md:w-2/4 school-banner-2 min-h-[50vh] md:min-h-[90vh]"></div>
          <div className="pt-[2rem] md:pt-0 w-full md:w-2/4 flex flex-col items-center self-center">
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--secondary)]">
              Hotel & Catering Management
            </h2>
            <p className="my-[2rem] flex flex-col font-[family-name:var(--font-geist-sans)] text-xl text-[var(--primary)] gap-[1rem] text-center text-balance">
              Dulsie-kys catering school has partnered with H.T.S College to
              bring you an internationally recognized certificate in Hotel and
              Catering attainable over a 6 month course.
            </p>
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--primary)]">
              Requirements
            </h2>
            <ol className="pl-8 list-decimal text-[var(--primary)] font-semibold my-[1rem]">
              <li>Counter books per module</li>
              <li>Black and White Formal Uniform</li>
              <li>Apron and Chef Jacket (Provided by us)</li>
            </ol>
            <p className="my-[1rem] text-[var(--primary)]">
              Accommodation available for out of town residents.
            </p>
          </div>
        </div>
        <div className="student w-full min-h-[40vh] md:min-h-[70vh]"></div>
        <a
          className="mx-auto block max-w-[15rem] text-center bg-[var(--primary)] text-white p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90 mt-[4rem]"
          href="https://api.whatsapp.com/send?phone=263774510544&text=Hi, I'd like to register for your cooking school."
          target="_blank"
        >
          Get In Touch
        </a>
      </section>
      <section
        id="testimonials"
        className="my-[2rem] mx-auto overflow-hidden p-[1rem]"
      >
        <h2 className="my-[1rem] text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--primary)]">
          Hear what others had to say&hellip;
        </h2>
        <div className="cust-quotes min-h-[70vh] md:min-h-[50vh]">
          {[
            {
              text: "She's so patient with students and makes sure you perfect your skill...Great work Dulsie and team",
              name: "Joy Gombera",
            },
            {
              text: "Very patient with her students, I really enjoyed her classes excellent!!",
              name: "Regina Zhakata",
            },
            {
              text: "We call her Dee Cakes!!!! This woman is amazing at what she does... To those who can, take advantage!! She's knows her stuff... Keep it up Dulsie👏🏿👏🏿👏🏿👊🏿👊🏿👊🏿",
              name: "Dereck Mukuku",
            },
            {
              text: "The best of the best. She makes food speak languages, the languages of heaven.",
              name: "Tinashe Bvirindi",
            },
            {
              text: "It is a top choice for future chefs and food lovers. This outstanding cooking school provides a wide variety of classes for all skill levels, from beginners to advanced cooks. With a strong emphasis on hands-on experience, students participate in practical sessions that focus on technique, creativity, and flavor enhancement.",
              name: "Su San",
            },
            {
              text: "The only place to be in Harare when you want to demystify cooking. I learnt a lot in a group of beginners like myself.",
              name: "Adama Konseiga",
            },
          ].map((item, index) => (
            <blockquote
              data-timeout="8000"
              key={index}
              className="w-full md:w-3/4 bg-[var(--secondary)] rounded-md p-2"
            >
              <p>
                <span className="inline md:hidden text-black">
                  {item.text.slice(0, 200)}
                  {item.text.length > 200 ? "..." : ""}
                </span>
                <span className="hidden md:inline text-black">{item.text}</span>
              </p>
              <cite className="text-[var(--primary)] font-bold">
                ~{item.name}
              </cite>
            </blockquote>
          ))}
        </div>
        <a
          href="https://www.google.com/search?q=dulsie+kys+cooking+school&rlz=1C1CHZO_enZW1044ZW1044&oq=dulsie+kys+cooking+school&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDg0NjZqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x1931b1f34847a105:0xee61d0d757f50663,1,,,,"
          target="_blank"
          className="mx-auto block max-w-[15rem] text-center bg-[var(--secondary)] text-white p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90"
        >
          Read More Reviews
        </a>
      </section>
      <section
        id="specialties"
        className="py-[2rem] px-[1rem] bg-[var(--secondary)]"
      >
        <h2 className="my-[1rem] text-center font-[family-name:var(--font-aclonica)] text-4xl md:text-6xl text-[var(--primary)]">
          Specialties
        </h2>
        {[
          {
            name: "Birthday Cakes",
            image: "/images/birthday.jpg",
            description:
              "Celebrate your special day with custom-made birthday cakes, crafted with love and the finest ingredients. From classic favorites to creative themes, every cake is a centerpiece to remember.",
          },
          {
            name: "Corporate Catering",
            image: "/images/2024-03-05.jpg",
            description:
              "Impress clients and reward your team with professional corporate catering services. With a variety of menu options tailored to business breakfasts, luncheons, meetings, and large-scale events.",
          },
          {
            name: "Wedding Catering",
            image: "/images/2022-06-08.jpg",
            description:
              "Make your big day unforgettable with elegant wedding catering. From intimate gatherings to grand celebrations, delicious food served with exceptional presentation and warm hospitality.",
          },
          {
            name: "Galas & Luncheons",
            image: "/images/galas.jpg",
            description:
              "Host a sophisticated gala or a stylish luncheon with expertly curated menus and flawless service. With a touch of class to every plate, ensuring your guests are treated to a delightful culinary experience.",
          },
          {
            name: "Breakfast Meetings",
            image: "/images/breakfast.png",
            description:
              "Start your day right with energizing breakfast catering, perfect for early meetings and networking events. Choose from a range of wholesome and indulgent options to fuel productivity and conversation.",
          },
          {
            name: "Anniversary Catering",
            image: "/images/2023-03-10.jpg",
            description:
              "Celebrate lasting love and cherished milestones with personalized anniversary catering. Whether it’s a romantic dinner or a family celebration, the menus and moments are to remember.",
          },
        ].map((item, index) => (
          <div
            className="flex flex-col md:flex-row gap-[2rem] items-center justify-between w-full my-[4rem] min-h-[50vh] md:px-[2rem]"
            key={index}
          >
            <div
              className={`w-full md:w-2/4 flex flex-col gap-[1rem] text-[var(--primary)] ${
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              }`}
            >
              <h3
                className={`font-[family-name:var(--font-aclonica)] text-3xl`}
              >
                {item.name}
              </h3>
              <p className="font-serif text-xl">{item.description}</p>
              <Link
                href="/gallery"
                target="_blank"
                className="mt-[1rem] block w-full md:max-w-[10rem] text-center bg-[var(--primary)] text-white p-4 rounded-2xl text-lg cursor-pointer hover:opacity-90"
              >
                View Gallery
              </Link>
            </div>
            <Image
              src={item.image}
              className={`w-full md:w-2/4 md:max-w-[25rem] max-h-[80vh] rounded-lg object-contain ${
                index % 2 !== 0 ? "md:order-2" : "md:order-1"
              }`}
              alt={item.name}
              width={150}
              height={150}
            />
          </div>
        ))}
        <a
          className="mx-auto block max-w-[15rem] text-center bg-[var(--primary)] text-white p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90"
          href="https://api.whatsapp.com/send?phone=263774510544&text=Hi, I'd like your catering services."
          target="_blank"
        >
          Get In Touch
        </a>
      </section>
    </>
  );
}

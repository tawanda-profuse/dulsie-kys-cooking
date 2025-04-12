"use client";
import { useRef } from "react";

export default function Home() {
  const classesRef = useRef();

  return (
    <>
      <header className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-[var(--primary)]">
        <div className="self-center py-[2rem] order-2 md:order-1 flex flex-col items-center justify-center w-full md:w-2/4 gap-[2rem]">
          <h1 className="text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--secondary)]">
            Cooking Redefined
          </h1>
          <q className="text-2xl italic text-[var(--secondary)]">
            Best catering in ZW
          </q>
          <button
            className="bg-[var(--secondary)] text-white p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90"
            onClick={() =>
              classesRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Join Our Classes
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
        className="py-[1rem] px-[1rem] md:px-0 min-h-screen flex flex-col md:flex-row"
        id="about"
      >
        <div className="chef-section w-full md:w-2/4 h-[80vh] md:max-h-[90vh]"></div>
        <div className="my-[2rem] flex flex-col w-full md:w-2/4 justify-center gap-[2rem]">
          <h2 className="text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--secondary)]">
            Meet Our Celebrity Chef
          </h2>
          <p className="font-[family-name:var(--font-geist-sans)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a unde
            quia molestiae repellat earum dicta optio, tenetur natus placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ut.
          </p>
          <h2 className="text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--secondary)]">
            Accomplishments
          </h2>
          <ul className="font-[family-name:var(--font-geist-sans)] list-disc pl-4">
            <li>
              <a
                className="underline hover:no-underline hover:text-[var(--primary)]"
                target="_blank"
                href="https://www.zbcnews.co.zw/zim-cook-book-scoops-international-award/"
              >
                International Cook Book Award
              </a>
            </li>
            <li>
              <a
                className="underline hover:no-underline hover:text-[var(--primary)]"
                target="_blank"
                href="https://www.herald.co.zw/restaurants-embrace-first-ladys-traditional-foods-call/"
              >
                Endorsement by the First Lady of Zimbabwe
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="cooking-school" className="p-[1rem]" ref={classesRef}>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-2/4 flex flex-col items-center self-center">
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--secondary)]">
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
        <h2 className="my-[1rem] text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--primary)]">
          Become a Trained Professional
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-[1rem]">
          <div className="w-full md:w-2/4 school-banner-2 min-h-[90vh]"></div>
          <div className="w-full md:w-2/4 flex flex-col items-center self-center">
            <h2 className="font-[family-name:var(--font-aclonica)] text-3xl text-[var(--secondary)]">
              Hotel & Catering Management
            </h2>
            <p className="my-[2rem] flex flex-col font-[family-name:var(--font-geist-sans)] text-xl text-[var(--primary)] gap-[1rem]">
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
        <div className="student w-full h-[70vh]"></div>
      </section>
      <section id="contact"></section>
    </>
  );
}

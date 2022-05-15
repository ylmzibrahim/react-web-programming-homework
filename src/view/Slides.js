import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";
import variables from "../assets/variables/variables";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Slides = ({ lessons, lessonName }) => {
  // Slide properties
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows: true,
    prevArrow: (
      <ChevronLeftIcon className="w-10 fill-white absolute bg-slate-300/40 rounded-full pr-2 ml-1 cursor-pointer hover:bg-slate-500/40" />
    ),
    nextArrow: (
      <ChevronRightIcon className="w-10 fill-white absolute bg-slate-300/40 rounded-full pl-2 mr-1 right-0 cursor-pointer hover:bg-slate-500/40" />
    ),
    indicators: true,
    indicators: (i) => (
      <div className="indicator w-4 h-4 rounded-full cursor-pointer mx-1 bg-slate-300/40 -mt-12 z-10" />
    ),
  };

  return (
    <div className="">
      <div>
        <Slide {...properties} className="relative">
          {lessons.map((lesson, index) => {
            if (lesson.lesson === lessonName) {
              return (
                <Link
                  to={`/konu-anlatim?ders=${lesson.lesson}&unite=${lesson.unit}`}
                  key={index}
                >
                  <div>
                    <div className="gradient-background p-5 xs:p-3 rounded-full rounded-bl-none absolute text-white text-xl xs:text-base font-bold font-mono z-30">
                      {lesson.lesson.toUpperCase().replace("-", " ")}
                    </div>
                    <div className="aspect-[5/2] bg-cover bg-no-repeat bg-center relative rounded-t-3xl bg-gradient-to-tr from-pink-100 to-sky-200">
                      <div className="w-full pt-16 flex flex-col items-center justify-end">
                        <h1 className="text-slate-800">
                          {lesson.title.toUpperCase()}
                        </h1>
                        <p className="text-slate-600">{lesson.unit}. Ünite</p>
                      </div>
                      <div className="w-full bg-gradient-to-t from-transparent via-sky-200 to-transparent p-16 ">
                        <p>
                          {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur atque accusantium modi tempora aspernatur blanditiis! Labore natus dicta repellendus distinctio? Eius, neque cum? Neque aliquid quas possimus tempore, ad corrupti labore? Libero cumque ducimus dolores rerum eligendi aliquid officiis quam magni numquam quis architecto est aliquam alias qui ipsam quae quas labore, cupiditate, magnam tempore! Fugit, non nihil amet quod nulla similique saepe reiciendis optio at ex voluptas praesentium odio asperiores commodi sed animi id rem! Nihil, aspernatur! Magni dolore quis sint asperiores unde eum ut, accusamus sed numquam atque? Numquam sit quisquam eos adipisci, corporis architecto, nemo quae ullam veritatis incidunt blanditiis vel quas aliquid assumenda modi in voluptates magni, rem nisi natus laboriosam velit possimus accusamus. Sed deleniti architecto aperiam sequi tenetur, soluta perspiciatis reprehenderit quaerat nihil non ullam beatae rem consectetur. Ipsum dolorem quis reiciendis iusto omnis quisquam facere dignissimos et corrupti, harum in, fugiat blanditiis odio placeat beatae unde amet molestiae? Modi, repudiandae incidunt corporis quam voluptatibus similique dignissimos. Veritatis, doloribus? Fuga dolorem optio, quaerat repellat dolorum inventore perferendis incidunt ullam blanditiis ipsa, provident assumenda amet dolore libero vitae non et iste! Illum, hic, rem eius recusandae doloremque saepe perferendis neque reiciendis et necessitatibus molestiae sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corporis amet soluta ipsum voluptatum maiores voluptas magnam architecto mollitia veniam ab fugiat dolorum odit doloremque consequatur expedita quas voluptatibus perspiciatis deleniti, laudantium aliquid odio. Delectus, dolores qui? Voluptatum a inventore eaque repellendus nihil quidem deserunt placeat praesentium dolores facilis omnis dicta consequuntur corrupti suscipit officiis, neque natus laboriosam aliquid nisi, quo vitae? Molestiae, velit! Quidem adipisci rem dicta impedit natus hic maiores dignissimos a? Facere ipsa illum nulla maxime, aperiam facilis debitis aliquam fuga maiores perferendis voluptatibus corrupti illo? Eum labore, ipsam quis quo debitis quasi facere accusamus. Magni, dolorem!".substring(
                            0,
                            400
                          )}
                        </p>
                      </div>
                      <div className="w-full pb-10 flex items-center justify-center">
                        <button className="px-5 py-3 bg-gradient-to-t from-transparent via-white to-transparent shadow-xl z-10 rounded-xl">
                          Devamını Oku
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Slides;

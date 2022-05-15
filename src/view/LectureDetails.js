import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import variables from "../assets/variables/variables";
import Navbar from "./Navbar";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const LectureDetails = () => {
  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }
  let query = useQuery();

  const [lessons] = useState(variables.lessons);
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    if (lessons.length !== 0) {
      lessons.map((data) => {
        if (
          data.lesson === query.get("ders") &&
          data.unit === query.get("unite")
        )
          setLesson(data);
      });
    }
  }, [lessons]);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <div className="max-w-screen-lg p-3 w-full mx-auto flex flex-col items-center justify-start pt-10">
        {lesson === null && <p>Yükleniyor...</p>}
        {lesson !== null && (
          <div>
            <div className="flex flex-col">
              <div className="font-bold xs:font-semibold bg-gradient-to-tr from-pink-500/90 to-sky-500/90 px-5 xs:px-3 py-3 xs:py-2 left-0 absolute text-white w-fit ml-auto rounded-r-xl">
                <h1 className="xs:text-base">
                  {lesson.lesson.toUpperCase().replace("-", " ")}
                </h1>
                <h3 className="text-left xs:text-sm">{lesson.unit}. Ünite</h3>
              </div>
              <div className="rounded-xl mt-16">
                <div className="w-full h-1/4 flex flex-col items-center justify-center">
                  <h1 className="text-slate-800">
                    {lesson.title.toUpperCase()}
                  </h1>
                </div>
                <div className="w-full p-5 xs">
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur atque accusantium modi tempora aspernatur blanditiis! Labore natus dicta repellendus distinctio? Eius, neque cum? Neque aliquid quas possimus tempore, ad corrupti labore? Libero cumque ducimus dolores rerum eligendi aliquid officiis quam magni numquam quis architecto est aliquam alias qui ipsam quae quas labore, cupiditate, magnam tempore! Fugit, non nihil amet quod nulla similique saepe reiciendis optio at ex voluptas praesentium odio asperiores commodi sed animi id rem! Nihil, aspernatur! Magni dolore quis sint asperiores unde eum ut, accusamus sed numquam atque? Numquam sit quisquam eos adipisci, corporis architecto, nemo quae ullam veritatis incidunt blanditiis vel quas aliquid assumenda modi in voluptates magni, rem nisi natus laboriosam velit possimus accusamus. Sed deleniti architecto aperiam sequi tenetur, soluta perspiciatis reprehenderit quaerat nihil non ullam beatae rem consectetur. Ipsum dolorem quis reiciendis iusto omnis quisquam facere dignissimos et corrupti, harum in, fugiat blanditiis odio placeat beatae unde amet molestiae? Modi, repudiandae incidunt corporis quam voluptatibus similique dignissimos. Veritatis, doloribus? Fuga dolorem optio, quaerat repellat dolorum inventore perferendis incidunt ullam blanditiis ipsa, provident assumenda amet dolore libero vitae non et iste! Illum, hic, rem eius recusandae doloremque saepe perferendis neque reiciendis et necessitatibus molestiae sed!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corporis amet soluta ipsum voluptatum maiores voluptas magnam architecto mollitia veniam ab fugiat dolorum odit doloremque consequatur expedita quas voluptatibus perspiciatis deleniti, laudantium aliquid odio. Delectus, dolores qui? Voluptatum a inventore eaque repellendus nihil quidem deserunt placeat praesentium dolores facilis omnis dicta consequuntur corrupti suscipit officiis, neque natus laboriosam aliquid nisi, quo vitae? Molestiae, velit! Quidem adipisci rem dicta impedit natus hic maiores dignissimos a? Facere ipsa illum nulla maxime, aperiam facilis debitis aliquam fuga maiores perferendis voluptatibus corrupti illo? Eum labore, ipsam quis quo debitis quasi facere accusamus. Magni, dolorem!"
                    }
                  </p>
                </div>
              </div>
            </div>
            <Link to={`/test?ders=${query.get("ders")}`} className="w-full flex justify-end mt-5">
              <div className="flex flex-row bg-gradient-to-tr from-green-500 to-teal-500 text-white text-lg font-semibold pl-5 pr-3 py-2 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all">
                Teste Git
                <ChevronRightIcon className="ml-2 w-7" />
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LectureDetails;

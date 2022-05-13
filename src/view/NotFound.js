import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="pt-56 bg-white font-sans">
      <div className="bg-center">
        <div>
          <div className="grid col-span-full ">
            <div className="text-center bg-center">
              <div className="bg-no-repeat h-96 bg-center bg-[url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')]">
                <p className="font-sans text-center font-bold text-7xl">404</p>
              </div>
              <div className="-mt-16">
                <div className="mt-5">
                  <p className="font-sans text-2xl font-semibold">Kaybolmuş gibi görünüyorsun</p>
                  <p className="font-sans text-lg ">Aradığınız sayfa bulunamadı!</p>
                </div>

                <Link to={"/"} className="text-white py-3 px-5 bg-green-500 my-5 mx-0 inline-block font-bold font-sans">
                  Anasayfa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

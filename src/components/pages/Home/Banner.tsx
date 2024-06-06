import Wrapper from "@/components/share/Wrapper";
import React from "react";

const Banner = () => {
  return (
    <div>
      <>
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/75 bg-transparen from-white/40 to-white/10  ltr:bg-gradient-to-r rtl:bg-gradient-to-l" />
          <Wrapper>
            <div className="relative mx-auto py-8  lg:flex h-full lg:h-[calc(100vh_-_100px)] justify-center lg:items-center lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 justify-between">
                <div className="w-full lg:w-[45%] order-2 lg:order-1 text-cente">
                  <h1 className="text-3xl text-center lg:text-start font-extrabold lg:text-5xl tracking-wide">
                    Your Seamless Gateway to Stress Free Hotel
                    <strong className="block font-extrabold text-rose-700">
                      {" "}
                      Reservations
                    </strong>
                  </h1>
                  <p className="mt-4 max-w-lg text-center lg:text-start sm:text-xl/relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt illo tenetur fuga ducimus numquam ea!
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 text-center">
                    <a
                      href="#"
                      className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                      Get Started
                    </a>
                    <a
                      href="#"
                      className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="lg:w-[50%] order-1 lg:order-2 lg:block">
                  <div className="bg-[#B7A6A3] bb backdrop-blur-sm border p-4 md:px-8 md:py-12 rounded-lg shadow shadow-primary-100 max-w-4xl  ">
                    <h2 className="text-xl lg:text-4xl font-semibold">
                      Find Your Room
                    </h2>
                    <form className="flex flex-col gap-3">
                      <div className="flex mt-1 flex-col gap-y-1">
                        <label
                          className="text-[13px] text-slate-800 font-semibold"
                          htmlFor="location"
                        >
                          Select Your Destination
                        </label>
                        <select
                          id="location"
                          name="location"
                          className="bg-secondary-50  border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-[#E11D48] focus:border-[#E11D48] block w-full p-2.5 "
                        >
                          <option value="" selected>
                            Choose a Location
                          </option>
                          <option value="Beverly Hills, CA">
                            Beverly Hills, CA (1)
                          </option>
                          <option value="Coxsbazar">Coxsbazar (7)</option>
                          <option value="Dhaka">Dhaka (1)</option>
                          <option value="Dubai, United Arab Emirates">
                            Dubai, United Arab Emirates (1)
                          </option>
                          <option value="Macau">Macau (1)</option>
                          <option value="Moulvibazar">Moulvibazar (1)</option>
                          <option value="New York City, NY">
                            New York City, NY (1)
                          </option>
                          <option value="Paris, France">
                            Paris, France (1)
                          </option>
                          <option value="Rangamati">Rangamati (1)</option>
                        </select>
                      </div>

                      <div className="flex w-ful gap-3">
                        <div className="flex flex-col w-full gap-y-1">
                          <label
                            className="text-[13px] text-slate-800 font-semibold"
                            htmlFor="date"
                          >
                            Check In Date
                          </label>
                          <input
                            type="date"
                            className="w-full py-2 rounded-md px-4 "
                          />
                        </div>
                        <div className="flex flex-col w-full gap-y-1">
                          <label
                            className="text-[13px] text-slate-800 font-semibold"
                            htmlFor="date"
                          >
                            Check Out Date
                          </label>
                          <input
                            type="date"
                            className="w-full py-2 rounded-md px-4 "
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="px-5 mt-4 py-3 text-base bg-[#E11D48] font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Wrapper>
        </section>
      </>
    </div>
  );
};

export default Banner;

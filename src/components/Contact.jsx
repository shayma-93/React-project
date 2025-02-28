import React from "react";

const Contact = () => {
  return (
    <div className="h-full py-6 sm:py-8 lg:py-12 bg-[url(https://cdn3.vectorstock.com/i/1000x1000/68/32/sale-fashion-shopping-background-or-frame-vector-28196832.jpg)] bg-cover bg-center overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 font-akaya-kanadaka underline decoration-wavy decoration-[#fff350] text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Get in touch
          </h2>

          <p className="mx-auto max-w-screen-md font-akaya-kanadaka text-center text-gray-500 md:text-lg">
            "Your Feedback Matters!" Whether you have questions, suggestions, or
            just want to say hello, we're always here to listen. Drop us a
            message and we'll be happy to assist you!.
          </p>
        </div>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name*
            </label>
            <input
              name="first-name"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#ec79b1] transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name*
            </label>
            <input
              name="last-name"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#ec79b1] transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#ec79b1] transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Subject*
            </label>
            <input
              name="subject"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#ec79b1] transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Message*
            </label>
            <textarea
              name="message"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-[#ec79b1] transition duration-100 focus:ring-[#ec79b1] focus:border-[#ec79b1]"
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agreeNewsletter"
              name="newsletter"
              className="h-4 w-4 border-[#fdbdb5] text-[#fdbdb5] focus:ring-[#fdbdb5] peer"
            />
            <p className="text-xs text-gray-400">
              By signing up to our newsletter you agree to our
              <a
                href="#"
                className="underline transition duration-100 hover:text-[#fdbdb5] active:text-[#fdbdb5]"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="inline-block font-lobster-two rounded-lg bg-[#fdbdb5] px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-[#fdbdb5] transition duration-100 hover:bg-[#ffd6d1] focus-visible:ring active:bg-[#ffd6d1] md:text-black">
              Send
            </button>
            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

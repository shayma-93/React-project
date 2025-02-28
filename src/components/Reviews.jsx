import React from "react";
import StarRating from "./StarRating";

const Reviews = () => {
  return (
    <div className="bg-white py-0 sm:py-0 lg:py-0 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 font-akaya-kanadaka underline decoration-wavy decoration-[#a0e0e9] text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
          Customer Reviews
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                phoebe Buffay
              </span>
              <span className="block text-sm text-gray-500">July 18, 2024</span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              <StarRating rating={5} />
            </div>

            <p className="text-gray-600">
              "Amazing shopping experience!I found everything I needed and more
              in no time. The product quality exceeded my expectations, and
              shipping was fast. Definitely my go-to store for future
              purchases!"
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                Monica Geller
              </span>
              <span className="block text-sm text-gray-500">
                January 21, 2025
              </span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              <StarRating rating={5} />
            </div>

            <p className="text-gray-600">
              "Top-notch service and fast delivery! I love the variety of
              products available and the detailed descriptions. My order arrived
              right on time, and everything was packed securely. Couldn't be
              happier with my purchase!"
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border p-4 md:p-6">
            <div>
              <span className="block text-sm font-bold md:text-base">
                Rachel Green
              </span>
              <span className="block text-sm text-gray-500">
                December 16, 2024
              </span>
            </div>

            <div className="-ml-1 flex gap-0.5">
              <StarRating rating={4} />
            </div>

            <p className="text-gray-600">
              "Great products, but shipping took longer than expected. I am very
              happy with my items—they're exactly what I was looking for. The
              only downside was the delivery took a little longer than
              anticipated. But overall, I’m satisfied and will shop here again!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

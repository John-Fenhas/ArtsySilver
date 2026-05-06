import { useEffect } from "react";
import getPrice from "../../utils/formatPrice";
import CollapsibleBlock from "../../components/ui/CollapsibleBlock";

export default function ProductInfo({ productData, isLoading }) {
  if (isLoading) {
    console.log("Loading");
    return;
  }
  console.log(productData);
  return (
    <div className="w-max min-w-11/12 max-w-full">
      <div className="border-b border-gray-300 pb-6 mb-12">
        <span className="text-3xl font-normal block pb-6">
          {productData.name}
        </span>
        {productData.is_on_sale ? (
          <>
            <span className="text-red-500 text-xl">
              {getPrice(productData.old_price_in_cents)}
            </span>
            <span className="text-sm line-through decoration-1 px-3">
              {getPrice(productData.price_in_cents)}
            </span>
          </>
        ) : (
          <span className="text-xl font-normal">
            {getPrice(productData.price_in_cents)}
          </span>
        )}
      </div>
      <div className="flex gap-1.5">
        <svg
          width="16px"
          height="16px"
          viewBox="0 -0.5 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
              fill="#f4bc2f"
            ></path>{" "}
          </g>
        </svg>
        <span className="text-sm font-medium">
          {productData.rating_stars} ( {productData.rating_count} review )
        </span>
      </div>
      <div className="py-10">
        <div className="flex items-center gap-3 py-1.5 space">
          <img src="https://img.icons8.com/ios-filled/24/000000/delivery.png" />
          <span className="font-semibold">Same Day Delivery</span>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <img src="https://img.icons8.com/ios-filled/24/000000/security-checked.png" />
          <span className="font-semibold">3-Month Warranty</span>
        </div>
        <div className="flex items-center gap-3 py-1.5">
          <img src="https://img.icons8.com/ios-filled/24/000000/return.png" />
          <span className="font-semibold">14-Days Easy Exchange & Refund</span>
        </div>
      </div>
      <div className="pb-12">
        <span className="block text-xs font-medium">Quantity:</span>
        <div className="flex items-center py-2">
          <div className="flex justify-center items-center h-12 w-12 text-4xl rounded-s-2xl border border-gray-300 border-r-0">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12L18 12"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <span className="flex justify-center items-center text-sm h-12 px-4 border-y border-gray-300">
            34
          </span>
          <div className="flex justify-center items-center h-12 w-12 text-2xl rounded-e-2xl border border-gray-300 border-l-0">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center bg-[rgb(197,194,194)] h-14 rounded-3xl font-bold text-sm mb-3">
          ADD TO CART
        </div>
        <div className="flex justify-center items-center bg-black h-14 rounded-3xl font-bold text-sm text-white my-3">
          BUY IT NOW
        </div>
      </div>
      <div>
        <CollapsibleBlock title={"Description & Material"}>
          <p className="text-xs pb-6">
            Fresh, luminous, and effortlessly elegant, the Emerald Whisper
            Necklace & Bracelet Set showcases a delicate line of vibrant
            emerald-green stones set in sterling silver, forming a graceful
            tennis design that highlights both the neckline and wrist.
          </p>

          <ul className="text-xs pl-5 list-disc">
            <li className="py-3">Premium 925 Sterling Silver.</li>
            <li className="py-3">
              All our products are stamped with silver 925 from the Egyptian
              stamp Authority.
            </li>
            <li className="py-3">
              Enjoy a complimentary jewelry box, bag, stone card, and gift card
              with every purchase.
            </li>
            <li className="py-3">Enjoy a free in-store exchange.</li>
          </ul>
        </CollapsibleBlock>
        <CollapsibleBlock title={"Jewelry Care"}>
          <ul className="text-xs pl-5 list-disc">
            <li className="py-3 text-sm">
              Keep your jewelry away from chemicals like (perfumes, lotions,
              hand sanitizer, etc.) which may cause a color change.
            </li>
            <li className="py-3">
              Remove your jewelry before sleeping or physical exercise to avoid
              any damages as we may move a lot.
            </li>
            <li className="py-3">
              Remove your jewelry before showering & swimming to keep your
              jewelry shiny.
            </li>
            <li className="py-3">
              Wipe your jewelry with a soft cloth occasionally for more shining.
            </li>
          </ul>
        </CollapsibleBlock>
        <CollapsibleBlock title={"Warranty Policy"}>
          <p className="text-xs py-5">
            At Artsy Silver, quality always comes first. Each piece is made from
            925 sterling silver, handcrafted with love, and designed to shine
            with you for years. For extra peace of mind, we offer a 3-month
            repair warranty that covers any manufacturing defects. Your jewelry
            is in good hands always.
          </p>
          <p className="text-xs py-5">
            Even after your 3-month warranty ends, we’re still here for you.
            Repairs and maintenance are available for a small fee, based on your
            piece’s condition.
          </p>
          <p className="text-xs py-5">
            Please note: The warranty does not cover misuse, damage, or loss.
          </p>
        </CollapsibleBlock>
        <CollapsibleBlock>
          <ul className="text-xs pl-5 list-disc">
            <li className="py-3">
              We offer easy returns & exchange within 14 days after the delivery
              date.
            </li>
            <li className="py-3">
              To be eligible for a return & exchange, your item must be in the
              same condition that you received it, unworn or unused, and in its
              original packaging. You’ll also need the receipt or proof of
              purchase.
            </li>
            <li className="py-3">
              In case of any missing part of the products or the packaging, the
              courier can not pick up the items from your side
            </li>
            <li className="py-3">
              In case of refunding for no reason or just changing your mind, the
              order can be returned but subjected to return fees to be paid by
              the customer.
            </li>
            <li className="py-3">
              In case of a manufacturing fault and the item cannot be replaced
              or mended you get a full free refund within 2-4 working days from
              the request.
            </li>
            <li className="py-3">
              In case of paying online through a debit or credit card, the
              amount will be transferred within 7-14 days according to your
              bank.
            </li>
            <li className="py-3">
              For COD orders exceeding 2k,refunds will be processed through
              online banking.{" "}
            </li>
          </ul>
          <p className="text-xs ">
            For more information or return & exchange requests kindly contact us
            on our Facebook or Instagram page.
          </p>
        </CollapsibleBlock>
      </div>
      <div className="flex">
        <div>
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
            </g>
          </svg>
        </div>
        <div>
          <svg
            fill="#000000"
            width="64px"
            height="64px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
              <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
            </g>
          </svg>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function GoogleReviewsSection({ data }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!data) return null;

  const {
    averageRating,
    totalReviews,
    googleProfileUrl,
    reviews = [],
  } = data;

  const renderStars = (rating) => {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
  };

  return (
    <section className="bg-paper border-t border-black/10">
      <div className="container-page py-14 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] opacity-55">
              Reviews from Google
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              What Families Say
            </h2>
            <p className="mt-4 text-base leading-relaxed opacity-80">
              Kind words from families who worked with The Prepared Birth in Tacoma
              and the surrounding Puget Sound area.
            </p>
          </div>

          <div className="rounded-xl2 border border-black/10 bg-white px-5 py-4 shadow-soft md:min-w-[240px]">
            <div className="text-sm uppercase tracking-wide opacity-55">
              Google Rating
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span className="font-serif text-4xl leading-none">
                {averageRating.toFixed(1)}
              </span>

              <div>
                <div className="text-base leading-none text-[#b38b2d]">
                  {renderStars(averageRating)}
                </div>
                <p className="mt-1 text-sm opacity-70">
                  Based on {totalReviews} review{totalReviews === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            <a
              href={googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-xl border border-black/10 px-4 py-2 text-sm font-medium no-underline transition hover:bg-black/5"
            >
              Read all on Google
            </a>
          </div>
        </div>

        <div className="mt-10 -mx-1 flex gap-6 overflow-x-auto pb-4 pl-1 pr-1 snap-x snap-mandatory scroll-smooth">
          {reviews.map((review, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <article
                key={index}
                className="min-w-[85vw] max-w-[85vw] snap-start rounded-xl2 border border-black/10 bg-white p-6 shadow-soft flex flex-col sm:min-w-[420px] sm:max-w-[420px] lg:min-w-[460px] lg:max-w-[460px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="pr-2">
                    <p className="text-base font-medium">{review.authorName}</p>
                    <p className="mt-1 text-sm opacity-60">
                      {review.relativeTime}
                    </p>
                  </div>

                  <div className="shrink-0 text-sm text-[#b38b2d]">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <div className="relative rounded-xl bg-[#fcfbf8] px-4 py-4 transition-all">
                    <p
                      className={`whitespace-pre-line text-[15px] leading-7 opacity-85 ${
                        isExpanded ? "" : "max-h-[16rem] overflow-hidden"
                      }`}
                    >
                      {review.text}
                    </p>

                    {!isExpanded && review.text.length > 420 && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 rounded-b-xl bg-gradient-to-t from-[#fcfbf8] to-transparent" />
                    )}
                  </div>

                  {review.text.length > 420 && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="mt-4 inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium opacity-80 transition hover:bg-black/5 hover:opacity-100"
                    >
                      {isExpanded ? "Show less" : "Read full review"}
                    </button>
                  )}
                </div>

                <div className="mt-6 border-t border-black/8 pt-4">
                  <a
                    href={googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium no-underline opacity-75 transition hover:opacity-100"
                  >
                    View on Google
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
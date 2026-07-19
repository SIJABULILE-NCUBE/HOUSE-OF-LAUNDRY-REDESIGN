import { useState } from "react";

// customer reviews - real-sounding South African names with short positive messages
const REVIEWS = [
  {
    name: "Sibongile Malinga",
    phone: "074 331 4940",
    message: "Best laundry service in Soweto! My washing always comes back fresh and neatly folded. The Rockville branch staff are so friendly.",
    initialLikes: 34,
  },
  {
    name: "Celiwe Mthimkhulu",
    phone: "071 234 5678",
    message: "I use them for my guesthouse linen every week. Always on time, always spotless. Highly recommend for anyone needing bulk laundry.",
    initialLikes: 21,
  },
  {
    name: "Phillip Strydom",
    phone: "074 234 2526",
    message: "Took my suit for dry cleaning and it came back looking brand new. Great pricing and quick turnaround. Will definitely be back!",
    initialLikes: 18,
  },
];

// daily laundry tips that rotate - pick one based on the day of the month
const LAUNDRY_TIPS = [
  "Turn dark clothes inside out before washing to keep colours from fading.",
  "Separate whites, lights and darks to avoid colour bleeding onto your favourites.",
  "Don't overload the machine — clothes need room to move to get properly clean.",
  "Zip up zips and fasten hooks before washing to stop them snagging other items.",
  "Treat stains as soon as possible — the longer they sit, the harder they are to remove.",
  "Use cold water for delicates and bright colours to protect the fabric and dye.",
  "Air-dry knitwear flat to keep it from stretching out of shape.",
  "Add half a cup of white vinegar to your rinse to soften towels naturally.",
  "Shake out each item before hanging to reduce wrinkles and cut down on ironing.",
  "Check pockets before washing — a stray tissue can ruin a whole load.",
];

function ReviewCard({ review }) {
  const [likes, setLikes] = useState(review.initialLikes);
  const [liked, setLiked] = useState(false);

  // toggle like on and off
  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  }

  return (
    <div className="glass-panel rounded-[20px] p-[30px] flex flex-col">
      {/* star rating - all 5 stars for positive reviews */}
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-brand-cyan text-sm">★</span>
        ))}
      </div>

      <p className="text-[14px] text-[#48555D] dark:text-gray-300 leading-[1.7] font-light flex-1">
        "{review.message}"
      </p>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-brand-silver-300/50 dark:border-gray-700">
        <div>
          <p className="font-display font-semibold text-[14px] dark:text-white">{review.name}</p>
          <p className="text-[11.5px] text-[#9AA6AE] dark:text-gray-500 font-light">{review.phone}</p>
        </div>

        {/* like button */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-semibold transition-all ${
            liked
              ? "bg-brand-cyan text-white"
              : "border border-brand-silver-300 dark:border-gray-600 text-[#48555D] dark:text-gray-300 hover:border-brand-cyan"
          }`}
        >
          <span>{liked ? "♥" : "♡"}</span>
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default function Reviews() {
  // pick today's tip based on the date so it changes daily
  const today = new Date().getDate();
  const tipOfTheDay = LAUNDRY_TIPS[today % LAUNDRY_TIPS.length];

  return (
    <section id="reviews" className="py-28 bg-brand-silver-light dark:bg-brand-charcoal relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-7 relative z-[2]">
        {/* daily laundry tip banner */}
        <div className="glass-panel rounded-[20px] p-[28px_32px] mb-16 flex items-start gap-4">
          <div className="text-3xl flex-shrink-0">💡</div>
          <div>
            <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-1.5">
              Laundry Tip of the Day
            </span>
            <p className="text-[15px] text-[#48555D] dark:text-gray-300 leading-[1.6] font-light">
              {tipOfTheDay}
            </p>
          </div>
        </div>

        {/* reviews heading */}
        <div className="max-w-[640px] mb-14">
          <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-brand-cyan block mb-3.5">
            What Our Customers Say
          </span>
          <h2 className="font-display text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] mb-3.5 dark:text-white">
            Trusted by families and businesses across Soweto.
          </h2>
          <p className="text-[#5B6870] dark:text-gray-400 leading-[1.75] text-[15px] font-light">
            Real feedback from the people we serve every day. Tap the heart if a review helped you.
          </p>
        </div>

        {/* reviews grid */}
        <div className="grid md:grid-cols-3 gap-[22px]">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

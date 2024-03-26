import React from 'react'

function Card(props) {
  console.log("props", props);
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20716698/pexels-photo-20716698/free-photo-of-surfboards-on-the-beach-in-honolulu.jpeg" alt="" width="384" height="51" />
      <div class="pt-6 space-y-4">
        <blockquote>
          <p class="text-lg">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>
            Hemanth
          </div>
          <div>
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
export default Card

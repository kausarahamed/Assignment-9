import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-4xl">This is Question section</h1>
      <section className=" grid grid-cols-2 gap-10 text-justify p-10 shadow-2xl">
        <div>
          <h1 className="text-2xl font-serif font-semibold mt-10">
            What is simantic tag
          </h1>
          <p className="mt-10">
            Simantic tag is a Html 5 tag.Semantic labels obviously characterize
            the motivation behind the HTML component. It likewise portrays the
            kind of happy that the component ought to contain.There are a lot of
            semantic tag we can see. Some semantic tag name is article, main,
            header, section, nav, footer.
          </p>
        </div>

        <div>
          <h1 className="text-2xl font-serif font-semibold mt-10">
            What is the difference between inline block and inline-block?
          </h1>

          <p className="mt-2">
            Inline element একটি নতুন লাইনে শুরু হয় না এবং কেবলমাত্র এটির
            প্রয়োজন অনুযায়ী width দখল করে। Inline element এর height width সেট
            করতে পারবেন না। Blockelement একটি নতুন লাইনে শুরু হয় এবং পুরো width
            দখল করে। এবং Blockelement এর height width নিজে থেকে সেট যায়।
            Inline-block এটি inline element এর মতো format করা হয়েছে, যেখানে এটি
            একটি নতুন লাইনে শুরু হয় না। কিন্তু, নিজে থেকে height width সেট করা
            যায়।
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blogs;

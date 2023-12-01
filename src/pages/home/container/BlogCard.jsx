import React from "react";
import HeroImage from "../../../assets/HeroImage.png";

const BlogCards = () => {
  const card = {
    img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    title: "Blog expenditure",
    post: "Majority of people will work in jobs that don't exist today.",
    author: "Johanna Murray",
    date: "02 May",
  };

  return (
    <section className="mt-5">
      <div className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
        <div className="card m-7 w-[390px] shadow-lg rounded-lg">
          <img className="" src={card.img} />
          <div className="m-5">
            <h2 className="text-lg text-blue-900 font-bold mt-8 px-10">
              {card.title}
            </h2>
            <p className="mt-4">{card.post}</p>
            <div className="flex justify-between mt-4 font-semibold italic text-blue-900">
              <div className="flex justify-between gap-5">
                <img
                  src={card.img}
                  className="w-10 h-10 rounded-full "
                  alt=""
                />
                {card.author}
              </div>
              <div>{card.date}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;

import React from "react";

const Gallery = () => {
  return (
    <div className="mt-10">
      <div className="relative ">
        <img
          className="w-full h-[180px] "
          src="https://img.freepik.com/premium-vector/hand-painted-background-violet-orange-colours_23-2148427578.jpg"
          alt=""
        />
        <h1
          data-aos="fade-left"
          data-aos-duration="1000"
          className="text-4xl font-bold text-sky-200  absolute top-10 right-1/4 "
        >
          Our Toys Gallery
        </h1>
        <div className="w-10/12 mx-auto relative -top-20">
          <div data-aos="fade-up" data-aos-duration="1000" className="grid  md:grid-cols-2 gap-2  ">
            <img
              className="shadow border-8 border-sky-200 min-h-full"
              src="https://cdn3.eyeem.com/thumb/55963c765e8222024c8537af38e6c3154a44a8d7-1594228770611/w/800"
              alt=""
            />

            <div className=" grid grid-cols-2 gap-2">
              <img
                className="shadow border-8 border-sky-200 "
                src="https://cdn.shopify.com/s/files/1/0401/4397/products/Img1611_1024x1024.jpg?v=1627925508"
                alt=""
              />
              <img
                className="shadow border-8 border-sky-200 "
                src="https://cdn.shopify.com/s/files/1/0401/4397/products/14614_1024x1024.jpg?v=1613588503"
                alt=""
              />
              <img
                className="shadow border-8 border-sky-200 "
                src="https://cdn.shopify.com/s/files/1/0401/4397/products/Big_Toys_2019_6_2012154_1024x1024.jpg?v=1569277408"
                alt=""
              />
              <img
                className="shadow border-8 border-sky-200 "
                src="https://cdn.shopify.com/s/files/1/0401/4397/products/Img1041_01462aaa-9fb3-4218-9656-09fe1c48e5a7_1024x1024.jpg?v=1621864391"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

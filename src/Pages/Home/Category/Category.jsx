import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysCard from "./ToysCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://toy-land-server-five.vercel.app/toys/category?subcategory=sports car&sort=1`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  const handleCategoryData = (subcategory) => {
    fetch(`https://toy-land-server-five.vercel.app/toys/category?subcategory=${subcategory}&sort=1`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div className="md:w-10/12 mx-auto text-center mt-20">
      <h4 className="text-xl font-semibold text-red-600">CATEGORY</h4>
      <h1 className="text-4xl font-bold mb-8">Category Products</h1>
      <Tabs selectedTabClassName="">
        <TabList>
          <Tab>
            <span onClick={() => handleCategoryData("sports car")} className="text-xl font-medium">
              Sports car
            </span>
          </Tab>
          <Tab>
            <span onClick={() => handleCategoryData("jeep")} className="text-xl font-medium">
              Jeep
            </span>
          </Tab>
          <Tab>
            <span onClick={() => handleCategoryData("regular car")} className="text-xl font-medium">
              Regular car
            </span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {toys.map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {toys.map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {toys.map((toy) => (
              <ToysCard key={toy._id} toy={toy}></ToysCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;

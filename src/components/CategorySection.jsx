import React from "react";
import CategoryBtn from "./CategoryBtn";

const CategorySection = () => {
  const title = "Jewel Product";
  const categories = 
  [ 
     
    "NECKLACE", 
    "BRACELETS", 
    "RINGS",
    "EARRINGS",
    "JEWELLERY BOXES",
    "GIFT CARD"
  ];
  return (
    <>
      <section id="category-section" className="p-5">
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className=" flex category-btn-group">
         
          <CategoryBtn categoryName="All" current={true} />
          {categories.map((category) => (
            <CategoryBtn 
            key={category} 
            categoryName={category} 
            current={false}
            />
          ))}

        </div>
        
      </section>
    </>
  );
};

export default CategorySection;
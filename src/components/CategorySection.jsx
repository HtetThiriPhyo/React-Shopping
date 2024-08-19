import React from "react";
import CategoryBtn from "./CategoryBtn";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Detail";
  const categories = 
  [ 
     
    "NECKLACE", 
    "BRACELETS", 
    "RINGS",
    "EARRINGS",
    "BRIDAL",
    "GIFTS"
  ];
  return (
    <>
      <section id="category-section" className="p-5">
       <Container>
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
       </Container>
        
      </section>
    </>
  );
};

export default CategorySection;

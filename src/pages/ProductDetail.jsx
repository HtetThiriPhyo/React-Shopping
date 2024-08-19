import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Ratings";
import Ratings from "../components/Ratings";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();

  const currentProduct = products.find((product) => product.id == productId);
  // console.log(currentProduct);

  return (
    <>
      <Container>
       <Breadcrumb currentPageTitle="/  Product Detail"/>
        <div className="border border-black-900 p-10 mb-2">
          <div className="grid grid-cols-2 ">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                className="w-1/3 block mx-auto py-2"
                alt=""
              />
            </div>
            <div className="col-span-1 flex flex-col gap-5 items-start">
              <h3 className="text-xl font-semibold ">{currentProduct.title}</h3>
              <p className=" rounded-md bg-slate-200 text-gray-700 inline-block px-5 py-1">
                {currentProduct.category}
              </p>
              <p className="text-sm font-serif">
                {currentProduct.description}
              </p>
              
              <div className="justify-between flex w-full">

              <h2 className="flex font-bold text-gray-600">
                Price: {currentProduct.price}
                <p className="px-1 text-gray-600">USD</p>
              </h2>
                
              </div>

              <Link
                  to={"/my-cart"}
                  className=" border border-black-700 px-3 py-2 relative rounded-xl hover:bg-slate-100">
                  Add Cart
                </Link>

              <Ratings rate={currentProduct.rating.rate}/>

            </div>

          </div>

        </div>
      </Container>
    </>
  );
};

export default ProductDetail;


import React, { useContext } from "react";
import Header from "../../components/header/Header";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import Basket from "../../components/ProductDisplay/Basket";
import ProductTitleAndPrice from "../../components/ProductDisplay/ProductTitleAndPrice";
import Rating from "../../components/ProductDisplay/Rating";
import Footer from "../../components/Footer/Footer";
import { FavoritesContext } from "../../components/Context/FavoritesContext";
import FavoriteIcon from "../../components/ProductDisplay/FavoriteIcon";

function Favorites() {
  const [favorites] = useContext(FavoritesContext);
  return (
    <>
      <Header />
      <div>
        <div className="product-display-grid">
          {favorites &&
            favorites.map((product) => {
              return (
                <div className="product-display-component" key={product._id}>
                  <ProductOverview product={product} />
                  <div className="white-background">
                    <ProductTitleAndPrice product={product} />
                    <Rating productRating={product.rate} product={product} />
                    <div className="product-options">
                      <FavoriteIcon product={product} />
                      <Basket product={product} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favorites;

import { Helmet } from 'react-helmet-async';

function Shop() {
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Shop our latest products now" />
        <link rel="canonical" href="/shop" />
        {/* <meta name="robots" content="noindex" /> */}
      </Helmet>
      <p>Shop</p>
    </>
  );
}

export default Shop;

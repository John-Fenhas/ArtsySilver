// import { supabase } from "../../supabase";
// import products from "./products";

// const newproduct = products.map((p) => ({
//   id: p.id,
//   name: p.name,
//   slug: p.slug,
//   category: p.category,
//   material: p.material,
//   price_in_cents: p.priceInCents,
//   old_price_in_cents: p.oldPriceInCents,
//   is_on_sale: p.isOnSale,
//   in_stock: p.inStock,
//   size: p.size,

//   rating_stars: p.rating.stars,
//   rating_count: p.rating.count,
// }));

// async function uploadProducts() {
//   const images = [];

//   products.forEach((product) => {
//     product.images.forEach((url, index) => {
//       images.push({
//         product_id: product.id,
//         url,
//         position: index + 1,
//       });
//     });
//   });

//   const { error: imageError } = await supabase
//     .from("product-images")
//     .insert(images);

//   if (imageError) {
//     console.error("❌ Image insert error:", imageError);
//     return;
//   }

//   console.log("✅ Images inserted");
// }

// uploadProducts();

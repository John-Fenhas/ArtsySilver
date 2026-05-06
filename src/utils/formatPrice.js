export default function getPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EGP",
  });
}

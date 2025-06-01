export const productQuery = `*[_type == "product"]{
  _id,
  title,
  description,
  price,
  "imageUrl": images[0].asset->url,
  category->{
    name
  },
  slug,
  tags
}`;


export const categoryQuery = `*[_type == "category"]{
  _id,
  name
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  "logoUrl": logo.asset->url,
  primaryColor,
  contactPhone,
  whatsappLink,
  address,
  mapEmbed
}`;

export const featuredProductsQuery = `*[_type == "product" && isFeatured == true]{
  _id,
  title,
  description,
  price,
  "imageUrl": images[0].asset->url,
  category->{
    name
  },
  slug,
  tags
}`;



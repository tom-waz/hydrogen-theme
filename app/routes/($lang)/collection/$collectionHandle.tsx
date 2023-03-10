import { AnalyticsPageType, flattenConnection, SeoHandleFunction } from "@shopify/hydrogen";
import { json, LoaderArgs } from "@shopify/remix-oxygen";
import { Collection as CollectionType, CollectionConnection, Image as ImageType, Product, ProductVariant } from "@shopify/hydrogen/storefront-api-types";
import invariant from "tiny-invariant";
import { PRODUCT_CARD_FRAGMENT } from "~/data/fragments";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { Image } from "@shopify/hydrogen";
import { Disclosure } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const seo: SeoHandleFunction<typeof loader> = ({data}) => ({
  title: data?.collection?.seo?.title,
  description: data?.collection?.seo?.description,
  titleTemplate: '%s | Collection',
  media: {
    type: 'image',
    url: data?.collection?.image?.url,
    height: data?.collection?.image?.height,
    width: data?.collection?.image?.width,
    altText: data?.collection?.image?.altText,
  },
})

export const handle = {
  seo,
};

export async function loader({params, request, context}: LoaderArgs) {
  const {collectionHandle} = params;

  invariant(collectionHandle, "Missing collectionHandle param");

  const {collection, collections} = await context.storefront.query<{
    collection: CollectionType;
    collections: CollectionConnection;
  }>(COLLECTION_QUERY, {
    variables: {
      handle: collectionHandle,
      country: context.storefront.i18n.country,
      language: context.storefront.i18n.language
    }
  });

  if (!collection) {
    throw new Response(null, { status: 404 });
  }

  const collectionNodes = flattenConnection(collections);

  return json({
    collection,
    collections: collectionNodes,
    analytics: {
      pageType: AnalyticsPageType.collection,
      collectionHandle,
      resourceId: collection.id
    }
  })
}

export default function CollectionProducts() {
  const {collection} = useLoaderData<typeof loader>();
  const products = collection.products.nodes;
  const variant = products[0].variants.nodes[0];
  const featuredImage = products[0].featuredImage;
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0] as Product);
  const [selectedImage, setSelectedImage] = useState<ImageType>(featuredImage || products[0].images.nodes[0]);
  const [selectedVariant, setSelectedVariant] =  useState<ProductVariant>(variant as ProductVariant);
  const [quantity, setQuantity] = useState<number>(1);

  const changeProduct = (_product: Product) => {
    setSelectedProduct(_product);
    setSelectedVariant(_product.variants.nodes[0]);
    setSelectedImage(_product.featuredImage ? _product.featuredImage : _product.images.nodes[0]);
  }

  const increaseQty = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);      
    }
  }

  return (
    <div className="w-full pb-6 flex flex-wrap justify-between">
      <div className="w-full lg:w-9/12">
        <div className="product-image w-full relative aspect-[100/55]">
          <Image
            className="w-full h-full object-cover"
            data={selectedImage}
            sizes="1500"
            widths={[350, 460, 580, 660, 780, 900, 1100, 1240, 1360, 1440]}
          />
          <div className="imageNavigation absolute top-[25px] left-5 w-16">
            {selectedProduct.images.nodes.map((navImage: ImageType, index: number) => (
              <Image
                key={index}
                data={navImage}
                sizes="60"
                widths={[60]}
                alt={navImage.altText || `${selectedProduct.handle}-nav-image-${index}`}
                onClick={() => setSelectedImage(navImage)}
                className={`${navImage == selectedImage ? 'border border-dark-blue' : "border-0"} mb-2`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/12 bg-white border-l-[30px] border-[#f7f7f7]">
        <h1 className="product-title text-cusSubheading text-dark-blue font-semibold lg:text-[25px] mt-[15px] mb-[10px] p-5">
          { selectedProduct.title }
        </h1>
        {/* Model picker */}
        <Disclosure as='div' className="p-5 border-t border-[#dee2e6]">
          {({open}) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-[13px] text-dark-blue">
                <span>Scegli il modello</span>
                <BsChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pt-3">
                {(products as Product[]).map((product: Product, index: number) => {
                  const productImage = product.featuredImage ? product.featuredImage : product.images.nodes[0];
                  const minPrice = product.variants.nodes.sort((a, b) => parseFloat(a.price.amount) - parseFloat(b.price.amount))[0].price;
                  return (
                    <div
                      key={index}
                      className={`${selectedProduct == product ? 'bg-[#e9eced]' : ''} border rounded-xs border-[#e9eced] mt-2 flex items-center`}
                      onClick={() => changeProduct(product)} 
                    >
                      <Image
                        data={productImage}
                        sizes="80"
                        widths={[80]}
                        className="w-20"
                      />
                      <div className="grow pl-5">
                        <p className="text-[9px]">{product.title}</p>
                        <p className="text-[9px]">A partire da <span className={`${selectedProduct == product ? "text-xs text-[#dc3545]": ""}`}>{minPrice.amount}{minPrice.currencyCode}</span></p>
                      </div>
                    </div>
                  )
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {/* Variant picker */}
        <Disclosure as='div' className="p-5 border-t border-[#dee2e6]">
          {({open}) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-[13px] text-dark-blue">
                <span>Scegli la taglia<br /><span className="text-8c8c8c text-xxs">Guida alle taglie</span></span>
                <BsChevronDown className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`} />
              </Disclosure.Button>
              <Disclosure.Panel as="div" className="pt-3">
                {(flattenConnection(selectedProduct.variants)).map((variant: ProductVariant, index: number) => {
                  return (
                    <div key={index} className={`${selectedVariant == variant ? 'bg-[#e9eced]' : ''} border rounded-xs border-[#e9eced] mt-2 flex items-center`} onClick={() => setSelectedVariant(variant)}>
                      <div className="grow pl-5 text-dark-blue text-[10px]">{variant.selectedOptions[0].value}</div>
                    </div>
                  )
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="product-quantity p-5 border-t border-b border-[#dee2e6] uppercase flex justify-between items-center text-[13px] text-dark-blue">
          <span>Quantità</span>
          <div className="qty-form flex items-center">
            <button className="w-4 h-4 rounded-full border border-dark-blue text-dark-blue flex items-center justify-center" onClick={() => decreaseQty()}>-</button>
            <input type="text" name="qty" className="w-10 border-0 p-0 text-center" value={quantity} />
            <button className="w-4 h-4 rounded-full border border-dark-blue text-dark-blue flex items-center justify-center" onClick={() => increaseQty()}>+</button>
          </div>
        </div>
        {selectedVariant && (
          <div className="product-price p-5 text-dark-blue text-cusSubheading lg:text-[20px]">
            {selectedVariant.price.amount} {selectedVariant.price.currencyCode}
          </div>
        )}
        <div className="product-actions px-5">
          <button className="bg-dark-blue py-3 w-full text-white text-xs">PRENOTA TEST IN NEGOZIO</button>
          <button className="bg-dark-blue py-3 w-full text-white text-xs mt-2">AGGIUNGI AL CARRELLO</button>
        </div>
      </div>
    </div>
  )
}

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      seo {
        description
        title
      }
      products(
        first: 100
      ) {
        nodes {
          ...ProductCard
        }
      }
    }
    collections(first: 100) {
      edges {
        node {
          title
          handle
        }
      }
    }
  }
`;
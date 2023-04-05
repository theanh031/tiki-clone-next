import React from 'react'
import Image from 'next/image';
interface ProductItemType {
  product: any;
}
const ProductItem = ({product} : ProductItemType) => {
  return (
      <div className="m-w-[200px]">
          <div>
              <a
                  className="h-full no-underline flex relative cursor-pointer rounded overflow-hidden bg-white hover:z-[1] hover:shadow-xl"
                  href=""
              >
                  <div>
                      <span className="flex text-[#242424] no-underline justify-between flex-col  ">
                          <div className="shrink-0 w-[200px] h-[200px] text-center relative">
                              {product.badges_new[0].code ===
                              "official_store" ? (
                                  <Image
                                      alt=""
                                      src={product.badges_new[0].icon}
                                      width="0"
                                      height="0"
                                      sizes="100vw"
                                      className="absolute top-0 left-0 z-[2] max-w-full w-[68px] h-[14px] overflow-clip"
                                  />
                              ) : (
                                  ""
                              )}
                              {product.advertisement === null ? (
                                  ""
                              ) : (
                                  <p className="bg-[#EBEBF0] leading-4 inline-block px-1 text-[12px] m-0 absolute top-1 right-1 z-[1] rounded-sm text-[#38383D]">
                                      Tài Trợ
                                  </p>
                              )}
                              <div className="w-full pt-100% relative">
                                      <Image
                                          width="0"
                                          height="0"
                                          sizes="100vw"
                                          alt={`${product.name}`}
                                          src={`${product.thumbnail_url}`}
                                          className="absolute top-0 left-0 w-full h-auto object-contain max-w-full"
                                      />
                                  
                              </div>
                              <div className="flex flex-row items-center absolute bottom-0 left-0">
                                  <div className="flex flex-row items-center gap-[2px] pr-2 rounded-tl-12px ">
                                      {product.badges_new.find(
                                          (e: any) =>
                                              e.code === "asa_reward_badge"
                                      ) ? (
                                          <Image
                                              alt=""
                                              width="0"
                                              height="0"
                                              sizes="100vw"
                                              className="w-auto min-h-[24px]"
                                              src={`${
                                                  product.badges_new.find(
                                                      (e: any) =>
                                                          e.code ===
                                                          "asa_reward_badge"
                                                  ).icon
                                              }`}
                                          />
                                      ) : (
                                          ""
                                      )}
                                  </div>
                              </div>
                          </div>

                          <div className="text-[#242424] py-2 mx-3 border-b border-solid border-[#ebebf0] min-h-[122px]">
                              <div className='overflow-hidden mt-[6px] min-h-[32px]'>
                                  <h3 className="name font-normal text-[12px] leading-4 text-[#38383d] m-0 break-words ">
                                      {product.name}
                                  </h3>
                              </div>

                              <div className="flex mb-[6px] items-center text-[12px] leading-4 ">
                                  <div className="relative">
                                      <div className="flex">
                                          <span className="text-[#808089]">
                                              {product.rating_average}
                                          </span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="14"
                                              viewBox="0 0 12 12"
                                          >
                                              <g
                                                  fill="none"
                                                  fillRule="evenodd"
                                              >
                                                  <path
                                                      fill="#fdd835"
                                                      transform="matrix(-1 0 0 1 11 1)"
                                                      d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                                                  ></path>
                                                  <path
                                                      fill="#fdd835"
                                                      transform="translate(1 1)"
                                                      d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"
                                                  ></path>
                                              </g>
                                          </svg>
                                      </div>
                                  </div>

                                  <div className="w-[1px] h-[10px] bg-[#ebebf0] ml-[2px] mr-1"></div>
                                  <div className="overflow-hidden max-h-4 break-all text-[#808089] ">
                                      {product.quantity_sold && product.quantity_sold.text}
                                  </div>
                              </div>

                              <div className="text-[#ff424e] text-left text-[16px] leading-6 font-medium m-0 flex items-center">
                                  <div>
                                      {product.price}{" "}
                                      <sup className="-top-[0.5em] relative text-[75%] leading-[0] align-baseline">
                                          ₫
                                      </sup>
                                  </div>
                                  <div className="px-[2px] leading-4 text-xs font-medium ml-1 text-[#ff424e] mt-[3px]">
                                      -{product.discount_rate}%
                                  </div>
                              </div>

                              <div className="font-normal text-[10px] leading-3 min-h-[24px] text-[#808089]">
                                  {product.badges_new.find(
                                      (a: any) =>
                                          a.code === "asa_reward_html_badge"
                                  ) &&
                                      product.badges_new.find(
                                          (a: any) =>
                                              a.code === "asa_reward_html_badge"
                                      ).text}
                              </div>
                              <div className="flex gap-1 flex-wrap mt-[6px] min-h-[17px]">
                                  {product.badges_new.find(
                                      (x: any) => x.code === "option_color"
                                  ) ? (
                                      <div className="px-1 py-[2px] border-[0.5px] border-solid border-[#1a94ff] rounded-sm font-normal text-[10px] leading-[12px] text-[#1a94ff]">
                                          <span>
                                              {product.badges_new.find((x: any) => x.code === "option_color").text}
                                          </span>
                                      </div>
                                  ):
                                    (
                                        <div className='h-[17px]'></div>
                                    )
                                  }
                              </div>
                          </div>

                            {product.badges_new.find((x: any) => x.code === "tikinow")
                                ?
                                <div className="flex px-3 py-2 gap-1">
                                    <Image alt = '' width='0' height='0' className='w-8 h-4 max-w-full'  src={product.badges_new.find((x: any) => x.code === "tikinow").icon} />
                                    <span className='text-grayText font-normal text-[12px] leading-4'>{product.badges_new.find((x: any) => x.code === "tikinow").text}</span>
                                </div>
                                :
                                <div className="flex px-3 py-2 gap-1">
                                    <span className='text-grayText font-normal text-[12px] leading-4'>{product.badges_new.find((x: any) => x.code === "delivery_info_badge").text}</span>
                                </div>
                                
                                
                            }
                      </span>
                  </div>
              </a>
          </div>
      </div>
  );
}

export default ProductItem
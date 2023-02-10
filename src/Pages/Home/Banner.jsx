import React from "react";
import Card_img from "../shared/img/card-img.png";
import Smile from "../shared/img/smile.svg";
import Market from "../shared/img/market.svg";
import Auction from "../shared/img/auction.svg";
import { useState, useEffect } from "react";

//   function Info (){

//     const [result, setResult] = useState('');

//     return (
//       <>
//       {console.log("eeeeee",result.data.collections.edges[0].node.id)}
//       </>

//     )
//   }

export default function Banner() {
  const [value, setValue] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "X-Shopify-Storefront-Access-Token",
      "94ed52e121fc97286360b7e18f29bd11"
    );
    myHeaders.append("Cookie", "request_method=POST");

    var graphql = JSON.stringify({
      query:
        "query {\r\n  collections(first: 2) {\r\n    edges {\r\n      node {\r\n        id\r\n        products(first: 100) {\r\n          edges {\r\n            node {\r\n              id\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",
      variables: {},
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: graphql,
      redirect: "follow",
    };
    fetch(
      "https://amaani-121.myshopify.com/api/2023-01/graphql.json",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setValue(result.data.collections.edges[0].node.id);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <section class="backgraound-main-banner">
        <div class="container-fluid">
          <div class="row wr-fit">
            <div class="col-sm-6 head-fit">
              <h2 class=" head-market-place1">
                The Largest <img src={Smile} alt="" /> NFT marketplace for
                Creators{" "}
              </h2>
              <p class="cap-head-main">Buy, Sell and Discover your video.</p>
              <div class="header-button mt-30">
                <button type="button" class=" header-button1">
                  <span header-button-a>
                    {" "}
                    Auction
                    <img src={Auction} alt="" />
                  </span>{" "}
                </button>
                <button type="button" class=" header-button2">
                  <span header-button-b>
                    {" "}
                    Marketplace
                    <img src={Market} alt="" />
                  </span>{" "}
                </button>
              </div>
            </div>
            <div class="col-sm-6 bhoope9696">
              <div class="card bhoope12">
                <div class="gradient-rotate-bg">
                  <div class="baneer-header">
                    <img
                      class="card-img-top"
                      src={Card_img}
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <div class="card-row3">
                        <span class="car-img-main">
                          <span class="card-img-part">
                            {" "}
                            <img src="./img/card-img1.png" alt="" class="i1" />
                          </span>
                          <img src="./img/youtube.svg" alt="" class="i2" />
                        </span>
                        <p> 45K Views</p>
                      </div>
                      <div class="card-heading">
                        <h1 class="heading-chivalty"> {value} </h1>
                      </div>
                      <div class="card-deatails">
                        <div class="other-details">
                          <p>Highest bid</p>
                          <p>Buy now</p>
                        </div>
                        <div class="other-detail1">
                          <p class="ETH"> 0.414 ETH </p>
                          <p class="ETH!">@2.01 ETH</p>
                        </div>
                        <div class="other-detail1">
                          <p>#10/50 </p>
                          <span>
                            <img src="./img/like.svg" alt="" class="i4" /> 25K
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
}

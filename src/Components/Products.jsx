import React from "react";
import Product from "./Product";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system, for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
    },
    {
      title: "Summon",
      description:
        "We created a website foor Summon that showcases their innovative technology through animated and capitivating UI components and emerging technologies.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the transaltion service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "RocketChat",
      description:
        "We built a beeautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: false,
    },
    {
      title: "Haufe",
      description:
        "Besides the continues work we do with Haufe-shipping over 50 projects per year-we partnered with them to create a new website for their core brand.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, definig our brand, and more.",
      live: true,
      case: true,
    },
    {
      title: "Weglot",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: false,
    },
    {
      title: "Candid Health",
      description:
        "A complete redesign of a health-startip website, followed by cutting edge development.",
      live: true,
      case: false,
    },
    {
      title: "Showcasse",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website to promote the art of showcasing.",
      live: true,
      case: true,
    },
  ];

  return (
    <div>
      {products.map((val, index) => (
        <Product key={index} val={val} />
      ))}
    </div>
  );
}

export default Products;

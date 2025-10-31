import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first div  */}
          <div className="space-y-4">
            <Logo />
            <SubText>
              Discover curated furniture collections at ShopCart, blending style
              and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>

          {/* second div  */}
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-light"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* third div  */}
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-light"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* fouth div  */}
          <div className="space-y-4">
            <SubTitle>Newsletter</SubTitle>
            <SubTitle>Subscribe to our newsletter to recieve updates and exclusive offers</SubTitle>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required/>
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <FooterBottom/>
      </Container>
    </footer>
  );
};

export default Footer;

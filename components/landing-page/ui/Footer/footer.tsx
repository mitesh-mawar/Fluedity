import { PagePathBreadCrumb } from "@/components/ui/page-path";
import { Separator } from "@/components/ui/separator";
import { Spacer } from "@/components/ui/spacer";
import { FLUEDITY_LOGO } from "@/data/app/metadata";
import { FOOTER_LINK } from "@/data/landing-pages/footer/footer-link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  // ! Use Context
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-auto flex-col items-center justify-center w-full bg-[#F5F5F7] border-t-2 border-[#D1CDD0]">
      <div className=" max-w-[1100px] footer-padding w-full">
        <div className="flex flex-col items-start flex-auto w-full">
          <div className="flex gap-2 items-center">
            <Image
              src={FLUEDITY_LOGO}
              className=" w-7 mr-2 "
              width={100}
              height={100}
              alt="Fluedity"
            />
            <PagePathBreadCrumb />
          </div>
          <Spacer y={50} />
          <div className="grid md:grid-cols-3 grid-cols-1 lg:grid-cols-5">
            {FOOTER_LINK.map((parent, parent_index) => (
              <div key={parent_index}>
                <h1 className=" font-semibold mb-2">{parent.title}</h1>
                <ul>
                  {parent.pages.map((page, page_index) => (
                    <li
                      key={page_index}
                      onClick={() => {
                        router.push(page.href);
                      }}
                      className=" text-sm transition  cursor-pointer  hover:text-black text-[#6C6C6C] pt-2"
                    >
                      {page.title}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" max-w-[1100px] w-full">
        <Separator />
        <div className=" flex py-4 text-[14px] text-[#6C6C6C] flex-auto flex-col items-start">
          <p>Copyright © 2024 Fluedity Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

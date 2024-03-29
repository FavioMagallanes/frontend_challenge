import { Icon } from "@/components/icon/icon";
import { MaxWidthWrapper } from "@/components/max-width-wrapper/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DESCRIPTION } from "@/constants/constants";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="sm:grid sm:grid-cols-[1fr,1fr] sm:grid-rows-[0.2fr,0.2fr,1fr,1fr] sm:gap-5 sm:max-w-screen-[1440px] sm:mx-auto sm:place-content-center grid p-2">
        <div className="sm:row-span-3 sm:place-content-end sm:order-1 flex flex-col justify-center text-center sm:text-start">
          <p className="uppercase text-xs tracking-widest	mb-4">
            about - personal
          </p>
          <h1 className="text-3xl font-light tracking-tight sm:text-6xl">
            ¡Hello! <span className="font-bold">I&apos;m Angela Smith</span>
          </h1>
          <p
            className="mt-6 text-md font-light sm:text-left sm:xl
            max-w-prose text-muted-foreground text-center"
          >
            {DESCRIPTION}
          </p>
        </div>
        <div className="sm:order-2 sm:row-span-4 flex justify-center">
          <Image
            src="/content_image.png"
            alt="Hero image"
            width={800}
            height={800}
            priority
           
          />
        </div>
        <Button className="order-3 mt-[5px] sm:w-40 w-full">
          Get Started
          <Icon name="ArrowRight" size={14} />
        </Button>
      </div>
      <div className="w-full flex flex-col items-center">
        <Icon
          name="CircleChevronUp"
          size={32}
          className="animate-bounce mt-2"
        />
      </div>
    </MaxWidthWrapper>
  );
}

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from 'react-icons/ri';

//Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack</div>
            <h1 className="h1">Hello, This is Natasha</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">I help our clients create brands, build digital products and services, innovate, find oppurtunities and validate ideas</p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href='/contact'>
                <Button className="gap-x-2">
                Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant='secondary' className="gap-x-2">
                Hire Me <Download size={18} />
                </Button>
            </div>
            {/* Socials */}
            <Socials 
            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />

          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
          {/* Badge */}
          <Badge 
          containerStyles='absolute top-[24%] -left-[5rem]'
          icon={<RiBriefcase4Fill />} 
          endCountNum={7}
          badgeText='years Of Experience'
          />

          {/* Badge 2*/}
          <Badge 
          containerStyles='absolute top-[80%] -left-[1rem]'
          icon={<RiTodoFill />} 
          endCountNum={9}
          endCounttext='k'
          badgeText='Completed projects'
          />

          {/* Badge 3*/}
          <Badge 
          containerStyles='absolute top-[55%] -right-8'
          icon={<RiTeamFill />} 
          endCountNum={12}
          endCounttext='k'
          badgeText='Client Satisfied'
          />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg 
            imgSrc='/about/developer.png'
            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero
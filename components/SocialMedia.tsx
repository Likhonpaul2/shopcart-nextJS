import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  { title: "Youtube", href: "#", icon: <Youtube className="w-5 h-5" /> },
  { title: "Github", href: "#", icon: <Github className="w-5 h-5" /> },
  { title: "LinkedIn", href: "#", icon: <Linkedin className="w-5 h-5" /> },
  { title: "Facebook", href: "#", icon: <Facebook className="w-5 h-5" /> },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    // tooltip_provider
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5")}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>

            
            {/* tooltip triger  */}
            <TooltipTrigger asChild>
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>

            {/* tooltip container */}
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

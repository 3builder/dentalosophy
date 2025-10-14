"use client";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const ShareButton = ({ title }) => {
  const pathname = usePathname();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  if (!fullUrl) return null;

  return (
    <div className="gap-2 mt-2 flex">
      <FacebookShareButton url={fullUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={fullUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton url={fullUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

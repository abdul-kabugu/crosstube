/* eslint-disable prettier/prettier */
import { TfiVideoClapper } from "react-icons/tfi";

import {
    Verified,
    UploadOutline,
    BellOutline,
    ChannelOutline,
    ChevronLeftOutline,
    ChevronRightOutline,
    FeedOutline,
    HomeOutline,
    ExploreOutline,
    AddImageOutline,
    CollectOutline,
    CopyOutline,
    DisconnectOutline,
    LikeOutline,
    DislikeOutline,
    CommentOutline,
    EmojiOutline,
    ExternalOutline,
    FireOutline,
    GlobeOutline,
    Discover,
    YppOutline,
  } from "./Icons";
export const LIVEPEER_KEY = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY || ""
export const PINATA_PROJECT_ID = process.env.NEXT_PUBLIC_PINATA_PROJECT_ID;
export const PINATA_APP_SECRET = process.env.NEXT_PUBLIC_PINATA_APP_SECRET;
export const IPFS_GATEWAY = "https://gateway.ipfscdn.io/ipfs/";

export const profileMenuLinks = [
    {
      title: "Your channel",
      icon: ChannelOutline,
      to: "/channel",
    },
  ];

  export const sidebarMenu = [
    {
      title: "Home",
      icon: HomeOutline,
      to: "/",
    },
    {
      title: "Feed",
      icon: FeedOutline,
      to: "/feeds",
    },
    {
      title: "Popular",
      icon: FireOutline,
      to: "/trending",
    },
  
    /*{
      title: "Discover",
      icon: Discover,
      to: "/discover",
    },*/
  
    /*{
      title: "Syt",
      icon: YppOutline,
      to: "/sync",
    },*/
  ];

   export const tagFilters = [
    {
      title : "All",
      value : "All"
    },
    {
      title : "People & Blogs",
      value : "People & Blogs"
    },
    {
      title : "Education",
      value : "Education"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Health & Fitness",
      value : "Health & Fitness"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
    {
      title : "Food & Cooking",
      value : "Food & Cooking"
    },
   ]
  

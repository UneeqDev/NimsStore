import Head from "next/head";
import { Typography } from "@mui/material";
import HomeLayout from "../componentss/HomeLayout";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NimsStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeLayout />
      </main>
    </div>
  );
}

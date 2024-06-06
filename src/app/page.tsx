import Banner from "@/components/pages/Home/Banner";
import Blog from "@/components/pages/Home/Blog";
import Contact from "@/components/pages/Home/Contact";
import Hotels from "@/components/pages/Home/Hotels";
import NewsLater from "@/components/pages/Home/NewsLater";

export default function Home() {
  return (
    <>
      <Banner />
      <Hotels />
      <Blog />
      <Contact />
    </>
  );
}

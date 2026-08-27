import Banner from "@/components/pageUi/home/Banner";
import Choose from "@/components/pageUi/home/Choose";
import HomeCard from "@/components/pageUi/home/HomeCard";
import Rhythm from "@/components/pageUi/home/Rhythm";
import SectionMotion from "@/components/pageUi/home/SectionMotion";

export default function Home() {
  return (
    <div className="">
      <SectionMotion>
        <Banner />
      </SectionMotion>
      <SectionMotion>
        <HomeCard />
      </SectionMotion>
      <SectionMotion>
        <Choose />
      </SectionMotion>
      <SectionMotion>
        <Rhythm />
      </SectionMotion>
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/landing/HeroSection";
import AIInput_01 from "@/components/codesnippetui/ai-input/ai-input-01";
import AIInput_02 from "@/components/codesnippetui/ai-input/ai-input-02";
import AIInput_03 from "@/components/codesnippetui/ai-input/ai-input-03";
import AIInput_04 from "@/components/codesnippetui/ai-input/ai-input-04";
import AIInput_05 from "@/components/codesnippetui/ai-input/ai-input-05";
import AIInput_06 from "@/components/codesnippetui/ai-input/ai-input-06";
import AIInput_07 from "@/components/codesnippetui/ai-input/ai-input-07";
import AIInput_08 from "@/components/codesnippetui/ai-input/ai-input-08";
import AIInput_09 from "@/components/codesnippetui/ai-input/ai-input-09";
import AIInput_10 from "@/components/codesnippetui/ai-input/ai-input-10";
import AIInput_11 from "@/components/codesnippetui/ai-input/ai-input-11";
import AIInput_12 from "@/components/codesnippetui/ai-input/ai-input-12";
import AIInput_13 from "@/components/codesnippetui/ai-input/ai-input-13";
import AIInput_14 from "@/components/codesnippetui/ai-input/ai-input-14";
import AIInput_15 from "@/components/codesnippetui/ai-input/ai-input-15";
import AIInput_16 from "@/components/codesnippetui/ai-input/ai-input-16";
import AIInput_17 from "@/components/codesnippetui/ai-input/ai-input-17";
import Profile01 from "@/components/codesnippetui/profile/profile-01";
import { ComponentShowcaseCard } from "@/components/landing/component-show-card";
import { InteractivePreview } from "@/components/landing/interact-preview";
import { BuildInterfacesCard } from "@/components/landing/interface-card";
import { TechnologyBadges } from "@/components/landing/technology-badge";

export default function Home() {
  return (
   <div className="bg-white dark:bg-black/5 overflow-x-hidden">
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
      <HeroSection />

    </div>



 <ComponentShowcaseCard
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-20"
            />
            <InteractivePreview/>
            <BuildInterfacesCard
            className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-12 md:py-16 lg:py-20"
            />

            <TechnologyBadges/>








   </div>
  );
}

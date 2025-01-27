import React from "react";
import {Tabs, Tab, Card, CardBody, Button} from "@heroui/react";
import { SidebarDemo } from "../../Aceternity/SideMenu/SidebarDemo";
import HeroUICalendar from "../Calendar/Calendar";
import DateInputToFrom from "../DateInput/DateInputToFrom";
import HeroUIDateRangePicker from "../DateRangePicker/DateRangePicker";
import HeroUIDropDown2Select from "../DropDownSelect/DropDown2Select/DropDown2Select";
import HeroUiDropDownAssignTo from "../DropDownSelect/DropDown2Select/DropDownAssignTo";
import HeroUIForm from "../Form/HeroForm";
import HeroUIListAvtarSelection from "../ListBox/ListAvtarSelection";
import HeroUIListTextIconsNumber from "../ListBox/ListTextIconsNumber";
import HeroUISwitchDarkLightModeIcon from "../Switch/SwitchDarkLightModeIcon";
import HeroUIModernTableSearch from "../Table/ModernTableSearch";
import HeroUITabWithForm from "./TabWithForm";
import { AceternityUIAnimatedTestimonialsUse } from "../../Aceternity/AnimatedTestimonials/AnimatedTestimonialsUse";
import { AcUIAnimatedTooltipPreview } from "../../Aceternity/AnimatedTooltip/AnimatedTooltipPreview";
import { AcUIFeaturesSectionDemo } from "../../Aceternity/FeatureSection/FeatureGridText/FeatureGridText";
import { AcUILayoutGridDemo } from "../../Aceternity/LayoutGrid/LayoutGridDemo";
import { AcUIMeteorsDemo } from "../../Aceternity/Meteors/MeteorsDemo";
import { AcUISidebarDemo } from "../../Aceternity/SideBar/SideBarDemo";
import { AcUISidebarDemoUse } from "../../Aceternity/SideBar/SidebarUse";
import { AcUiStickyScrollRevealDemo } from "../../Aceternity/StickyScroll/StickyScroll";
import { AcUITimelineDemo } from "../../Aceternity/TimeLine/TimeLineDemo";
import { AcUITracingBeamDemo } from "../../Aceternity/TrackingDemo/TrackingDemo";
import { AcUIWorldMapDemo } from "../../Aceternity/WorldMap/WorldMap";
import { EldoraUIAnimatedCardDemo } from "../../eldoraui/AnimatedCard/AnimatedCardDemo";
import HeroUITextDescription from "../TextArea/Description";
import HeroUITimeInput from "../TimeInput/TimeInput";
import HeroUIColoursTooltip from "../Tooltip/ColorsTooltip";
import HeroUIUsername from "../User/UserName";
import HeroUIJustTabs from "./JustTabs";
import { AcUiBentoGrid } from "../../Aceternity/BentoGrid/BentoGrid";
import { BentoGridtextImages } from "../../eldoraui/BentoGridTxtImg/BentoGridTxtImg";
import { EldoraPricingSection } from "../../eldoraui/Pricing/Pricing";
import AutocompleteUsers from "../Autocomplete/AutocompleteUsers";
import DynamicItemAutocomplete from "../Autocomplete/DynamicItemAutocomplete";
import BadgeNotificationIcon from "../Badge/NotificationIcon";

export default function HeroUIJustTabs4() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}>
        <Tab key="AcUITimelineDemo" title="AcUITimelineDemo">
          <Card>
            <CardBody>
            <AcUITimelineDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUITracingBeamDemo" title="AcUITracingBeamDemo">
          <Card>
            <CardBody>
            <AcUITracingBeamDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUIWorldMapDemo" title="AcUIWorldMapDemo">
          <Card>
            <CardBody>
            <AcUIWorldMapDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="EldoraUIAnimatedCardDemo" title="EldoraUIAnimatedCardDemo">
          <Card>
            <CardBody>
            <EldoraUIAnimatedCardDemo />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUiBentoGrid" title="AcUiBentoGrid">
          <Card>
            <CardBody>
            <AcUiBentoGrid/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="BentoGridtextImages" title="BentoGridtextImages">
          <Card>
            <CardBody>
            <BentoGridtextImages/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="EldoraPricingSection" title="EldoraPricingSection">  
          <Card>
            <CardBody>
            <EldoraPricingSection/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="AutocompleteUsers" title="AutocompleteUsers">  
          <Card>
            <CardBody>
            <AutocompleteUsers />
            </CardBody>
          </Card>
        </Tab>

        <Tab key="DynamicItemAutocomplete" title="DynamicItemAutocomplete">  
          <Card>
            <CardBody>
            <DynamicItemAutocomplete/>
            </CardBody>
          </Card>
        </Tab>

      </Tabs>
    </div>
  );
}


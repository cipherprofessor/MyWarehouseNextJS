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

export default function HeroUIJustTabs3() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}>
        <Tab key="AceternityUIAnimatedTestimonialsUse" title="AceternityUIAnimatedTestimonialsUse">
          <Card>
            <CardBody>
            <AceternityUIAnimatedTestimonialsUse />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUIAnimatedTooltipPreview" title="AcUIAnimatedTooltipPreview">
          <Card>
            <CardBody>
            <AcUIAnimatedTooltipPreview/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUIFeaturesSectionDemo" title="AcUIFeaturesSectionDemo">
          <Card>
            <CardBody>
            <AcUIFeaturesSectionDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUILayoutGridDemo" title="AcUILayoutGridDemo">
          <Card>
            <CardBody>
            <AcUILayoutGridDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUIMeteorsDemo" title="AcUIMeteorsDemo">
          <Card>
            <CardBody>
            <AcUIMeteorsDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUISidebarDemo" title="AcUISidebarDemo">
          <Card>
            <CardBody>
            <AcUISidebarDemo/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUISidebarDemoUse" title="AcUISidebarDemoUse">
          <Card>
            <CardBody>
            <AcUISidebarDemoUse/>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="AcUiStickyScrollRevealDemo" title="AcUiStickyScrollRevealDemo">
          <Card>
            <CardBody>
            <AcUiStickyScrollRevealDemo/>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}


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

export default function HeroUIJustTabs2() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}>
        
        <Tab key="HeroUISwitchDarkLightModeIcon" title="HeroUISwitchDarkLightModeIcon">
          <Card>
            <CardBody>
            <HeroUISwitchDarkLightModeIcon /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIModernTableSearch " title="HeroUIModernTableSearch ">
          <Card>
            <CardBody>
            <HeroUIModernTableSearch />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUITabWithForm" title="HeroUITabWithForm">
          <Card>
            <CardBody>
            <HeroUITabWithForm /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIJustTabs" title="HeroUIJustTabs">
          <Card>
            <CardBody>
            <HeroUIJustTabs/> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="Button" title="Button">
          <Card>
            <CardBody>
            <Button>Click me</Button>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUITextDescription" title="HeroUITextDescription">
          <Card>
            <CardBody>
            <HeroUITextDescription /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUITimeInput" title="HeroUITimeInput">
          <Card>
            <CardBody>
            <HeroUITimeInput/> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIColoursTooltip" title="HeroUIColoursTooltip">
          <Card>
            <CardBody>
            <HeroUIColoursTooltip />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIUsername" title="HeroUIUsername">
          <Card>
            <CardBody>
            <HeroUIUsername />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}


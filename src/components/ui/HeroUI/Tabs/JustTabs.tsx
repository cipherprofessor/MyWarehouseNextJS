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

export default function HeroUIJustTabs() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}>
      <Tab key="HeroUIListTextIconsNumber" title="HeroUIListTextIconsNumber">
          <Card>
            <CardBody>
            <HeroUIListTextIconsNumber /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="SidebarDemo" title="SidebarDemo">
          <Card>
            <CardBody>
            <SidebarDemo />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="DateInputToFrom" title="DateInputToFrom">
          <Card>
            <CardBody>
            <DateInputToFrom />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUICalendar" title="HeroUICalendar">
          <Card>
            <CardBody>
            <HeroUICalendar />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIDateRangePicker" title="HeroUIDateRangePicker">
          <Card>
            <CardBody>
            <HeroUIDateRangePicker />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIForm" title="HeroUIForm">
          <Card>
            <CardBody>
            <HeroUIForm />
            </CardBody>
          </Card>
        </Tab>
        
        <Tab key="HeroUIListAvtarSelection" title="HeroUIListAvtarSelection">
          <Card>
            <CardBody>
            <HeroUIListAvtarSelection /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUIDropDown2Select" title="HeroUIDropDown2Select">
          <Card>
            <CardBody>
            <HeroUIDropDown2Select /> 
            </CardBody>
          </Card>
        </Tab>
        <Tab key="HeroUiDropDownAssignTo" title="HeroUiDropDownAssignTo">
          <Card>
            <CardBody>
            <HeroUiDropDownAssignTo /> 
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}


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
import BadgeNotificationIcon from "../Badge/NotificationIcon";
import BreadCrumbsUnderline from "../BreadCumbs/BreadCrumbsUnderline";
import BreadCrumbsRadius from "../BreadCumbs/BreadCrumbsRadius";
import BreadCrumbsColour from "../BreadCumbs/BreadCrumbsColour";
import ButtonsWithicons from "../Buttons/ButtonsWithicons";
import ChervonDropDownButton from "../Buttons/ChervonDropDownButton";
import MonthYearPickerCalendar from "../Calendar/MonthYearPickerCalendar";
import CheckboxColours from "../Checkbox/CheckboxColours";
import CustomCardCheckbox from "../Checkbox/CustomCardCheckbox";
import EnableDisableHookCheckbox from "../Checkbox/EnableDisableHookCheckbox";

export default function HeroUIJustTabs5() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" selectedKey={selected} onSelectionChange={(key) => setSelected(key.toString())}>
        
        <Tab key="BreadCrumbsUnderline" title="BreadCrumbsUnderline">
          <Card>
            <CardBody>
              <BreadCrumbsUnderline/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="BadgeNotificationIcon" title="BadgeNotificationIcon">  
          <Card>
            <CardBody>
            <BadgeNotificationIcon/>
            </CardBody>
          </Card>
        </Tab>

        

        <Tab key="BreadCrumbsRadius" title="BreadCrumbsRadius">  
          <Card>
            <CardBody>
            <BreadCrumbsRadius/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="BreadCrumbsColour" title="BreadCrumbsColour">  
          <Card>
            <CardBody>
            <BreadCrumbsColour/>
            </CardBody>
          </Card>
        </Tab>


        <Tab key="ButtonsWithicons" title="ButtonsWithicons">  
          <Card>
            <CardBody>
            <ButtonsWithicons/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="ChervonDropDownButton" title="ChervonDropDownButton">  
          <Card>
            <CardBody>
            <ChervonDropDownButton/>
            </CardBody>
          </Card>
        </Tab>

        

        <Tab key="MonthYearPickerCalendar" title="MonthYearPickerCalendar">  
          <Card>
            <CardBody>
            <MonthYearPickerCalendar/>
            </CardBody>
          </Card>
        </Tab>


        <Tab key="CheckboxColours" title="CheckboxColours">  
          <Card>
            <CardBody>
            <CheckboxColours/>
            </CardBody>
          </Card>
        </Tab>


        <Tab key="CustomCardCheckbox" title="CustomCardCheckbox">  
          <Card>
            <CardBody>
            <CustomCardCheckbox/>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}


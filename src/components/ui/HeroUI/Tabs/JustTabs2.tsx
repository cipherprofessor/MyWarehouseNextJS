import React from "react";
import {Tabs, Tab, Card, CardBody, Button} from "@heroui/react";
import HeroUISwitchDarkLightModeIcon from "../Switch/SwitchDarkLightModeIcon";
import HeroUIModernTableSearch from "../Table/ModernTableSearch";
import HeroUITabWithForm from "./TabWithForm";
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


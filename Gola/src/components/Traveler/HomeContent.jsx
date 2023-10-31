import React from "react";
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import HotelCard from "./HotelCards";
import TransportCard from "./TransportCard";
import ExperinenceCard from "./ExperienceCards";
import accommodationsDetails from "../../components/Traveler/HotelData";
const HomeContent = () =>{

    const [activeTab, setActiveTab] = React.useState("accommodation");
    const data = [
        {
            label: "Accommodation",
            value: "accommodation",
            desc: <HotelCard accommodations={accommodationsDetails} />
        },
        // Add more items to the 'data' array if needed

    {
            label: "Transport",
            value: "transport",
            desc: <TransportCard  />
        },
        {
            label: "Experience",
            value: "experience",
            desc: <ExperinenceCard />
        },

    ];

    return(
<div className="pl-24">
    <div className="flex
      flex-col justify-center item-center text-center w-full ">
        <Tabs  value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    </div>








</div>




    );

};

export default HomeContent;

import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import RoomForm from "../../components/Serviceprovider/Accomodation";
import TransportForm from "../../components/Serviceprovider/Transport";
import ExperienceForm from "../../components/Serviceprovider/Experience";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import React from "react";




function CreateService() {
    const [open, setOpen] = React.useState(1);
    const [businessName, setBusinessName] = React.useState("");
    const [businessEmail, setBusinessEmail] = React.useState("");
    const [businessTelephone, setBusinessTelephone] = React.useState("");
    const [businessAddress, setBusinessAddress] = React.useState("");
    const [businessLatitude, setBusinessLatitude] = React.useState("");
    const [businessLongitude, setBusinessLongitude] = React.useState("");
    const [roomCount, setRoomCount] = React.useState("");
    const [unitPriceForRoom, setUnitPriceForRoom] = React.useState("");
    const [capacityCount, setCapacityCount] = React.useState("");   
    const [unitPriceForPerson, setUnitPriceForPerson] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [images, setImages] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("businessName", businessName);
        localStorage.setItem("businessEmail", businessEmail);
        localStorage.setItem("businessTelephone", businessTelephone);
        localStorage.setItem("businessAddress", businessAddress);
        localStorage.setItem("businessLatitude", businessLatitude);
        localStorage.setItem("businessLongitude", businessLongitude);   
        localStorage.setItem("roomCount", roomCount);   
        localStorage.setItem("unitPriceForRoom", unitPriceForRoom); 
        localStorage.setItem("capacityCount", capacityCount);
        localStorage.setItem("unitPriceForPerson", unitPriceForPerson); 
        localStorage.setItem("description", description);
        localStorage.setItem("images", images); 
        // Repeat for all other fields
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] border">
                <Sidebar />
            </div>
            <div className="basis-[88%] border">
                <TopBar />
                <div className="m-6">
                    <div>
                        <Typography variant="h4" color="blue-gray">
                            Create Service
                        </Typography>
                    
                        <>
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>Service As a Accommodation </AccordionHeader>
                            <AccordionBody>
                                <Typography color="gray" className="mt-1 font-normal">
                                    Business Details <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <form onSubmit={handleSubmit}   className="mt-8 mb-2 max-w-screen-lg sm:w-8/12">
                                    <div className="mb-4 flex flex-row gap-6">
                                    <Input size="lg" label="Business Name" onChange={e => setBusinessName(e.target.value)}/>
                                    <Input size="lg" label="Business Email" onChange={e => setBusinessEmail(e.target.value)}/>
                                    <Input size="lg" label="Business Telephone" onChange={e => setBusinessTelephone(e.target.value)}/>
                                    <Input size="lg" label="Business Address" onChange={e => setBusinessAddress(e.target.value)}/>
                                    </div>

                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                          Detailed Description about Your Service Type <span style={{ color: 'red' }}>*</span>
                                        </Typography>

                                       
                                            <Textarea label="Description" value={description} onChange={handleDescriptionChange} />

                                            <div className="my-4 grid grid-cols-2 gap-4 ">

                                            <Input size="lg" label="Room Count" onChange={e => setRoomCount(e.target.value)}/>
                                            <Input size="lg" label="Unit Price for person" onChange={e => setUnitPriceForPerson(e.target.value)}/>

                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                            Add images of your service <span style={{ color: 'red' }}>*</span>
                                        </Typography>

                                        <div className="mb-3">
                                            <Input
                                                type="file"
                                                id={`formFileMultiple`}
                                                multiple
                                            />
                                        </div>
                                    </div>
                                
                                    <div>
                                        <Button type="submit" className="mt-6 px-44 "  >
                                            Create
                                        </Button>
                                    </div>

                                </form>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                Service As a Transportation
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography color="gray" className="mt-1 font-normal">
                                    Business Details <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <form className="mt-8 mb-2 max-w-screen-lg sm:w-8/12">
                                    <div className="mb-4 flex flex-row gap-6">
                                        <Input size="lg" label="Business Name"/>
                                        <Input size="lg" label="Business Email" />
                                        <Input size="lg" label="Business Telephone" />
                                        <Input size="lg" label="Address" />
                                        <Input size="lg" label="Location latitude" />
                                        <Input size="lg" label="Location longitude" />
                                    </div>


                                    <Typography color="gray" className="mt-2 mb-2 font-normal">
                                       Detailed Description about Your Service Type <span style={{ color: 'red' }}>*</span>
                                    </Typography>

                                    <Textarea label="Description" />

                                    <div className="my-4 grid grid-cols-2 gap-4 ">
                                        <Input size="lg" label="Unit Price for 1km"/>
                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                            Add images of your service <span style={{ color: 'red' }}>*</span>
                                        </Typography>
                                        <div className="mb-3">
                                            <Input
                                                type="file"
                                                id={`formFileMultiple`}
                                                multiple
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Button className="mt-6 px-44 "  >
                                            Create
                                        </Button>
                                    </div>

                                </form>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                Service as a Experience Provider
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography color="gray" className="mt-1 font-normal">
                                    Business Details <span style={{ color: 'red' }}>*</span>
                                </Typography>
                                <form className="mt-8 mb-2 max-w-screen-lg sm:w-8/12">
                                    <div className="mb-4 flex flex-row gap-6">
                                        <Input size="lg" label="Business Name"/>
                                        <Input size="lg" label="Business Email" />
                                        <Input size="lg" label="Business Telephone" />
                                        <Input size="lg" label="Address" />
                                        <Input size="lg" label="Location latitude" />
                                        <Input size="lg" label="Location longitude" />
                                    </div>


                                    <Typography color="gray" className="mt-2 mb-2 font-normal">
                                       Detailed Description about Your Service Type <span style={{ color: 'red' }}>*</span>
                                    </Typography>

                                    <Textarea label="Description" />

                                    <div className="my-4 grid grid-cols-2 gap-4 ">
                                        <Input size="lg" label="Capacity Count"/>
                                        <Input size="lg" label="Unit Price for Person"/>
                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                            Add images of your service <span style={{ color: 'red' }}>*</span>
                                        </Typography>
                                        <div className="mb-3">
                                            <Input
                                                type="file"
                                                id={`formFileMultiple`}
                                                multiple
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Button className="mt-6 px-44 "  >
                                            Create
                                        </Button>
                                    </div>

                                </form>
                            </AccordionBody>
                        </Accordion>
                    </>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default CreateService;

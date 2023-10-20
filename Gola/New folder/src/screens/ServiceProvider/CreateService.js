
import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import Accommodation from "../../components/Serviceprovider/Accomodation"; // Import your Accommodation component
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select,
    Option,
    Textarea,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import React from "react";




function CreateService() {
    const [open, setOpen] = React.useState(1);

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
                                    Business Details
                                </Typography>
                                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                    <div className="mb-4 flex flex-col gap-4">
                                        <Input size="lg" label="Business Name" />
                                        <Input size="lg" label="Business Email" />
                                        <Input size="lg" label="Address" />

                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                           Short Description about Your Service Type
                                        </Typography>
                                        <Textarea label="Description" />
                                        <Input size="lg" label="Price" />
                                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                                            Add images of your service
                                        </Typography>
                                        <div className="mb-3">
                                            <Input
                                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                                type="file"
                                                id="formFileMultiple"
                                                multiple/>
                                        </div>
                                    </div>
                                    <Button className="mt-6" fullWidth>
                                        Create
                                    </Button>
                                </form>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                                ourselves and actualize our dreams.
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

import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import * as React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter, Input, Option, Select, Textarea,
    Typography,
} from "@material-tailwind/react";
import {PresentationChartBarIcon, QueueListIcon} from "@heroicons/react/24/solid";


const NewBooking = () => {

    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] border">
                <Sidebar/>
            </div>
            <div className="basis-[88%] border mb-8 ">
                <TopBar/>
                <div className="ml-6">
                    <Typography variant="h4" color="blue-gray">
                        New Booking
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-4">
                            <Input size="lg" label="Business Name" />
                            <Input size="lg" label="Business Email" />
                            <Input size="lg" label="Address" />

                            <Typography color="gray" className="mt-2 mb-2 font-normal">
                                Fill the details about Your Service Type
                            </Typography>

                            <Select
                                label="Select Service Type">
                                <Option value="Accommodation">Accommodation</Option>
                                <Option value="Food">Food</Option>
                                <Option value="Experience">Experience</Option>
                                <Option value="Transport">Transport</Option>
                                <Option value="Other">Other</Option>
                            </Select>
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
                </div>
            </div>
        </div>

    );
}
export default NewBooking;

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
} from "@material-tailwind/react";
import * as React from "react";

function CreateService() {

    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] border">
                <Sidebar />
            </div>
            <div className="basis-[88%] border">
                <TopBar />
                <div className="m-6">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Create Service
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Business Details
                        </Typography>
                    </div>

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

                        </div>
                        <Button className="mt-6" fullWidth>
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateService;

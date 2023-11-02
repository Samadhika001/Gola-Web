import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon,TrashIcon} from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import  React , {useState,useEffect} from "react";
import jetwing from "../../assets/jetwing.jpg";
import jetwingAd from "../../assets/jetwingAd.jpeg";
import jetwingsaman from "../../assets/jetwindsaman.jpeg";
import {Link} from "react-router-dom";

function PackagesList() {


    const [businessEmail, setBusinessEmail] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [businessTelephone, setBusinessTelephone] = useState('');
    const [businessDescription, setBusinessDescription] = useState(''); 
    const [businessType, setBusinessType] = useState('');
    const [businessImage, setBusinessImage] = useState(''); 


    useEffect(() => {
        const storedBusinessName = localStorage.getItem('businessName');
        const storedBusinessEmail = localStorage.getItem('businessEmail');
       
        const storedBusinessDescription = localStorage.getItem('businessDescription');
        

        if (storedBusinessName) setBusinessName(storedBusinessName);
        if (storedBusinessEmail) setBusinessEmail(storedBusinessEmail);
        if (storedBusinessDescription) setBusinessDescription(storedBusinessDescription);

    }, []);

    return (
        <div className="flex">
            <div className="basis-[12%]  border ">
                    <Sidebar/>
            </div>
            <div className="basis-[88%] border overflow-scroll ">
                <TopBar/>

                <Card className="h-full w-full">
                    <CardHeader floated={false} shadow={false} className="rounded-none">
                        <div className="mb-8 flex items-center justify-between gap-8">
                            <div>
                                <Typography variant="h5" color="blue-gray">
                                    Service list
                                </Typography>
                                <Typography color="gray" className="mt-1 font-normal">
                                    See information about Your Services
                                </Typography>
                            </div>
                            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                                <Link to="/CreateService">
                                <Button className="flex items-center gap-3" size="sm">
                                    <PlusIcon strokeWidth={2} className="h-4 w-4" /> Service Package
                                </Button>
                                </Link>
                            </div>
                        </div>

                    </CardHeader>
                    <div className="flex flex-row gap-6 ml-10">
                        <Card className="m-6 w-80">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={jetwing}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                  Jetwing Colombo 7
                                </Typography>
                                <Typography>
                                    We are the epitome of urban luxury in the heart of metropolitan Colombo and is our home of Sri Lankan hospitality in the city.
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex flex row gap-4 pt-0">
                                <Link to="/ViewService">
                                <Button>View More</Button>
                                </Link>
                                <Tooltip content="Edit">
                                    <IconButton variant="text">
                                        <PencilIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content="Delete">
                                    <IconButton variant="text">
                                        <TrashIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                            </CardFooter>
                        </Card>
                        <Card className="m-6 w-80">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    className="h-full w-full"
                                    src={jetwingAd}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Jetwing Adventure
                                </Typography>
                                <Typography>
                                    We are a team of passionate outdoors and nature lovers. We offer cycling, walking and hiking, nature and wildlife, eco and family tours in Sri Lanka
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex flex row gap-4 pt-0">
                                <Button>View More</Button>
                                <Tooltip content="Edit">
                                    <IconButton variant="text">
                                        <PencilIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content="Delete">
                                    <IconButton variant="text">
                                        <TrashIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                            </CardFooter>
                        </Card>
                        <Card className="m-6 w-80">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    className="h-full w-full"
                                    src={jetwingsaman}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                {businessName}
                                </Typography>
                        
                                <Typography>
                       This is a Very Good Place to Visit                                                                
                       </Typography>
                            </CardBody>
                            <CardFooter className="flex flex row gap-4 pt-0">
                                <Button>View More</Button>
                                <Tooltip content="Edit">
                                    <IconButton variant="text">
                                        <PencilIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip content="Delete">
                                    <IconButton variant="text">
                                        <TrashIcon className="h-4 w-4" />
                                    </IconButton>
                                </Tooltip>
                            </CardFooter>
                        </Card>
                    </div>


                </Card>
            </div>
        </div>
    );
}
export default PackagesList;
import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    ChatBubbleBottomCenterIcon,
    InboxIcon,
    PowerIcon,
    QueueListIcon, CalendarIcon, WalletIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";


function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="flex h-screen">

            <Card className="w-full max-w-[18rem] p-4 shadow-xl shadow-light-green-100-900/5 ">
                <div className="mb-2 flex items-center gap-2 p-2">
                    <img src={Logo2} alt="brand" className="h-20 w-20" />
                    <Typography variant="h3" color="blue-gray">
                      Gola
                    </Typography>
                </div>
                <List>
                    <Accordion>
                        <ListItem >
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    <Link to="/SpDashboard">Dashboard</Link>
                                </Typography>
                        </ListItem>
                    </Accordion>
                    <Accordion>
                        <ListItem >

                            <ListItemPrefix>
                                <QueueListIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                <Link to="/Bookings">Bookings</Link>
                            </Typography>

                        </ListItem>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                <ListItemPrefix>
                                    <ShoppingBagIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Packages
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    <Link to="/PackagesList">List</Link>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Create
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <hr className="my-2 border-blue-gray-50" />
                    <ListItem>
                        <ListItemPrefix>
                            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Chat
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <CalendarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Calendar
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <WalletIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Account
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>

            </Card>
        </div>

    );
}

export default Sidebar;
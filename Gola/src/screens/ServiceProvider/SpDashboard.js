import Sidebar from "../../components/Serviceprovider/Sidebar";
import TopBar from "../../components/Serviceprovider/TopBar";
import * as React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import {PresentationChartBarIcon} from "@heroicons/react/24/solid";


const SpDashboard = () => {
    const TABLE_HEAD = ["Customer", "Date", "Time", "Details"];

    const TABLE_ROWS = [
        {
            name: "John Michael",
            job: "Manager",
            date: "23/04/18",
        },
        {
            name: "Alexa Liras",
            job: "Developer",
            date: "23/04/18",
        },
        {
            name: "Laurent Perrier",
            job: "Executive",
            date: "19/09/17",
        },
        {
            name: "Michael Levi",
            job: "Developer",
            date: "24/12/08",
        },
        {
            name: "Richard Gran",
            job: "Manager",
            date: "04/10/21",
        },
    ];
    return (
        <div className="flex">
            <div className="basis-[12%] h-[100vh] border">
               <Sidebar/>
            </div>
            <div className="basis-[88%] border mb-8 ">
                <TopBar/>
                <div className="ml-6">
                    <Typography variant="h4" color="blue-gray">
                        Dashboard
                    </Typography>
                </div>

<div className="flex flex-row gap-12 ml-10">
    <Card className=" mt-6 h-40 w-60">
        <CardBody>
            <Typography font="poppins" variant="h5" color="blue-gray" className="mb-2">
                Total Bookings
            </Typography>
            <Typography variant="h4" color="black">
                10
            </Typography>
            <CardFooter className="pt-0" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <div style={{ padding: '8px' }}>
                    <PresentationChartBarIcon className=" h-12 w-12" />
                </div>


            </CardFooter>
        </CardBody>

    </Card>
    <Card className=" mt-6 h-40 w-60">
        <CardBody>
            <Typography font="poppins" variant="h5" color="blue-gray" className="mb-2">
                Total Earnings
            </Typography>
            <Typography variant="h4" color="black">
                10
            </Typography>
            <CardFooter className="pt-0" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <div style={{ padding: '8px' }}>
                    <PresentationChartBarIcon className=" h-12 w-12" />
                </div>


            </CardFooter>
        </CardBody>

    </Card>
    <Card className=" mt-6 h-40 w-60">
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
               Today's Bookings
            </Typography>
            <Typography variant="h4" color="black">
                1
            </Typography>

        <CardFooter className="pt-0" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
<div style={{ padding: '8px' }}>
    <PresentationChartBarIcon className=" h-12 w-12" />
</div>


        </CardFooter>
        </CardBody>
    </Card>
    <Card className=" mt-6 h-40 w-60">
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                Hold Money
            </Typography>
            <Typography variant="h4" color="black">
                10 000$
            </Typography>
            <CardFooter className="pt-0" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <div style={{ padding: '8px' }}>
                    <PresentationChartBarIcon className=" h-12 w-12" />
                </div>


            </CardFooter>
        </CardBody>

    </Card>
</div>
                <div>
                    <h2 className=" m-5 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
                        Today's Booking
                    </h2>
                </div>
<div>

    <Card className="h-full w-full overflow-scroll">
    <table className="w-full min-w-max table-auto text-left">
    <thead>
    <tr>
{TABLE_HEAD.map((head) => (
    <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
    <Typography
    variant="small"
    color="blue-gray"
    className="font-normal leading-none opacity-70"
    >
{head}
    </Typography>
    </th>
    ))}
    </tr>
    </thead>
    <tbody>
{TABLE_ROWS.map(({ name, job, date }, index) => (
    <tr key={name} className="even:bg-blue-gray-50/50">
    <td className="p-4">
    <Typography variant="small" color="blue-gray" className="font-normal">
{name}
    </Typography>
    </td>
    <td className="p-4">
    <Typography variant="small" color="blue-gray" className="font-normal">
{job}
    </Typography>
    </td>
    <td className="p-4">
    <Typography variant="small" color="blue-gray" className="font-normal">
{date}
    </Typography>
    </td>
    <td className="p-4">
    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
    Edit
    </Typography>
    </td>
    </tr>
    ))}
    </tbody>
    </table>
    </Card>

</div>
            </div>
        </div>

    );
}
export default SpDashboard;

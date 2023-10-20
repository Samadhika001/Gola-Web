import React, { useState, useRef, useEffect, createRef } from 'react';
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

function TransportForm() {
    const [transData, setTransData] = useState([{ transType: '', transFacilities: '', price: '', images: [] }]);
    const fileInputRefs = useRef([]);

    // Initialize refs for file inputs
    useEffect(() => {
        setFileInputRefs((refs) => (
            Array(transData.length)
                .fill()
                .map((_, index) => refs[index] || createRef())
        ));
    }, [transData]);

    const setFileInputRefs = (callback) => {
        fileInputRefs.current = callback(fileInputRefs.current);
    };

    const addTrans = () => {
        setTransData((prevRoomData) => [
            ...prevRoomData,
            { transType: '', transFacilities: '', price: '', images: [] },
        ]);
    };

    const handleTransTypeChange = (index, value) => {
        const updatedData = [...transData];
        updatedData[index].transType = value;
        setTransData(updatedData);
    };

    const handleTransFacilitiesChange = (index, value) => {
        const updatedData = [...transData];
        updatedData[index].transFacilities = value;
        setTransData(updatedData);
    };

    const handlePriceChange = (index, value) => {
        const updatedData = [...transData];
        updatedData[index].price = value;
        setTransData(updatedData);
    };

    const handleImageChange = (index, files) => {
        const updatedData = [...transData];
        updatedData[index].images = files;
        setTransData(updatedData);
    };

    const removeTrans = (index) => {
        if (transData[index]) {
            const updatedData = [...transData];
            updatedData.splice(index, 1);
            setTransData(updatedData);
        }
    };

    return (
        <div >
            {transData.map((trans, index) => (
                <div key={index}>
                    <div className="my-4 grid grid-cols-2 gap-4 ">
                        <div>
                            <Input label="Transport Type" value={trans.transType} onChange={(e) => handleTransTypeChange(index, e.target.value)} />

                        </div>
                        <div className="row-span-3">
                        <Textarea label="Transport Facilities" value={trans.transFacilities} onChange={(e) => handleTransFacilitiesChange(index, e.target.value)} />
                        </div>
                        <div>
                            <Input label="Price" value={trans.price} onChange={(e) => handlePriceChange(index, e.target.value)} />
                        </div>


                    <div>
                        <Typography color="gray" className="mt-2 mb-2 font-normal">
                            Add images of your service <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <div className="mb-3">
                        <Input
                            type="file"
                            id={`formFileMultiple-${index}`}
                            multiple
                            ref={fileInputRefs[index]}
                            onChange={(e) => handleImageChange(index, e.target.files)}
                        />
                        </div>
                    </div>
                    </div>
                    {index > 0 && (
                        <Button className="my-4" size="sm" variant="outlined" type="button" onClick={() => removeTrans(index)}>Remove</Button>
                    )}
                </div>
            ))}
            <Button size="sm" variant="outlined"  type="button" onClick={addTrans}>Add Vehicle</Button>
        </div>
    );
}

export default TransportForm;

import React, {useState} from 'react';

const Box = () => {
    const [formInfo, setFormInfo] = useState({
        color: "",
        boxHeight: "",
        boxWidth: "",
    });


    const [listOfBoxes, setListOfBoxes] = useState([]);


    const changeHandler = (e) => {
        // console.log(`Changing input ${e.target.name} to ${e.target.value}`);
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value,
        });
    }


    const submitHandler = (e) => {
        e.preventDefault();

        setListOfBoxes([
            ...listOfBoxes,
            formInfo
        ]);
        // console.log(listOfBoxes);

        setFormInfo({
            color: "",
            boxHeight: "",
            boxWidth: "",
        });
    }


    return (
        <div className="container">
            <form onSubmit={(e)=>submitHandler(e)} className="form-group mt-5">
                <div>
                    <label htmlFor="color">Color</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="color" value={formInfo.color} className="form-control" />
                </div>
                <div>
                    <label htmlFor="boxHeight">Height</label>
                    <input onChange={(e)=>changeHandler(e)} type="number" name="boxHeight" value={formInfo.boxHeight} className="form-control" />
                </div>
                <div>
                    <label htmlFor="boxWidth">Width</label>
                    <input onChange={(e)=>changeHandler(e)} type="number" name="boxWidth" value={formInfo.boxWidth} className="form-control" />
                </div>
                <input type="submit" value="Add" className="mt-3"/>
            </form>
            <br />
            <hr />
            <br />
            <div className="d-flex flex-wrap justify-content-around">
                {
                    listOfBoxes.map((oneBox) => {
                        return <div style={{backgroundColor: oneBox.color, width: `${oneBox.boxWidth}px`, height: `${oneBox.boxHeight}px`}} ></div>
                    })
                }
            </div>
        </div>
    );
};



export default Box;
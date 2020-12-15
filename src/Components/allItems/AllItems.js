import React, {useEffect, useState} from 'react';
import './style.css';
import dataItems from '../../data/dataFiles.json';
import Item from "../Item/Item";


function AllItems() {

    const [arr, setArr] = useState([]);
    const [clickCount, setClickCount] = useState(0);
    const [clickLetter, setClickLetter] = useState([]);

    useEffect(() => {

        let tmpArrResult = dataItems.map(item => {
            item.id = Math.floor(1 + Math.random() * (1000000 + 1 - 1));
            return item
        })

        tmpArrResult.sort((item1, item2) =>{
            return item1.id - item2.id;
        })

        setArr(() => tmpArrResult);

    }, [])

    const changeActiveClass = (id) => {
        let tmpArr = [...arr].map(item => {
            if (item.id === id) {
                return {...item, active: "selected"}
            }
            return item;
        })
        setArr(tmpArr);
    }

    const myFunc = (event) => {
        setClickCount(clickCount + 1);
        console.log(event.target.id)
        setClickLetter(() =>{
                return [...clickLetter, event.target.innerText];
            }
        )
    }

    let result = arr.map((item, index) => <Item {...item} myFunc={myFunc} changeActiveClass={changeActiveClass} key={index}/>)

    let defaultValue = () => {
        setClickCount(0);
        setClickLetter([]);
    }

    if(clickCount === 2 && clickLetter[0] === clickLetter[1]){
        let tmpArr = [...arr];
        tmpArr = arr.map(item => {
            if(item.letter === clickLetter[0]){
                return {...item, found: true}
            }
            return item;
        })

        setArr(tmpArr)
        defaultValue();
    }

    if(clickCount === 3) {
        let tmpArr = arr.map(item => {
            return {...item, active: "notSelected"};
        });
        setArr(tmpArr)
        defaultValue();
    }

    return (
        <div className={'AllItems'}>
            {result}
        </div>
    )

}

export default AllItems;

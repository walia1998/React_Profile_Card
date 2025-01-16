import { useState } from "react"

function ArryaSorted() {
const [arr, setArr] = useState([10,12,5,6,7,1,0,-2,5]);

function sortArray() {
    const sortedArr = [...arr].sort((a,b) => a - b);
    setArr(sortedArr);
}

function insert() {
    const randomNumber = Math.floor(Math.random() * 100);
    const newArr = [...arr, randomNumber];
    setArr(newArr)
}

return(
    <>
    <ul>
         {arr.map((item, index) =><li key = {index}>{item}</li> )}
    </ul>
   <button onClick={sortArray}>Sorted Arr</button>
   <button onClick={insert}>Insert</button>
    </>
)


}

export default ArryaSorted;
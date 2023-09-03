import React, { useState } from 'react'
import './Todo.css'
import keepnotes from '../Images/keepnotes.png'
import { MdNoteAdd, MdDeleteForever } from 'react-icons/md'

const Todo = () => {
    const [data, setdata] = useState("");
    const [item, setitem] = useState([]);

    const additem = () => {
        if (!data) {
            alert("You have not entered data yet...!")
        } else {
            setitem([data, ...item]);
            setdata("");
            console.log(item.length)
        }
    }
    const deleteitem = (index) => {
        const updatedItems = item.filter((element, findex) => {
            return findex !== index;
        })
        setitem(updatedItems);
    }
    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            additem();
        }
    }
    return (
        <>
            <div className='body_container'>
                <div className='content_container'>
                    <img className='keepnotes_img' src={keepnotes} alt="" />
                    <div className='heading'>What you wants to add Now...!😉😉</div>
                    <div className='list_add_box'>
                        <input type="text" value={data} onChange={(event) => { setdata(event.target.value) }} onKeyDown={handleKeyDown} placeholder='✍✍List items...' />
                        <MdNoteAdd className='list_icon' onClick={() => additem()} />
                    </div>
                    <button className={`${item.length<2 ? "hide" : ""}`} onClick={()=>{setitem([])}}>Remove All</button>
                </div>
                <div className="list_container">
                    <div className='wrapper'>
                        {
                            item.map((element, index) => {
                                return (
                                    <div className="each_list" key={index}>
                                        <div>{element}</div>
                                        <MdDeleteForever className='delete_icon' onClick={() => { deleteitem(index) }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;

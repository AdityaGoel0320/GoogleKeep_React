import React, { useState } from 'react'
import Note from './Note';

export default function GoogleKeepFinal() {
    let year = new Date().getFullYear();

    const [expand, setexpand] = useState(false)

    const [additem, setadditem] = useState([])


    const [note, setnote] = useState({
        title: "",
        content: "",
    })


    let inputevent = (e) => {

        const { name, value } = e.target;

        setnote((predata) => {
            return {
                ...predata,
                [name]: value,
            }
        })

    }



    let addevent = (e) => {
        e.preventDefault();

        console.log("hi");

        setadditem((predata) => {
            return [...predata, note]

        })


        setnote(

            {
                title: "",
                content: "",
            }

        )

    }


    let ondelete = (id) => {
        console.log("you have clicked delete btn")


        setadditem((oldata) =>
            oldata.filter((cuudata, indx) => {
                return indx != id;
            })
        )
    }


    let expandit =()=>{
        setexpand(true) ;
    }

    let backtonormal = ()=>{
        setexpand(false) ;
    }
    return (

        <>
            <nav>
                <ul>
                    Aditya Keep
                </ul>
            </nav>
            <form action="" onDoubleClick={backtonormal}>


                {expand ?

                    <input type="text" placeholder='title' autoComplete='off' value={note.title} name="title" onChange={inputevent} onDoubleClick={backtonormal} /> : null}


                <textarea name="" id="" cols="" rows="" placeholder='write a note...' value={note.content} onChange={inputevent} name="content" onClick={expandit} onDoubleClick={backtonormal} ></textarea>

               {
                expand ?  <button onClick={addevent}>+</button> : null
               }



            </form>


            {
                additem.map((val, index) => {
                    return <Note
                        key={index}
                        title={val.title}
                        content={val.content}

                        id={index}
                        deleteitem={ondelete}


                    />
                })
            }





















            <footer>
                copyroght nor allowed {year}
            </footer>

        </>
    )
}

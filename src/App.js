import "./App.css";
import React, { useState, useRef } from "react";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Item } from "./component/Item";

const arr = [
    {
        text: "Le Manh Cuong",
    },
    {
        text: "Nguyen Duy Huy",
    },
    {
        text: "Le Xuan Duc",
    },
];

function App() {
    const [txtinput, setTxtinput] = useState("");
    const txt = useRef(null);
    const [arrayName, setArrayName] = useState(arr);

    const handleAdd = () => {
        setArrayName([...arrayName, { text: txtinput }]);
        setTxtinput("");
        txt.current.focus();
    };

    const handleDelete = (index) => {
        const removeArray = arrayName.filter((item)=>{
        })
    }

    return (
        <div className="App">
            <Header></Header>
            <div className="body">
                {arrayName.map((item, i) => (
                    <div key={i} className="item">
                        <Item item={item} index={i}></Item>
                        <button className="item_delete" onClick={handleDelete(i)}>
                            <i className="fa-regular fa-trash"></i>
                        </button>
                    </div>
                ))}
                <div className="add">
                    <input
                        type="text"
                        onChange={(e) => {
                            setTxtinput(e.target.value);
                        }}
                        value={txtinput}
                        ref={txt}
                    ></input>
                    <button className="btn-add" onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;

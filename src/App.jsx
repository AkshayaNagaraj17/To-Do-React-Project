import { useState } from "react"
import './index.css'; 
import './App.css'
function App()
{
    const[task,setTask]=useState(["Wake up 6.00","Eat breakkie"])
    const [newt,setNew]=useState()

    function add()
    {
        if(newt.trim()!=="")
        {
            setTask((t)=>[...t,newt])
            setNew("")
        }
    }
    function remove(index)
    {
        setTask((t)=>t.filter((_,i)=>i !=index))
    }
    function input(e)
    {
        setNew(e.target.value)
    }


    return (
        <div className=" m-6 rounded-lg bg-gray-400 p-10 flex items-center justify-center flex-col">
            <div className="flex flex-row ">
            <h1 className="  text-white head font-mono text-3xl mb-5 hover:text-cyan-400 hover:shadow-cyan-500 shadow-xl">Todo List</h1>
            <img className=" ml-5 mb-3 size-10"src="https://t3.ftcdn.net/jpg/10/53/27/56/240_F_1053275632_OdXx4nmwtJkbTLQQJNnBsWtgG43Nfly3.jpg" alt="" />
            </div>
            <div>
                <input type="text" value={newt} onChange={input} placeholder="Enter new task" className="p-3  rounded lg border border-gray-800 border-spacing-3"/>
                <button className=" hover:bg-green-900 bg-green-700 text-yellow-50 p-3 rounded-lg" onClick={add}>Add task</button>
            </div>
          
            
            <ol className="pl-6 text-lg m-3" >
                {task.map((t,index)=>(<li  key={index} className="flex items-center justify-start">
                    <span >{t}</span>
                    <button className=" p-2 pl-4 pr-4 text-sm ml-20 rounded-lg hover:bg-red-700 transition duration-75 bg-red-800 text-white"onClick={()=>remove(index)}>Remove</button>
                </li>))}
            </ol>
        </div>

    );
}

export default App
import { Button, Dropdown, Label, TextInput, Toast } from "flowbite-react";
import React from "react";
import { addTodoAction } from "../../../redux/Todo/Action";


const TodoForm:React.FC = () => {
    const onClick = () =>{
        // dispatch(addTodoAction({
        //     title: 'weak',
        //     completed: true
        // }))
        console.log('test')
    }
    return(
        <div>
            <form >
                <div className="flex flex-col gap-4">
                    <Label htmlFor="idInput">
                        ID
                    </Label>
                    <TextInput
                        type="text"
                        id="idInput"
                        placeholder="Todo ID"
                    />
                    <Label htmlFor="titleInput">
                        TITLE
                    </Label>
                    <TextInput
                        type="text"
                        id="titleInput"
                        placeholder="Title"
                    />
                    <Label htmlFor="statusInput">
                        STATUS
                    </Label>
                    <TextInput
                        type="text"
                        id="statusInput"
                        placeholder="Status"
                    />
                    
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6 float-right">
                        {/* <Button 
                        color="success"
                        onClick={()=>onClick()}
                        >
                           + ADD TODO
                        </Button> */}
                        <button
                            onClick={()=>onClick()}
                            className="bg-blue-700 rounded-md px-4 py-2 text-white font-semibold"
                        >
                           + ADD TODO
                        </button>
                    </div>
            </form>
        </div>
        
    );
}
export default TodoForm;
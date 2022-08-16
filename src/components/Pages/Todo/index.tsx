import React from "react";
import TodoTable from "../../Todo/Table";
import TodoForm from "../../Todo/TodoForm";

const Todo:React.FC = () => {
    return (
        <div className="flex justify-center pt-7">
            <div className=" w-5/6 bg-white rounded shadow-md max-h-80vh ">
                <div className="grid grid-cols-3 p-9 gap-12 divide-x ">
                    <div className="col-span-2 flex flex-col flex-grow overflow-auto ">
                        <TodoTable/>
                    </div>
                    <div className="col-span-1 flex flex-col flex-grow pl-9">
                        <TodoForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Todo;
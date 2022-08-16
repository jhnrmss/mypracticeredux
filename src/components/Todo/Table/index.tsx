import { Table } from "flowbite-react";
import React, { useState } from "react";
import DeleteModal from "../FormModal/DeleteTodoModal";
import FormModal from "../FormModal/UpdateTodoModal";


const TodoTable:React.FC = () => {
    const [isOpenFormModal, setIsOpenFormModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);


    const dummyData = [
        {id:'1',title:'title1',completed: 'false'},
        {id:'2',title:'title2',completed: 'true'},
        {id:'3',title:'title3',completed: 'false'},
        {id:'4',title:'title4',completed: 'true'},
        {id:'5',title:'title5',completed: 'true'},
        {id:'6',title:'title6',completed: 'false'},
    ]
    const feilds = [
        'ID',
        'TITLE',
        'COMPLETED',
        'ACTIONS'
    ]
    const renderThead = () => {
        return (
            <Table.Head>
                {feilds.map((feild)=>(
                    <Table.HeadCell >
                        {feild}
                    </Table.HeadCell>
                ))
                }
            </Table.Head>
        );
    }
    const renderTbody = () => {

        return (dummyData.map((todo)=>(
            <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {todo.id}
                </Table.Cell>
                <Table.Cell>
                    {todo.title}
                </Table.Cell>
                <Table.Cell>
                    {todo.completed}
                </Table.Cell>
                <Table.Cell >
                    <div className="grid grid-cols-2 w-16 divide-x-2 ">
                    <label
                    className="col col-span-1 font-medium text-blue-600 dark:text-blue-500 cursor-pointer "
                    onClick={() => setIsOpenFormModal(true)}
                    >
                    Edit 
                    </label>
                    <label
                    className="col col-span-1 pl-2 font-medium text-blue-600 dark:text-blue-500 cursor-pointer"
                    onClick={() => setIsOpenDeleteModal(true)}
                    >
                     Delete
                    </label>
                    </div>
                </Table.Cell>
                </Table.Row>
            </Table.Body>
        ))
        );
    }
    return (
        <div className="w-full scrollbar-none">
            <Table>
                {renderThead()}
                {renderTbody()}
            </Table>
            <FormModal
                isOpen={isOpenFormModal}
                onClose={()=>setIsOpenFormModal(false)}
            />
            <DeleteModal
                isOpen={isOpenDeleteModal}
                onClose={()=>setIsOpenDeleteModal(false)}
            
            />
            
        </div>
    );
};
export default TodoTable;
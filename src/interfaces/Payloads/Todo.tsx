

export interface ITodo {
    id: number,
    title: string,
    completed:boolean
}

export interface GetTodoPayLoad {
    id?: number,
}
export interface AddTodoPayLoad {
    title: string,
    completed:boolean
}
export interface RemoveTodoPayLoad {
    id: number,
}
export interface UpdateTodoPayLoad {
    id: number,
}

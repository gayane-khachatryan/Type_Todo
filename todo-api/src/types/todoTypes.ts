export type TodoType = {
    id?: number;
    title: string;
    description?: string;
    status?: "pending" | "inprogress "|"done"
    created_at?: Date;
    updated_at?: Date;
}
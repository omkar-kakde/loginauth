
export interface Iproduct {
    pname : string,
    pid : number,
    pstatus : Tpstatus,
    userRole : string
}

export type Tpstatus =  "In progress"  | "dispatched"  | "Deliverd"
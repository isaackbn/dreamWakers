


export module ModalsData{

    export interface dwForm {
        //set: forms, read: dwForm
        ratio:number
        answered:number
        notAnswered:number
        skip:boolean //set:dwForm, read:topbar
        received:boolean //set:dwForm, read:dwForm, topbar
        target:string

    }

}
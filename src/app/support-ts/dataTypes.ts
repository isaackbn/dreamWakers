


export module DataType{

    export interface dwForm {
        //set: forms, read: dwForm
        profileType:string
        ratio:number
        answered:number
        notAnswered:number
        skip:boolean //set:dwForm, read:topbar
        received:boolean //set:dwForm, read:dwForm, topbar
        target:string

    }

    export interface clientMonitor{
        innerWidth:number
        marginLeft:number
    }

}
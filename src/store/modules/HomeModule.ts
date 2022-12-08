/* eslint-disable */
import link from "@/api/Link";
import apiUrl from "@/api/url";


let HomeModule:Object= {
    state:{
        navBool: true,
        dialogFormVisible: false,
        uplistData:{},
        listdata:[]
    },
    mutations:{
        SET_NAV_BOOL(state:any){
            state.navBool = !state.navBool;
        },
        SET_DIALOG(state:any,paylog:any){
            state.dialogFormVisible = !state.dialogFormVisible;
            state.uplistData=paylog
        },
        DIALOG(state:any){
            state.dialogFormVisible = !state.dialogFormVisible;
            window.location.reload()
        },
        LISTDATA(state:any,paylog:any){
            state.listdata=paylog
        }
    },
    actions:{
        USERUPDATE_LIST(context:any){
            link(apiUrl.userList).then((ok:any) => {
                console.log(ok)
                context.commit("LISTDATA",ok.data)
            })
        },
        DEL_DATA(context:any,payload:any){
            link(apiUrl.userList+"/"+payload.id,"delete").then((ok:any) => {
                console.log(ok)
                window.location.reload()
            })
        }
    },
    getters:{

    }
}
export default HomeModule

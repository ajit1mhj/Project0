import{ toast} from 'react-toastify';
 export const handleSuccess = (msg)=>{
    toast.suscess(msg,{
        position: 'top-right'

    })
 }
 export const handleError = (msg)=>{
    toast.error(msg,{
        position:'top-right'
    })
 }
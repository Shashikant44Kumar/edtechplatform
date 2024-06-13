// import {server} from "../store";
// import axios from "axios";

// export const getClientId = () => async dispatch => {
//     try{
//         dispatch({type:'clientIdRequest'});

//         const {data} = await axios.get(`${server}/clientid`, {
//         });
//         dispatch({type:'clientIdSuccess',payload:data.message});

//     }catch(error){
//         dispatch({type:'clientIdFail',payload:error.response.data.message});
//     }
// }
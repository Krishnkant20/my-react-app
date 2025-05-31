import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
name:"mycart",
initialState:{
    cart:[]
},
reducers:{
    addtoCart:(state, actions)=>{
      const mydata= state.cart.filter(key=>key.id==actions.payload.id);
      
      if(mydata.length>=1){
        alert("Product Already Added")
      }
      else{
        state.cart.push(actions.payload);
      }

    },

    qntyincrease:(state,actions)=>{
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].id==actions.payload.id){
          state.cart[i].qnty++;
        }
      }
    },

    qntyDecrease:(state,actions)=>{
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].id==actions.payload.id){
          if(state.cart[i].qnty<=1){
            alert("Quantity not less than one")
          }
          else{
            state.cart[i].qnty--;

          }
        }
      }
    },


    dataRemove:(state,actions)=>{
      state.cart=state.cart.filter(key=>key.id!=actions.payload.id)
}



}
})


export const { addtoCart,qntyincrease,qntyDecrease,dataRemove }=cartSlice.actions;
export default cartSlice.reducer;
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state:()=>({
    count: 0,
    more: "viele Weitere Optionen"
  }),
  actions:{
    increaseCount(){
      this.count++
    },
    decreaseCount(){
      if(this.count>0){
        this.count--
      }
    },
    getters:{
      oddOrEven(){
        this.count % 2 === 0 ? "even" : "odd"
      },
      oddOrEvenArrow: (state) => {
        if(state.count % 2 === 0){
          return "even"
        }else{
          return "odd"
        }
      }
    }
  }
})

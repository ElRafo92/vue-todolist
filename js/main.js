
/*=====================================
=======================================
            MAIN VUE JS
=======================================
=====================================*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        i: 0,
        newTask: 
            {
            text:'',
            done: false,
            },
        
        tasks: [
        ],
      }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask)
           
        }
    }
  }).mount('#app')

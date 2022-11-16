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
          {
            text: 'fare la spesa',
            done: false
          },
          {
            text: 'fare la cena',
            done: true
          },
          {
            text: 'fare esercizio',
            done: false
          },

        ],
      }
    },
    methods: {
        addTask() {
            this.tasks.push(this.newTask)
        },
        removeTask(index) {
          this.tasks.splice(index, 1);
        },
    }
  }).mount('#app')

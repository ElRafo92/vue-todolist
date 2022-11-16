/*=====================================
=======================================
            MAIN VUE JS
=======================================
=====================================*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        newTaskTest: '',
        
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
            //console.log('submit')
            const objNewTask = {
              text: this.newTaskTest,
              done: false,
            };
            this.tasks.push(objNewTask);
            this.newTaskTest = '';
        },
        removeTask(index) {
          this.tasks.splice(index, 1);
        },
    }
  }).mount('#app')

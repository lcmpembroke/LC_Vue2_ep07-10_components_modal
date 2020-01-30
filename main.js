Vue.component('my-modal', {
    template: `
    
    <div class="modal is-active">
    <div class="modal-background"></div> 
    <div class="modal-content">
        <div class="box">
            <slot></slot>
        </div>
    </div>
    <button class="modal-close" aria-label="close" @click="$emit('my-modal-close')"></button>
</div>

    `,
});

Vue.component('my-message', {
    props: ['title','body'],
    data() {
        return {
            isVisible: true
        };
    },
    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
        {{ title }}
        <button type="button" @click="isVisible = false">x</button>
        </div>
        <div class="message-body">
        {{ body }}
        </div>
    </article>
    `,
    methods: {

    }
});

Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
        `,
    data() {
        return {
            tasks: [
                {task: 'Go to store', complete: true },
                {task: 'Go to farm', complete: true },
                {task: 'Go to school', complete: false },                                
                {task: 'Go to holiday', complete: true },      
                {task: 'Go to business', complete: false },                                
            ]
        }
    }
});


Vue.component('task', {
    template: '<li><slot></slot></li>'
});


new Vue({
    el: '#root',
    data: {
        showMyModal: false
    },
    computed: {

    },
    methods: {
  

    }
});
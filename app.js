const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        }
    },
    methods: {
        add() {
            this.counter++;
        },
        reduce() {
            this.counter--;
        },
        submitForm() {
            alert('Form submitted');
        }
    }
});

app.mount('#events');
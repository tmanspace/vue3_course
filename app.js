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
        zeroing() {
            this.counter = 0;
            alert('U was zeroed');
        },
        submitForm() {
            alert('Form submitted');
        }
    }
});

app.mount('#events');
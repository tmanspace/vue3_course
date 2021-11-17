const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            surname: 'Serazutdinov'
        }
    },
    methods: {
        outputFullname() {
            if (!this.name) {}
            else return this.name + ' ' + this.surname;
        },
        add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        submitForm() {
            alert('Form submitted');
        },
        resetInput() {
            this.name = ''; 
        }
    }
});

app.mount('#events');
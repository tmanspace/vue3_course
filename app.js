const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            surname: 'Serazutdinov'
        }
    },
    computed: {
        fullname() {
            console.log('Running...') // Bad solution
             if (!this.name) {}
             else return this.name + ' ' + this.surname;
        }
    },
    methods: {
        // outputFullname() {
        //     console.log('Running...') // Bad solution
        //     if (!this.name) {}
        //     else return this.name + ' ' + this.surname;
        // },
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
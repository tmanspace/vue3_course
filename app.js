const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            // fullname: ''
        }
    },
    watch: {
        counter(val) {
            if (val > 5) {
                this.counter = 0;
            }
        }
        // method(newValue, oldValue) uneffective if 2 much deps
        // name(val) {
        //     if (val == '') this.fullname = '';
        //     this.fullname = val + ' Serazutdinov';
        // }
    },
    computed: {
        fullname() {
            console.log('Running...') // Bad solution
             if (!this.name) {}
             else return this.name + ' ' + this.lastName;
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
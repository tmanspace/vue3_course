const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            text: '',
            textTwo: ''
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
        },
        showAlert() {
            alert('Heeeey');
        },
        writeText(e) {
            this.text = e.target.value;
        },
        writeTwo(e) {
            this.textTwo = e.target.value;
        }
    }
});

app.mount('#events');
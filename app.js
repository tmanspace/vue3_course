const app = Vue.createApp({
    data() {
        return {
            color: '',
            visible: true,
            classWritten: ''
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        toggleVis() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#events');
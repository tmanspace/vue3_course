const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and master Vue!',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) return 'Learn Vue!';
            else return 'Master Vue!'
        }
    }
});

app.mount('#user-goal');
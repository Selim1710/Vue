
////////////////////// problem-1: printing hello world  ////////////////
// var app = Vue.createApp({
//     template: '<h1>Hello World</h1>'
// })

// app.mount('#app')

////////////////////// problem-2: sending an object  ////////////////
// var app = Vue.createApp({
//     template: '<h1 class="text-center">Hello {{ first_name }}</h1>',
//     data(){
//         return {
//             first_name: 'john',
//         }
//     }
// });

// app.mount('#app');

////////////////////// problem-3: adding title - here data is a function thats return an object  ////////////////
// var myTitle = Vue.createApp({
//     data() {
//         return {
//             title: 'first vue app',
//         }
//     }
// });

// myTitle.mount('#myTitle')

////////////////////// problem-4: adding image  ////////////////
// var myTitle = Vue.createApp({
//     data() {
//         return {
//             gender: 'male',
//             picture:'/images/p1.jpg',
//         }
//     }
// });

// myTitle.mount('#image')

////////////////////// problem-5: adding event  ////////////////
// var app = Vue.createApp({
//     data() {
//         return {
//             name: 'friends',
//             gender:'male',
//             picture:'/images/p1.jpg',
//         }
//     },
//     methods:{
//         getUser(){
//             this.name =  'cow'
//             this.gender = 'female'
//             this.picture = '/images/p2.jpg'
//         }
//     }
// });

// app.mount('#image')

////////////////////// problem-6: working with api( https://randomuser.me/api )  ////////////////
var app = Vue.createApp({
    data() {
        return {
            name: 'friends',
            gender: 'male',
            picture: '/images/p1.jpg',
        }
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api');
            const { results } = await response.json(); 
            // console.log(results);   

            this.name = results[0].name.first;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    }
});

app.mount('#image')
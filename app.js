
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
// var app = Vue.createApp({
//     data() {
//         return {
//             name: 'friends',
//             gender: 'male',
//             picture: '/images/p1.jpg',
//         }
//     },
//     methods: {
//         async getUser() {
//             const response = await fetch('https://randomuser.me/api');
//             const { results } = await response.json(); 

//             this.name = results[0].name.first;
//             this.gender = results[0].gender;
//             this.picture = results[0].picture.large;
//         }
//     }
// });

// app.mount('#image')


////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////  vue bangla video  /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


////////////////////// bangla-1:  v-text and v-html  ////////////////////
// var app = Vue.createApp({
//     data() {
//         return {
//             name: '<p class="text-center">md selim hossain suhag</p> ',
//         }
//     },

// });
// app.mount('#app')


//////////////////// bangla-2:  using condition  ////////////////////
// var title = Vue.createApp({
//     data(){
//         return {
//             title:'Vue app title',
//         }
//     }
// });
// var app = Vue.createApp({
//     data() {
//         return {
//             name: 'seim ',
//             age: 18,
//             maxAge: 16,

//         }
//     },
//     methods:{
//         user(){
//             return this.name == 'selim' ? true : false;
//         }
//     }

// });
// app.mount('#app')
// title.mount('#myTitle');

////////////////////// bangla-3: array  ////////////////////
// var app = Vue.createApp({
//     data() {
//         return {
//             cars: ['BMW', 'TOYOTA', 'FORD']
//         }
//     },
//     methods: {
//         user() {
//             return this.name == 'selim' ? true : false;
//         }
//     }

// });
// app.mount('#app')

////////////////////// bangla-4: v once  ////////////////////
// var app = Vue.createApp({
//     data() {
//         return {
//             name: 'selim',
//         }
//     },
//     methods: {
//         update() {
//             setInterval(()=>{
//                 this.name = 'suhag'
//             },2000);
//         }
//     }

// });
// app.mount('#app');

////////////////////// bangla-5: adding event in button   ////////////////////
// var app = Vue.createApp({
//     data() {
//         return {
//             name: 'selim',
//         }
//     },
//     methods:{
//         changeName(newName, $event){
//             this.name = newName;
//             console.log($event);
//         }
//     }
// });

// app.mount('#app');

////////////////////// bangla-6: prevent page reload    ////////////////////
// var app = Vue.createApp({
//     methods:{
//         submitForm(){
//             alert('Form submited');
//         }
//     }

// });

// app.mount('#app');

////////////////////// bangla-7: form submit -> v-model   ////////////////////
var app = Vue.createApp({
    el:'#app',
    data: {
        formData: {
            firstName: '',
            lastName: '',
        }
    },
    methods: {
        submitForm() {
            console.log(this.formData);
        }
    }
});

Vue.component('github-profile', {
    template: '#profile-template',
    props:{
        username:{
            type: String,
            required: true
        }
    },
    data: function () {
        return { 
            user: {}
         }
    },
    created(){
        axios.get(`https://api.github.com/users/${this.username}`)
        .then(response=>{
            this.user = response.data
        })
    }
});

var app = new Vue({
    el: '#app',
    data:{
        usernames:["chucklu","kerryjiang","joperezr","nkolev92"]
    }
});

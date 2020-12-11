Vue.component('github-profile', {
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
    data: function () {
        return { count: 0 }
    }
});

var app = new Vue({
    el: '#app'
});
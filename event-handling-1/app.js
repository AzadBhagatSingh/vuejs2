var myView = new Vue({
	el:"#myapp",
	data:{
		counter:0
	},
	methods:{
		incrementByOne: function(){
			this.counter++;
		},
		decrementByOne: function () {
			this.counter--;
		},
		increment: function(value){
			this.counter += value;
		},
		decrement: function(value){
			this.counter -= value;
		}
	}
});
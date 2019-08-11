var myView = new Vue({
	el:"#myapp",
	data:{
		counter:0
	},
	methods:{
		incrementBYOne:function (){
			this.counter += 1;
		},
		submitClick: function(){
			console.log("running...");
		},
		parentDiv: function(){
			console.log("Parent div...");
		},
		buttonClick: function(){
			console.log("Child button...");
		}
	}
});
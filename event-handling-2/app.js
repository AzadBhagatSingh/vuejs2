var myView = new Vue({
	el:"#myapp",
	data:{
		x:0,
		y:0,
		btnText:"Please take mouse over to me."
	},
	methods:{
		mouseMove: function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		mouseOver:function(){
			this.btnText = "Mouse over event called.";
		},
		moouseOut:function(){
			this.btnText = "Mouse out event called.";
		}
	}
});
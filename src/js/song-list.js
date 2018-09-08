{
	let view = {
		el: '#songList-container',
		template:`
			<ul class="songList">
          		<li>歌曲1</li>
          		<li>歌曲2</li>
        	</ul>
		`,
		render(data){
			$(this.el).html(this.template)
		}

	}
	let model = {}
	let controller = {
		init(view,model){
			this.view = view
			this.model = model
			this.view.render(this.model.data)
		}
	}
	controller.init(view,model)
}
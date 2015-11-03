/*
var Router = window.ReactRouter;
*/
var BookViewerApp = React.createClass({
	updState: function(a){
		this.setState({ id: 0 });
	},
	render: function(){
		return (
			<div className="js-book-viewer">
				<p>
					<button onClick={this.showBookshelf} type="button" className="btn btn-primary btn-lg btn-bookshelf">Books</button>
					<button onClick={this.showAuthorsList} type="button" className="btn btn-primary btn-lg">Authors</button>
				</p>
				<p onClick={this.updState}>
				</p>
				<BookShelf />
				<AuthorsList />
			
			</div>
		);
	},
		
	showBookshelf: function(){
		if( $('.bookshelf').css('display') == 'none' ){
				$('.authorsList').css('display', 'none');
				$('.bookshelf').css('display', 'block');
		} else {
			$('.bookshelf').css('display', 'none');
		}
	},
		
	showAuthorsList: function(){
		if( $('.authorsList').css('display') == 'none' ){
				$('.bookshelf').css('display', 'none');
				$('.authorsList').css('display', 'block');
		} else {
			$('.authorsList').css('display', 'none');
		}
	}
});
	 
var BookShelf = React.createClass({
	getInitialState: function() {
		return {'display': 'none'};
	},
	
	handleClick: function(event) {
			this.setState({display: 'block'});
	},
	
	render: function(){
		return (
			<div style={this.getInitialState()} className="bookshelf">
				{booksArray.map(function( name, idx ){
					return (
						<p key={idx}>
							<a href='#'>
								{name}
							</a>
							<br/>Authors: 
							<a href='#'>
								{' ' + booksAuthorsArray[idx] }
							</a>
						</p>
					);
				})}
			</div>
		);
	}
});

var AuthorsList = React.createClass({
	
	getInitialState: function() {
		return {'display': 'none'};
	},
	
	handleClick: function(event) {
			this.setState({display: 'block'});
	},
	
	showDropDown: function(event){
	var elm = $( event.target ).parent().find( 'ol' );
	if( elm.css('display') != 'block' ){
		elm.css( 'display', 'block' );
	} else {
		elm.css( 'display', 'none' );
	}
	/*
	//for author page
	tempState = $( event.target ).attr('data-id');
	console.log($( event.target ).attr('data-id'));	
	*/
	},
	/*
	renderAuthorPage: function(){
		console.log('You are on the right way');
		var sos;
		$.ajax({
			type: 'GET',
			url: 'authorPage.jsx',
			dataType: 'html'
			}).done(function(data){
				sos = $.parseHTML( data );
				console.log( $(sos).hasOwnProperty('figcaption') );
				$( '.js-book-viewer' ).append(sos);
			});
			
	},
	
	makeAuthorPage: function(){
		return (
			<div style={{'width' : '50%', 'float' : 'left'}}>
				<figure>
					<img src="../img/author_0.jpg" className="img-responsive" alt="Auhtor" width="154" heigth="200"/>
					<figcaption>
						<a href="">
							<h3>{authorsList[0]}</h3>
						</a>
					</figcaption>
				</figure>
				<p className="lead">{authorsBio[0]}</p>
			</div>
		);
	},
	renderAuthorPage: function(){
		
		$( '.js-book-viewer' ).append( this.makeAuthorPage() );
	},
	*/
	render: function(){
		var that = this;
		return (
			<div style={this.getInitialState()} className="authorsList">
				<ol>
					{authorsList.map(function( name, idx){
						return (
							<li  key={idx}>
								<a onClick={that.showDropDown} href="#" data-id={idx}>
									{ name }
								</a>
								<ol style={{display: 'none'}}>
									<li>
										<a onClick={BookViewerApp.updState} href="#">
											{'Show author page'}
										</a>
									</li>
									{(() => {
										switch (typeof authorsBooks[idx]) {
											case "string":   return (
																		<li>
																			<a>
																				{authorsBooks[idx]}
																			</a>
																		</li>
											);
											default: return (
												authorsBooks[idx].map(function( name, idx){
													return (
														<li key={idx}>
															<a>
																{ name }
															</a>
														</li>
													);
												})
											);
										}
									})()}
								</ol>
							</li>
						);
					})}
				</ol>
			</div>
		);
	}
});

var AuthorPage = React.createClass({
	handleClick: function(event) {
			this.setState({id: 0});
	},
	
	render: function(){
		return (
			<div style={{'width' : '50%', 'float' : 'left'}}>
				<figure>
					<img src="../img/author_0.jpg" className="img-responsive" alt="Auhtor" width="154" heigth="200"/>
					<figcaption>
						<a href="">
							<h3>{authorsList[0]}</h3>
						</a>
					</figcaption>
				</figure>
				<p className="lead">{authorsBio[0]}</p>
			</div>
		);
	}
});
/*
var renderAuthor = function( idx ){
	tempState = idx;
	ReactDOM.render(
		React.createElement(AuthorPage),
		document.getElementById("react-app")
);
};
*/
ReactDOM.render(
		React.createElement(BookViewerApp),
		document.getElementById("react-app")
);
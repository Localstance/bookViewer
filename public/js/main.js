var lib = null,
	booksArray = [],
	booksAuthorsArray = [],
	booksGenre = [],
	booksAbout = [],
	authorsList = [],
	authorsBooks = [],
	authorsBio = [],
	tempState = 0;
	
var getLib = function(){
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "books.json"
	}).done(function(data){
		console.log('Ajax: import successful');
        lib = data;
		updateBooks();
		updateAuthors();
	}).fail(function(){
        console.log("Ajax: something wrong");
    });
};
/*
var showDropDown = function(event){
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
//};

var updateBooks = function(){
	for( var i = 0; i < lib.books.length; i++ ){
			booksArray.push( lib.books[ i ].name );
			booksGenre.push( lib.books[ i ].genre );
			booksAbout.push( lib.books[ i ].about );
			for(var k = 0; k < lib.books[ i ].authors.length; k++){
				booksAuthorsArray.push( lib.books[ i ].authors[ k ].name );
			}
		}
};

var updateAuthors = function(){
	for( var j = 0; j < lib.authors.length; j++ ){
			authorsList.push( lib.authors[ j ].name );
			authorsBio.push( lib.authors[ j ].bio );
			if( lib.authors[ j ].books.length > 1 ){
				authorsBooks.push( [ ] );
				for( var l = 0; l < lib.authors[ j ].books.length; l++){
					authorsBooks[ j ].push( lib.authors[ j ].books[ l ].name );
				}
			} else {
				authorsBooks.push( lib.authors[ j ].books[0].name );
			}
		}
};

getLib();







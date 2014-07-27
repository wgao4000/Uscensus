$(document).ready(function(){
      $(".diB").submit(function(event){
         alert("good");
         var tags=$(".thecityzip").find("input[name=city]").val();
         findinfo(tags);
      });
      $(".fiT").submit(function(event){
      	  alert("good1");
      	  var tags=$(".thecityzip").find("input[name=city]").val();
      	  showsimilarcities(tags);
      });

});
function showError(error){
	 alert(error);
}

function findinfo(city){
	  var request = {get:'P0010001,NAME',
	                 for:'state:01',
	  	             
	                
					// site: 'census',
					 };
	  var result = $.ajax({
		url: "http://api.census.gov/data/2010/sf1?key=dc8d60364b1bbf0b5d0c2a44af3ee8031c206e35",
		data: request,
		dataType: "jsonp",
		type: "GET",
	//	jsonp:false,
		cache : true,
       // crossDomain : true,
	  })			
	  .done(function(result){
  	    alert('this is a test.');
  	   $.each(result, function(i, item) {
			alert(JSON.stringify(item, null, 4));
		//	var question = showQuestion(item,1);
		//	$('.results').append(question);
		});
	/*	var searchResults = showSearchResults(request.tagged, result.items.length);

		$('.search-results').html(searchResults);

		$.each(result.items, function(i, item) {
		 //	alert(JSON.stringify(item, null, 4));
			var question = showQuestion(item,1);
		//	$('.results').append(question);
		});*/
	})
	.fail(function(jqXHR, error, errorThrown){
		alert(error);
		alert(errorThrown);
		var errorElem = showError("this is cool!");
		//$('.search-results').append(errorElem);
	});
};
function showsimilarcities(city){
	 alert("this is a good test!");
}
var queue = new Queue() ;

$(document).ready(function(){
	
	    $('#sideList-deque').draggable(); // make the list movable 
		
		$('#sideList-deque').accordion({collapsible: true , heightStyle: "content"});
		
		$('#infoBar').dialog({
			width:'15%',
			maxHeight: 170,
			position: {my: 'right top', at: 'right top', of: window}
		}) ; 
		$(function(){
			$('#pushFront').submit(function(event) {
				// @@@
				var inputNumber = $("#pushFront").find('input[name="value"]').val() ; 
				if ( inputNumber != '' )
				{
					if ( running == false ) 
					{
						inputNumber = parseInt(inputNumber,10) ; 
						process = 'Push front : ' ; 
						running = true ; 
						var result = queue.push_front(inputNumber);
						if ( result == true ) 
						{
							undoList.push(['Push Front',inputNumber]) ; 
							redoList.clear() ; 
						}
					}
					else 
					{
						alert('Visualization is running') ; 
					}
				}
				$('#pushFrontTextBox1').val('') ; 
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#pushBack').submit(function(event) {
				// @@@
				var inputNumber = $("#pushBack").find('input[name="value"]').val() ; 
				if ( inputNumber != '' )
				{
					if ( running == false ) 
					{
						inputNumber = parseInt(inputNumber,10) ; 
						process = 'Push back : '; 
						running = true ; 
						var result = queue.push_back(inputNumber);
						if ( result == true ) 
						{
							undoList.push(['Push Back',inputNumber]) ; 
							redoList.clear() ; 
						}
					}
					else 
					{
						alert('Visualization is running') ; 
					}
				}
				$('#pushBackTextBox1').val('') ; 
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#front').click(function(event) {
				// @@
				if ( queue.getSize() > 0 ) 
				{
					if ( running == false ) 
					{
						process = 'Front : ' ; 
						running = true ; 
						queue.front() ; 
						undoList.push(['front']) ; 
						redoList.clear() ; 
					}
					else 
					{
						alert('Visualization is running') ; 
					}
				}
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#back').click(function(event) {
				// @@
				if ( queue.getSize() > 0 ) 
				{
					if ( running == false ) 
					{
						process = 'Back : ' ; 
						running = true ; 
						queue.back() ; 
						undoList.push(['back']) ; 
						redoList.clear() ; 
					}
					else 
					{
						alert('Visualization is running') ; 
					}
				}
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#popFront').click(function(event) {
				// @@
				if ( queue.getSize() > 0 ) 
				{
					if ( running == false ) 
					{
						process = 'Pop front : ' ;
						running = true ; 
						var number = queue.getHead() ; 
						queue.pop_front() ; 
						undoList.push(['Pop Front',number]) ; 
						redoList.clear() ;
					}
					else 
					{
						alert('Visualization is running') ; 
					}					
				}
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#popBack').click(function(event) {
				// @@
				if ( queue.getSize() > 0 ) 
				{
					if ( running == false ) 
					{
						process = 'Pop back : ' ; 
						running = true ; 
						var number = queue.getHead() ; 
						queue.pop_back() ; 
						undoList.push(['Pop Back',number]) ; 
						redoList.clear() ;
					}
					else 
					{
						alert('Visualization is running') ; 
					}
				}
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#undo').click(function(event) {
				if ( running == false ) 
				{
					running = true ; 
					undo() ; 
				}			
				else 
				{
					alert('Visualization is running') ; 
				}
				event.preventDefault() ; 
			});
		});
		$(function(){
			$('#redo').click(function(event) {
				if ( running == false ) 
				{
					running = true ; 
					redo() ; 
				}
				else 
				{
					alert('Visualization is running') ; 
				}
				event.preventDefault() ; 
			});
		});
		
		$(function(){
			$('#showInfoBarButton').click(function(event){
				$('#infoBar').dialog({
					width:'15%',
					maxHeight: 170,
				}) ; 
			});
		});
});
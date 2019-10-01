var taskDetails = [];

$(document).ready(function() {
	
	
	if(localStorage.getItem('taskDetails') != null && localStorage.getItem('taskDetails') != ""){
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('taskDetails');

	//console.log('retrievedObject: ', retrievedObject.split(","));
	showDetails(retrievedObject.split(","));
}
	
	
					$('button').click(
									function() {
										if($("#todoTaskDetail").val() != ""){
											var div = document.createElement("div");
											div.setAttribute('class', 'container shadow border card col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2');

											var div1 = document.createElement("div");											
											div1.setAttribute('class', 'card-body row');

											var div2 = document.createElement("div");
											div2.setAttribute('class', 'col-10');
											
											var anchor1 = document.createElement("a");
											anchor1.setAttribute('style', 'font-size: 1.5rem; font-weight: 600; line-height: 1.2;');
											anchor1.append($("input[name=task]").val());
											div2.append(anchor1);
											
											var div3 = document.createElement("div");
											div3.setAttribute('class', 'col-2');
											
											var ulist = document.createElement("ul");
											
											var anchor2 = document.createElement("a");
											anchor2.setAttribute('class', 'close text-danger');
											anchor2.setAttribute('aria-hidden', 'true');
											anchor2.setAttribute('onclick', 'clearThis(this);');
											anchor2.append("X");
											
											ulist.append(anchor2);
											
											div3.append(ulist);
											

											div1.append(div2);
											div1.append(div3);
											
											div.append(div1);
											$('#todo').append(div);
											
											taskDetails.push($("input[name=task]").val());
											
											localStorage.setItem('taskDetails', taskDetails.toString());
											
											$("#todoTaskDetail").val('');
										}else{
											//alert("Please enter task details");
											$('#errorModal').modal('show');
											$('#errorModalBody').html('');
											$('#errorModalBody').append(
													'Forgot to add task?' + '<br>' + "No probs.. Try again");
										}
										
									});
					/*$("body").on('click', '#todo a', function() {
						$(this).offsetParent("div").remove();
					});*/
				});

function showDetails(value){
	var valueSaved = value;
	for(var i=0; i<valueSaved.length; i++){
		var div = document.createElement("div");
		div.setAttribute('class', 'container shadow border card col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 mb-2');

		var div1 = document.createElement("div");											
		div1.setAttribute('class', 'card-body row');

		var div2 = document.createElement("div");
		div2.setAttribute('class', 'col-10');
		
		var anchor1 = document.createElement("a");
		anchor1.setAttribute('style', 'font-size: 1.5rem; font-weight: 600; line-height: 1.2;');
		anchor1.append(valueSaved[i]);
		div2.append(anchor1);
		
		var div3 = document.createElement("div");
		div3.setAttribute('class', 'col-2');
		
		var ulist = document.createElement("ul");
		
		var anchor2 = document.createElement("a");
		anchor2.setAttribute('class', 'close text-danger');
		anchor2.setAttribute('aria-hidden', 'true');
		anchor2.setAttribute('onclick', 'clearThis(this);');
		anchor2.append("X");
		
		ulist.append(anchor2);
		
		div3.append(ulist);
		

		div1.append(div2);
		div1.append(div3);
		
		div.append(div1);
		$('#todo').append(div);
	}
}

function clearThis(ev){
	var retrievedObject = localStorage.getItem('taskDetails');
	//console.log('retrievedObject: ', retrievedObject.split(","));
	var array = retrievedObject.split(",");
	
	var i = array.indexOf(ev.offsetParent.offsetParent.children[0].children[0].textContent);
	if(i != -1) {
		array.splice(i, 1);
	}
	
	//var index = remove(ev.offsetParent.offsetParent.children[0].textContent);
	localStorage.setItem('taskDetails', array.toString());
	ev.offsetParent.offsetParent.remove();
}

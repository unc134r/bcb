Array.from(document.getElementsByClassName("r")).forEach(
    function(element, index, array) {
	    var who = document.getElementsByClassName("r")[index];
	    console.log(who.firstElementChild.childElementCount );
	    if (who.firstElementChild.childElementCount == 3){
	        var parent_r = who.firstElementChild; //the A tag
			var f_child = parent_r.children[0];
			var s_child = parent_r.children[1];
			var to_save_1 = f_child.cloneNode(true); 
			var to_save_2 = s_child.cloneNode(true); 
			parent_r.appendChild(to_save_2);
			parent_r.appendChild(to_save_1);
			
			parent_r.removeChild(parent_r.firstElementChild);	
			parent_r.removeChild(parent_r.firstElementChild);	
			}
	
	    }
);
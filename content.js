document.querySelectorAll(".r").forEach(
    index=>{
	    	if (index.firstElementChild.childElementCount == 3){
		        const parent_r = index.firstElementChild; //the A tag
				const f_child = parent_r.children[0];
				const s_child = parent_r.children[1];
				const to_save_1 = f_child.cloneNode(true); 
				const to_save_2 = s_child.cloneNode(true); 
				parent_r.appendChild(to_save_2);
				parent_r.appendChild(to_save_1);
				parent_r.removeChild(parent_r.firstElementChild);	
				parent_r.removeChild(parent_r.firstElementChild);	
			}
});
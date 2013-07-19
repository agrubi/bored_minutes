Add this to the applications you intend to use this on: 
	requires:['whiteboard.ux.ColorPicker'],

Add this to your includes:
	<link rel="stylesheet" href="css/colorjoe.css">

	<script src='js/onecolor.js'></script>
   
	<script src='js/colorjoe.min.js'></script>



You can add a listener as follows:

	listeners:{
		'select':function(color){
			alert(color.css());
		}
	}	
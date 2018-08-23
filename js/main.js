function Calcular(p1, p2, p3, p4, p5) {
			var p1 =parseFloat(document.getElementById("v1").value)
			var p2 =parseFloat(document.getElementById("v2").value)
			var p3 =parseFloat(document.getElementById("v3").value)
			var p4 =parseFloat(document.getElementById("v4").value)
			var p5 =parseFloat(document.getElementById("v5").value)
		

			if (document.getElementById("v5").value.length == "") {
				var deltaf = p3 - p4;
				var formula = p1 + (p2 * deltaf);
				console.log(formula)
				
				document.getElementById("v5").value = formula

			} else {
				alert("o valor é: " + document.getElementById('v5').value)
			}










}



	function again(p1,p2,p3,p4,p5){
	document.getElementById("v1").value = "";
	document.getElementById("v2").value = "";
	document.getElementById("v3").value = "";
	document.getElementById("v4").value = "";
	document.getElementById("v5").value = "" ;
	
			
}

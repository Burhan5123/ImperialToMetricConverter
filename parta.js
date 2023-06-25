	function convertImperialValue(val,id) {
		val=parseFloat(val);
		if(id=="feet1"){
			var meter=parseFloat(0);
			meter = val * 0.3048;
			meter1.value=meter.toFixed(2);
		}
		else if(id=="gallon1"){
			var litre = parseFloat(0);
			litre =  val * 3.78541;
			litre1.value = litre.toFixed(2);
		}
		else if(id=="pounds1"){
			var kilogram = parseFloat(0);
			kilogram =  val * 0.453592;
			kilogram1.value = kilogram.toFixed(2);
		}
		else if(id=="miles1"){
			var kilometer = parseFloat(0);
			kilometer =  val * 1.60934;
			kilometer1.value = kilometer.toFixed(2);
		}
	}

	function convertMetricValue(val,id) {
		val= parseFloat(val);
		if(id=="meter1"){
			var feet=parseFloat(0);
			feet = val * 3.281;
			//document.getElementById("imperial").value=feet.toFixed(2);
			feet1.value = feet.toFixed(2);
		}
		else if(id=="litre1"){
			var gallon = parseFloat(0);
			gallon =  val * 0.264172;
			gallon1.value = gallon.toFixed(2);
		}
		else if(id=="kilogram1"){
			var pounds = parseFloat(0);
			pounds =  val * 2.20462;
			pounds1.value = pounds.toFixed(2);
		}
		else if(id=="kilometer1"){
			var miles = parseFloat(0);
			miles =  val * 0.621371;
			miles1.value = miles.toFixed(2);
		}


	}

jQuery('document').ready(function() {
    var t1;
	t1 = prompt('Name?');
	var weather = 'cool';
	var time = 'day';
	if (weather == 'sunny' || weather=='cool' && time=='day') {
		alert('Picnic.Horray');
	} else if (weather=='rain' && time=='day'){
		alert('Take umbrellas.It is rain.')
	}else if (time=='day') {
		alert('Oh,bad weather for picnic.It is ' + weather + '.');
	}else{
		var msg ='it is not day.';
		if (weather == 'rain'){
			msg=msg+'\n It is rain.'
		}
		alert(msg)
	}
});
/*
 * JavaScript implementation of PHP date formatting.
 * Author: JT <jt@gosquared.com>
 *
 * Usage: formatDate('Y M d H:i:s', dateObject)
 *     or formatDate('Y M d H:i:s') to use current time
 *
 * This function is free for you to use however you please. Use it or
 * modify it however you like. All I ask is that you don't just pass
 * it off as your own. I hope it's useful!
 *
 * Credit to Dave Furfero (furf) for the ordinal suffix function (https://gist.github.com/986113)
 */
formatDate = function(){
	var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	
	function zp(a,b){return(1e9+a+'').slice(-b)} // pads the number a until it is b digits long
	function or(a){return["th","st","nd","rd"][(a=~~(a<0?-a:a)%100)>10&&a<14||(a%=10)>3?0:a]} // returns ordinal suffix for number a
	function fm(y){var d=new Date(y,0,1);while(d.getDay()-1)d.setDate(d.getDate()+1);return+d} // returns timestamp of first monday in year y
	function mn(d){return 864e5*~~(d/864e5)} // Timestamp of midnight
	
	return function(format, dt){
		format = format.replace(/r/g,'D, d M Y H:i:s O')
					.replace(/c/g,'Y-m-d\\TH:i:sP');
		dt = dt || new Date;
		var year = dt.getFullYear(),
			month = dt.getMonth(),
			date = dt.getDate(),
			day = dt.getDay(),
			hour = dt.getHours(),
			mins = dt.getMinutes(),
			secs = dt.getSeconds(),
			ms = dt.getMilliseconds(),
			tz = dt.getTimezoneOffset();
		var bits = { // in the order they appear on http://php.net/manual/en/function.date.php
			d: zp(date, 2),
			D: dayNames[day].substr(0,3),
			j: date,
			l: dayNames[day],
			N: day || 7,
			S: or(date),
			w: day,
			z: 0|(dt-new Date(year,0,1))/864e5,
			W: Math.ceil(~~((mn(dt)-fm(year))/864e5+0.5)/7),
			F: monthNames[month],
			m: zp(month+1,2),
			M: monthNames[month].substr(0,3),
			n: month+1,
			t: (new Date(year,month+1,0)).getDate(),
			L: +((new Date(year,2,0)).getDate()==29),
			o: year-+(new Date(fm(year))>dt),
			Y: year,
			y: (year+'').slice(-2),
			a: hour>11?'pm':'am',
			A: hour>11?'PM':'AM',
			B: 0|(ms+1e3*(secs+60*(mins+60*hour)))/86400,
			g: (hour%12)||12,
			G: hour,
			h: zp((hour%12)||12,2),
			H: zp(hour,2),
			i: zp(mins,2),
			s: zp(secs,2),
			u: ms*1000,
			e: undefined, // Can this be done in js?
			I: +!!((dt-new Date(year,0,1))%864e5),
			O: /(\S*\s){5}\S+([\+\-]\d{4})/.exec(dt.toString())[2],
			P: /(\S*\s){5}\S+([\+\-]\d{2})(\d{2})/.exec(dt.toString()).slice(2).join(':'),
			T: undefined, // Can this be done in js?
			Z: -tz*60,
			U: 0|dt/1000
		}

		var out = '';

		while(format){
			var c = format.charAt(0);
			if(c=='\\'){
				out += format.charAt(1);
				format = format.slice(2);
				continue;
			}
			var bit = bits[c];
			out += (bit!==undefined)?bit:c;
			format = format.slice(1);
		}
		return out;
	}
}();


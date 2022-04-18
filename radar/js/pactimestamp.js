
var date = new Date();	    		
var dataehora = moment.utc().format("YMMDDHH");
var minuto = Math.floor((moment.utc().subtract(20,'minutes').format("m"))/10);





        data0 = moment.utc().subtract(8,'hours').format("DD/MM/Y HH"); 
		data1 = moment.utc().subtract(7,'hours').format("DD/MM/Y HH");
		data2 = moment.utc().subtract(6,'hours').format("DD/MM/Y HH");
		data3 = moment.utc().subtract(5,'hours').format("DD/MM/Y HH");
		data4 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		data5 = moment.utc().subtract(3,'hours').format("DD/MM/Y HH");

      
	
var horalocal = [],x = 0;;
          horalocal[0] = data0+':'+minuto+'0';
          horalocal[1] = data1+':'+minuto+'0';
          horalocal[2] = data2+':'+minuto+'0';
		  horalocal[3] = data3+':'+minuto+'0';
		  horalocal[4] = data4+':'+minuto+'0';
		  horalocal[5] = data5+':'+minuto+'0';

console.log(horalocal); 
    		  
function data() {

    var arrURI = horalocal[x];    
    document.getElementById("timestamp").innerHTML = arrURI + ' Hora Local ';
}
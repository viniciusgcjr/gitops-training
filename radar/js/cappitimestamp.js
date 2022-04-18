
var date = new Date();	    		
var dataehora = moment.utc().subtract(3,'hours').format("DD/MM/Y HH");
var minuto = Math.floor(date.getUTCMinutes() / 10);



switch (minuto) {
    case 0:
        min0 = '5'; data0 = moment.utc().subtract(5,'hours').format("DD/MM/Y HH"); 
		min1 = '0'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '1'; data2 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min3 = '2'; data3 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min4 = '3'; data4 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min5 = '4'; data5 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
        break;
	case 1:
        min0 = '0'; data0 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min1 = '1'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '2'; data2 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min3 = '3'; data3 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min4 = '4'; data4 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min5 = '5'; data5 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
        break;
    case 2:
        min0 = '1'; data0 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH")
		min1 = '2'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '3'; data2 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min3 = '4'; data3 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min4 = '5'; data4 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min5 = '0'; data5 = dataehora;
        break;
    case 3:
        min0 = '2'; data0 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min1 = '3'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '4'; data2 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min3 = '5'; data3 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min4 = '0'; data4 = dataehora;
		min5 = '1'; data5 = dataehora;
        break;
    case 4:
        min0 = '3'; data0 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min1 = '4'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '5'; data2 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min3 = '0'; data3 = dataehora;
		min4 = '1'; data4 = dataehora;
		min5 = '2'; data5 = dataehora;
        break;
    case 5:
        min0 = '4'; data0 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min1 = '5'; data1 = moment.utc().subtract(4,'hours').format("DD/MM/Y HH");
		min2 = '0'; data2 = dataehora;
		min3 = '1'; data3 = dataehora;
		min4 = '2'; data4 = dataehora;
		min5 = '3'; data5 = dataehora;
        break;
}



var horalocal = [],x = 0;;
          horalocal[0] = data0+':'+min0+'0';
          horalocal[1] = data1+':'+min1+'0';
          horalocal[2] = data2+':'+min2+'0';
		  horalocal[3] = data3+':'+min3+'0';
		  horalocal[4] = data4+':'+min4+'0';
		  horalocal[5] = data5+':'+min5+'0';

console.log(horalocal);
		  
function data() {

    var arrURI = horalocal[x];    
    document.getElementById("timestamp").innerHTML = arrURI + ' Hora Local ';
}
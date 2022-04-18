
var date = new Date();	    		
var dataehora = moment.utc().format("YMMDDHH");
var minuto = Math.floor(date.getUTCMinutes() / 10);

console.log(dataehora);
console.log(minuto+'0');

switch (minuto) {
    case 0:
        min0 = '5'; data0 = moment.utc().subtract(2,'hours').format("YMMDDHH"); 
		min1 = '0'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '1'; data2 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min3 = '2'; data3 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min4 = '3'; data4 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min5 = '4'; data5 = moment.utc().subtract(1,'hours').format("YMMDDHH");
        break;
	case 1:
        min0 = '0'; data0 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min1 = '1'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '2'; data2 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min3 = '3'; data3 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min4 = '4'; data4 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min5 = '5'; data5 = moment.utc().subtract(1,'hours').format("YMMDDHH");
        break;
    case 2:
        min0 = '1'; data0 = moment.utc().subtract(1,'hours').format("YMMDDHH")
		min1 = '2'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '3'; data2 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min3 = '4'; data3 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min4 = '5'; data4 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min5 = '0'; data5 = dataehora;
        break;
    case 3:
        min0 = '2'; data0 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min1 = '3'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '4'; data2 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min3 = '5'; data3 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min4 = '0'; data4 = dataehora;
		min5 = '1'; data5 = dataehora;
        break;
    case 4:
        min0 = '3'; data0 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min1 = '4'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '5'; data2 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min3 = '0'; data3 = dataehora;
		min4 = '1'; data4 = dataehora;
		min5 = '2'; data5 = dataehora;
        break;
    case 5:
        min0 = '4'; data0 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min1 = '5'; data1 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		min2 = '0'; data2 = dataehora;
		min3 = '1'; data3 = dataehora;
		min4 = '2'; data4 = dataehora;
		min5 = '3'; data5 = dataehora;
        break;
}

console.log(data0+min0+'0');
console.log(data1+min1+'0');
console.log(data2+min2+'0');
console.log(data3+min3+'0');
console.log(data4+min4+'0');
console.log(data5+min5+'0');


var images = [], x = 0;
          images[0] = 'http://200.238.105.69/imagens_radar/'+data0+min0+'0.cappi1km_trans.png';
          images[1] = 'http://200.238.105.69/imagens_radar/'+data1+min1+'0.cappi1km_trans.png';
          images[2] = 'http://200.238.105.69/imagens_radar/'+data2+min2+'0.cappi1km_trans.png';
		  images[3] = 'http://200.238.105.69/imagens_radar/'+data3+min3+'0.cappi1km_trans.png';
		  images[4] = 'http://200.238.105.69/imagens_radar/'+data4+min4+'0.cappi1km_trans.png';
		  images[5] = 'http://200.238.105.69/imagens_radar/'+data5+min5+'0.cappi1km_trans.png';
		  		  
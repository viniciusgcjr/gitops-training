
var date = new Date();	    		
var dataehora = moment.utc().format("YMMDDHH");
var minuto = Math.floor((moment.utc().subtract(20,'minutes').format("m"))/10);

        data0 = moment.utc().subtract(5,'hours').format("YMMDDHH"); 
		data1 = moment.utc().subtract(4,'hours').format("YMMDDHH");
		data2 = moment.utc().subtract(3,'hours').format("YMMDDHH");
		data3 = moment.utc().subtract(2,'hours').format("YMMDDHH");
		data4 = moment.utc().subtract(1,'hours').format("YMMDDHH");
		data5 = moment.utc().subtract(0,'hours').format("YMMDDHH");   
	
var images = [], x = 0;
          images[0] = 'http://200.238.105.69/imagens_radar/'+data0+minuto+'0.Acum01h_trans.png';
          images[1] = 'http://200.238.105.69/imagens_radar/'+data1+minuto+'0.Acum01h_trans.png';
          images[2] = 'http://200.238.105.69/imagens_radar/'+data2+minuto+'0.Acum01h_trans.png';
		  images[3] = 'http://200.238.105.69/imagens_radar/'+data3+minuto+'0.Acum01h_trans.png';
		  images[4] = 'http://200.238.105.69/imagens_radar/'+data4+minuto+'0.Acum01h_trans.png';
		  images[5] = 'http://200.238.105.69/imagens_radar/'+data5+minuto+'0.Acum01h_trans.png';
		  
console.log(images);
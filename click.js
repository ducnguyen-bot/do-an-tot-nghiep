  const firebaseConfig = {
    apiKey: "AIzaSyAhFDAEpKyQ51M_no14mX9F29ERRqPuIJA",
    authDomain: "thu4-inv.firebaseapp.com",
    databaseURL: "https://thu4-inv-default-rtdb.firebaseio.com",
    projectId: "thu4-inv",
    storageBucket: "thu4-inv.appspot.com",
    messagingSenderId: "670823788526",
    appId: "1:670823788526:web:0a79749ddaa6de57b428ff"
    };

  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();
    // var btnOn = document.getElementById("btnON");
    // var btnOff = document.getElementById("btnOFF");

    database.ref("nhiet do").on("value",function(snapshot){
        var temp =snapshot.val();
        document.getElementById("nhiet do").innerHTML = temp;
        //value11 = String(temp);
        const down = (ctx,value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
        const up = (ctx,value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined
        const state  = (ctx,value) => ctx.p0.parsed.y == ctx.p1.parsed.y ? value : undefined

       
        const data = {
          labels: [0],
          datasets: [{
            label: 'Nhiệt độ tăng       ',
            backgroundColor: 'rgb(192,57,43)',
            //borderColor: 'rgb(255, 99, 132)',
            data: [0],
            segment:{
              borderColor: ctx => down(ctx,"rgb(22,160,133)") || up(ctx,"rgb(192,57,43)") || state(ctx,"rgb(149, 165, 166)")
            }
          },{
    
            label: 'Nhiệt độ giảm       ',
            backgroundColor: 'rgb(22,160,133)',
    
          },{
    
            label: 'Nhiệt độ ổn định',
            backgroundColor: 'rgb(149, 165, 166)',
              //borderColor: 'rgb(255, 99, 132)',
          }]
        };

        const config = {
            type : 'line',
            data : data,
        }

        const canvas = document.getElementById('canvas')
        const chart = new Chart(canvas, config)

        window.setInterval(mycallback,1000);

        function mycallback(){
          var now = new Date();
          now = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
          var newvalue = document.getElementById("nhiet do").innerHTML
          if(data.datasets[0].data.length >= 20){
            data.labels.shift();
            data.datasets[0].data.shift();
          }
          data.labels.push(now);
          data.datasets[0].data.push(newvalue);
          chart.update();
          $('#notice-temp').html("giá trị là " + now + " - " + newvalue)
        }
     
    });

  
    database.ref("do am").on("value",function(snapshot){
        var humid =snapshot.val();
        document.getElementById("do am").innerHTML = humid;
        //value2 = String(humid);
        const down = (ctx,value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
        const up = (ctx,value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined
        const state  = (ctx,value) => ctx.p0.parsed.y == ctx.p1.parsed.y ? value : undefined

       
        const data = {
          labels: [0],
          datasets: [{
            label: 'độ ẩm tăng       ',
            backgroundColor: 'rgb(192,57,43)',
            //borderColor: 'rgb(255, 99, 132)',
            data: [0],
            segment:{
              borderColor: ctx => down(ctx,"rgb(22,160,133)") || up(ctx,"rgb(192,57,43)") || state(ctx,"rgb(149, 165, 166)")
            }
          },{
    
            label: 'độ ẩm giảm       ',
            backgroundColor: 'rgb(22,160,133)',
    
          },{
    
            label: 'độ ẩm ổn định',
            backgroundColor: 'rgb(149, 165, 166)',
              //borderColor: 'rgb(255, 99, 132)',
          }]
        };
        
        const config = {
            type : 'line',
            data : data,
        }
        const canvas = document.getElementById('canvas2')
        const chart = new Chart(canvas, config)

        window.setInterval(mycallback,1000);

        function mycallback(){
          var now = new Date();
          now = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
          var newvalue = document.getElementById("do am").innerHTML
          if(data.datasets[0].data.length >= 20){
            data.labels.shift();
            data.datasets[0].data.shift();
          }
          data.labels.push(now);
          data.datasets[0].data.push(newvalue);
          chart.update();
          $('#notice-humid').html("giá trị là " + now + " - " + newvalue)
        }
     


    });

    
    database.ref("gas").on("value",function(snapshot){
        var gas =snapshot.val();
        document.getElementById("khi gas").innerHTML = gas;

        const down = (ctx,value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
        const up = (ctx,value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined
        const state  = (ctx,value) => ctx.p0.parsed.y == ctx.p1.parsed.y ? value : undefined

       
        const data = {
          labels: [0],
          datasets: [{
            label: 'khí gas tăng       ',
            backgroundColor: 'rgb(192,57,43)',
            //borderColor: 'rgb(255, 99, 132)',
            data: [0],
            segment:{
              borderColor: ctx => down(ctx,"rgb(22,160,133)") || up(ctx,"rgb(192,57,43)") || state(ctx,"rgb(149, 165, 166)")
            }
          },{
    
            label: 'khí gas giảm       ',
            backgroundColor: 'rgb(22,160,133)',
    
          },{
    
            label: 'khí gas ổn định',
            backgroundColor: 'rgb(149, 165, 166)',
              //borderColor: 'rgb(255, 99, 132)',
          }]
        };
        
        const config = {
            type : 'line',
            data : data,
        }
        const canvas = document.getElementById('canvas3')
        const chart = new Chart(canvas, config)

        window.setInterval(mycallback,1000);

        function mycallback(){
          var now = new Date();
          now = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
          var newvalue = document.getElementById("khi gas").innerHTML
          if(data.datasets[0].data.length >= 20){
            data.labels.shift();
            data.datasets[0].data.shift();
          }
          data.labels.push(now);
          data.datasets[0].data.push(newvalue);
          chart.update();
          $('#notice-gas').html("giá trị là " + now + " - " + newvalue)
        }
     
    });

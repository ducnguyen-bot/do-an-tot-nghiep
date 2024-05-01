
    //ctx.p0.parsed là giá trị trước đó còn ctx.p1.parsed là giá trị hiện tại
    const down = (ctx,value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
    const up = (ctx,value) => ctx.p0.parsed.y < ctx.p1.parsed.y ? value : undefined
    const state  = (ctx,value) => ctx.p0.parsed.y == ctx.p1.parsed.y ? value : undefined

    const labels = [0];
    const data = {
      labels: labels,
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
      type: 'line',
      data: data,
    
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
    window.setInterval(mycallback,1000);

    function mycallback(){
      var now = new Date();
      now = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
      var value = Math.floor(Math.random()*1000);
      if(data.datasets[0].data.length >= 20){
        data.labels.shift();
        data.datasets[0].data.shift();
      }
      data.labels.push(now);
      data.datasets[0].data.push(value);
      myChart.update();
      $('#nana').html("      " + "giá trị là " + now + " - " + value)
    }
 
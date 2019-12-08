
setInterval(() => {

    $(document).ready(function(){
    $.ajax({
    url : "http://localhost/monitoringchart/dummydata.php",
    type : "GET",
    success : function(data){
      console.log(data);

      var counter = [];
      var l21 = [];
      var l22 = [];
      var l23 = [];
      var label = 1;

      for(var i in data) {
        if (data[i].name == "L21")
        {
            l21.push(data[i].value);
            console.log(l21);
            // counter.push(label);
            // label++;
        }

        else if( data[i].name == "L22")
        {
            l22.push(data[i].value);
            // counter.push(label);
            // label++;
        }

        else
        {
            l23.push(data[i].value);
            // counter.push(label);
            // label++;
        }
        
      }

      var x = l21.length;
      console.log(x);
      for(var z in l21)
        {
          counter.push(label);
          label++;
        }

      var chartdata = {
        labels: counter,
        datasets: [
          {
            label: "Model L21",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(59, 89, 152, 0.75)",
            borderColor: "rgba(59, 89, 152, 1)",
            pointHoverBackgroundColor: "rgba(59, 89, 152, 1)",
            pointHoverBorderColor: "rgba(59, 89, 152, 1)",
            data: l21
          },
          {
            label: "Model L22",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(29, 202, 255, 0.75)",
            borderColor: "rgba(29, 202, 255, 1)",
            pointHoverBackgroundColor: "rgba(29, 202, 255, 1)",
            pointHoverBorderColor: "rgba(29, 202, 255, 1)",
            data: l22
          },
          {
            label: "Model L23",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(211, 72, 54, 0.75)",
            borderColor: "rgba(211, 72, 54, 1)",
            pointHoverBackgroundColor: "rgba(211, 72, 54, 1)",
            pointHoverBorderColor: "rgba(211, 72, 54, 1)",
            data: l23
          }
        ]
      };

      var ctx = $("#myparticlecount");

      var LineGraph = new Chart(ctx, {
        type: 'line',
        data: chartdata,
        options:
         {
            animation: 
                {
                duration: 0
                }
        }
      });
    },
    error : function(data) {

    }
  });
});
    
}, 10000);
$(document).ready(function () {

  /****************Menu ********************/

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        $('.page-content-wrapper').toggleClass('shift');

    });

  /****************tag input********************/

$(window).keydown(function(event){
  if(event.keyCode == 13) {
    event.preventDefault();
    return false;
  }
});

if($(".tags").length != 0){
  $(".tags").tagsinput('items');
}





/****************country list populating ********************/
if($(".countrypicker").length != 0){
  $(".countrypicker").countrypicker();
}

    var ctx = document.getElementById('bar-chart');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['KSA', 'USA', 'UAE', 'Russia', 'China', 'Iran','Jordan'],
            datasets: [{
                data: [30, 70, 110, 100, 180, 150,120],
                backgroundColor: [
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0'

                ],
                borderColor: [
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0',
                    '#41a6b0'

                ],
                borderWidth: 1
            }]
        },
        options:
        {
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            } ,
            barThickness:40,
            offsetGridLines: false

          }],
          yAxes: [{
            barThickness: 40, 
            offsetGridLines: false,
            ticks: {
              beginAtZero: true
            }
          }]
        }
    }
    });

  
    var value = 64;
    var data = {
      labels: [
        "My val",
        ""
      ],
      datasets: [
        {
          data: [value, 100-value],
          backgroundColor: [
            "#41a6b0",
            "#d9d9d9"
          ],
          hoverBackgroundColor: [
            "#41a6b0",
            "#d9d9d9"
          ],
          hoverBorderColor: [
            "#41a6b0",
            "#ffffff"
          ]
        }]
    };
    
    var leftdoughnut = new Chart(document.getElementById('left-pie-chart'), {
      type: 'doughnut',
      data: data,
      options: {
          responsive: true,
        legend: {
          display: false
        },
        cutoutPercentage: 80,
        tooltips: {
            filter: function(item, data) {
            var label = data.labels[item.index];
            if (label) return item;
          }
        }
      }
    });
    
    
   
    var value2 = 79;
    var data2 = {
      labels: [
        "My val",
        ""
      ],
      datasets: [
        {
          data: [value2, 100-value2],
          backgroundColor: [
            "#41a6b0",
            "#d9d9d9"
          ],
          hoverBackgroundColor: [
            "#41a6b0",
            "#d9d9d9"
          ],
          hoverBorderColor: [
            "#41a6b0",
            "#ffffff"
          ]
        }]
    };
    
      var righttdoughnut = new Chart(document.getElementById('right-pie-chart'), {
        type: 'doughnut',
        data: data2,
        options: {
            responsive: true,
          legend: {
            display: false
          },
          cutoutPercentage: 80,
          tooltips: {
              filter: function(item, data) {
              var label = data.labels[item.index];
              if (label) return item;
            }
          }
        }
      });
      
    //   Chart.pluginService.register({
    //     beforeDraw: function(chart) {
    //         if(chart.id==1)
    //         {
    //        textCenter(value);
    //         }
    //         else if (chart.id==2)
    //         {
    //             textCenter(value2);

    //         }

    //     }
    // });
      
});

function textCenter(val) {
    Chart.pluginService.register({
      beforeDraw: function(chart) {

        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
  
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
  
        var text = val+"%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
  
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });


  }
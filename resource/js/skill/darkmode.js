var options = {
    chart: {
       height: 180,
       type: 'radialBar',
       fontFamily: 'Alegreya', 
     },
     series: [75],
     labels: ['MySQL'],
     fill: {
       colors: '#1a1a1a'
     }
    }
    new ApexCharts(document.querySelector("#dark-mysql"), options).render();
    
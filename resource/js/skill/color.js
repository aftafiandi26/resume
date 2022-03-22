var mysql = {
    chart: {
        height: 180,
        type: 'radialBar', 
        fontFamily: 'Alegreya',         
      },
    series: [75],
    labels: ['MySQL'],
    fill: {
      colors: '#0052cc',
    }
   
   }
   new ApexCharts(document.querySelector("#mysql"), mysql).render();
   
   var options = {
   chart: {
      height: 180,
      type: 'radialBar', 
      fontFamily: 'Alegreya', 
    },
    series: [51],
    labels: ['Postgre'],
    fill: {
      colors: '#0052cc'
    }
   }
   new ApexCharts(document.querySelector("#postgresql"), options).render();
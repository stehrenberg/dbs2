/**
 * Created by Steff on 23/10/16.
 */
$(function () {

    // Build the chart
    $('#piechart-container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Soccer club votes percent'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Clubs',
            colorByPoint: true,
            data: []
        }]
    });

    console.log(window.pieResults);
});
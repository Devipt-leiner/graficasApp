import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // { data: [250, 130, 70] }
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService.getData().subscribe((data) => {
      const labels = Object.keys(data); // Le pido las llaves al objeto
      const values = Object.values(data);

      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets.push({ data: values });
    });
  }
}

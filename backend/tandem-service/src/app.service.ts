import { Injectable } from '@nestjs/common';
import dataSet0 from './data/data-1234.json';
import dataSet1 from './data/data-4321.json';

interface DataSet {
  data: number[]
}

@Injectable()
export class AppService {

  private currentDataSet: number[]
  private currentDataSetId: string
  private dataSets: Record<string, number[] > = {}

  constructor() {
    this.dataSets['0'] = dataSet0.data;
    this.dataSets['1'] = dataSet1.data;
    this.currentDataSetId = '0'
  }

  async getNextDataSet(): Promise<number[]> {
    try {
      this.currentDataSetId = this.currentDataSetId === '0' ? '1' : '0';
      this.currentDataSet = [...this.dataSets[this.currentDataSetId]];
      return this.currentDataSet;
    } catch (e) {
      throw new Error('Cannot get next Data Set');
    }
  }

  async updateCurrentDataSet(newDataPoint: number): Promise<number[]> {
    try {
      this.currentDataSet = [...this.currentDataSet, newDataPoint]
      return this.currentDataSet;
    } catch (e) {
      throw new Error('Cannot update current Data Set')
    }
  }
}

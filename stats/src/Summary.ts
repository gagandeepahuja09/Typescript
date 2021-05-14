import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}

  static winsReportHtml(team: string): Summary {
    const filePath = `${team}_report.html`
    return new Summary(
      new WinsAnalysis('Man United'),
      new HtmlReport(filePath)
    )
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
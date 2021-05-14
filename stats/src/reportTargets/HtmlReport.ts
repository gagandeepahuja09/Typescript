import { OutputTarget } from '../Summary'
import fs from 'fs'

export class HtmlReport implements OutputTarget {
  constructor(public filePath: string) {}
  print(report: string): void {
    const html = `
      <html>
        <h2>Analysis Report</h2>
        <div>${report}</div>
      </html>
    `
    fs.writeFileSync(this.filePath, html)
  }
}
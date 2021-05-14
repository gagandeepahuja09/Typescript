// we will need to install type definition file for standard node packages as well
// npm i @types/node
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { MatchResult } from './MatchResult'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const matchSummary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('report.html')
)

matchSummary.buildAndPrintReport(matchReader.matches)
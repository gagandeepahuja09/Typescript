import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.readCsv('football.csv')
const matchSummary = Summary.winsReportHtml('Man United')

matchReader.load()
matchSummary.buildAndPrintReport(matchReader.matches)
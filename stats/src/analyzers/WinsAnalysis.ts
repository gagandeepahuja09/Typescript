import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'
import { Analyzer } from '../Summary'

// implements will tell typescript to check if we are correctly implementing
// all the properties of the interface
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0
    matches.forEach(match => {
      wins += +(
        (match[1] === this.team && match[5] === MatchResult.HomeWin)
        || (match[2] === this.team && match[5] === MatchResult.AwayWin)
      )
    })

    return `${this.team} won ${wins} games`
  }
}
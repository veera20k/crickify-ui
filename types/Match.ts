export interface MatchInfo {
  id: number;
  objectId: number;
  status: string;
  state: string;
  title: string;
  longName: string;
  slug: string;
  startDate: string;
  endDate: string;
  startTime: string;
  isCancelled: boolean;
  result: string;
  statusText: string;
  teams: TeamInfo[];
  format: string;
  series: {
    objectId: number;
    longName: string;
  };
  badgeColor: string;
  liveOvers: number;
  scheduledOvers: number;
}

export interface TeamInfo {
  team: {
    id: string;
    name: string;
    abbreviation: string;
    imageUrl: string;
    isCountry?: boolean;
  },
  score: number;
  scoreInfo?: string;
  overRunRate: number;
  isLive: boolean;
}

export interface MatchDetails {
  match: MatchInfo;
  supportInfo: SupportInfo;
  recentBallCommentary: {
    ballComments: []
  };
  scorecard: ScoreTable
}

export interface SupportInfo {
    liveInfo: LiveInfo;
    liveSummary: {
      recentBalls: {
        id: number;
        isFour: boolean;
        isSix: boolean;
        isWicket: boolean;
        totalRuns: number;
        ballNumber: number;
      }[],
      batsmen: CurrentPlayerInfo[];
      bowlers: CurrentPlayerInfo[];
  }
}

export interface LiveInfo {
  type: string;
  currentRunRate: number;
  requiredRunrate: number;
}

export interface CurrentPlayerInfo {
  _uid: number;
  player: Player,
  runs?: number;
  balls: number;
  fours?: number;
  sixes?: number;
  strikerate?: number;
  overs?: number;
  dots?: number;
  maidens?: number;
  conceded?: number;
  wickets?: number;
  economy?: number;
  teamAbbreviation: string;
}

export interface Player {
    id: number;
    name: string;
    longName: string;
    imageUrl: string;
    headshotImageUrl: string;
    dateOfBirth: {
      year: number;
      month: number;
      date: number;
    },
    gender: string;
    battingStyles: string[];
    bowlingStyles: string[];
    longBattingStyles: string[];
    longBowlingStyles: string[];
    playingRoles: string[];
    image: {
      height: number;
      width: number;
      url: string;
      caption: string;
    }
}

export interface ScoreTable {
  innings: Inning[]
}

export interface Inning {
    inningNumber: number;
    team: TeamInfo['team'];
    isBatted: boolean;
    runs: number;
    wickets: number;
    lead: number;
    target: number;
    totalOvers: number;
    balls: number;
    extras: number;
    legbyes: number;
    wides: number;
    noballs: number;
    penalties: number;
    inningBatsmen: InningBatsman[];
    inningBowlers: InningBowler[];
}

export interface InningBatsman {
  playerRoleType: string;
  player: Player;
  runs: number;
  balls: number;
  minutes: number;
  fours: number;
  sixes: number;
  strikerate: number;
  isOut: boolean;
  battedType: string;
  dismissalBatsman: Player;
  dismissalBowler: Player;
  dismissalFielders: Player[];
  dismissalText: {
    short: string;
    long: string;
    commentary: string;
    dismissalComment: {
      type: string;
      html: string;
    };
    fowOrder: number;
    fowRuns: number;
    fowOvers: number;
  }
}

export interface InningBowler {
  player: Player;
  overs: number;
  balls: number;
  maidens: number;
  conceded: number;
  wickets: number;
  economy: number;
  runsPerBall: number;
  dots: number;
  fours: number;
  sixes: number;
  wides: number;
  noballs: number;
  inningsWicket: {
    dismissalBatsman: Player;
    dismissalComment: Comment[]
  };
  fowOrder: number;
  fowWicketNum: number;
  fowRuns: number;
  fowOvers: number;
}


interface Comment {
  type: string;
  html: string;
}

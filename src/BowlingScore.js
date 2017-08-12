function BowlingScore() {
  this.DEFAULT_TOTAL_SCORE = 0;
  this.totalScore = this.DEFAULT_TOTAL_SCORE;
  this.MAX_SCORE = 10;
  this.maxScore = this.MAX_SCORE;
  this.isFirstBowl = true;
  this.bowlScore = [];
  this.frameScore = [];
  this.DEFAULT_BOWL_COUNT = 0;
  this.bowlCount = this.DEFAULT_BOWL_COUNT;
}

BowlingScore.prototype.enterBowlingScore = function (score) {
  if (this.isFirstBowl) {
    if (score > this.maxScore) throw "Maximum score is 10"
    this.bowlScore.push(score)
    this.totalScore += score;
    this.isFirstBowl = false;
    this._incrementBowlCount();
  } else {
    if ((this.bowlScore[0] + score) > this.maxScore) throw "Maximum total score is 10"
    this.bowlScore.push(score)
    this.totalScore += score;
    this._updateFrameScore();
    this.isFirstBowl = true;
    this._incrementBowlCount();
  }
};

BowlingScore.prototype._incrementBowlCount = function () {
  this.bowlCount++;
};

BowlingScore.prototype._updateFrameScore = function () {
  this.frameScore.push(this.bowlScore[this.bowlCount] + this.bowlScore[this.bowlCount]);
};

BowlingScore.prototype.showTotalScore = function () {
  return this.totalScore;
};

BowlingScore.prototype.isThisFirstBowl = function () {
  return this.isFirstBowl;
};

BowlingScore.prototype.showBowlScore = function (bowl) {
  return this.bowlScore[bowl - 1];
};

BowlingScore.prototype.showFrameScore = function (frame) {
  return this.frameScore[frame - 1]
};

console.log(this.bowlScore)

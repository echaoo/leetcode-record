var RecentCounter = function() {
  this.pings = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.pings.push(t)
  while(this.pings[0] < t - 3000) this.pings.shift()
  return this.pings.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

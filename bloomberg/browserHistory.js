var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentSiteIndex = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    //very neat way to "cut" array by assigning a length to it
    this.history.length = this.currentSiteIndex + 1;
    // this.history = this.history.slice(0, this.currentSiteIndex+1);
    this.history.push(url);
    this.currentSiteIndex++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let index = Math.max(this.currentSiteIndex - steps, 0);
    this.currentSiteIndex = index;
    return this.history[index];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let index = Math.min(this.currentSiteIndex + steps, this.history.length - 1);
    this.currentSiteIndex = index;
    return this.history[index];
};
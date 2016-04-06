/***
 * Javascript object extensions
 */


/** Date */
Date.prototype.addHours = function(hours){
    var millisecs = this.getTime() + hours * 60 * 60 * 1000;
    return new Date(millisecs);
}

Date.prototype.addMinutes = function(minutes){
    var millisecs = this.getTime() + minutes * 60 * 1000;
    return new Date(millisecs);
}

Date.prototype.IsEqualDate = function(other){
    if(!other)
        return false;
        
    return this.getYear() == other.getYear() &&
        this.getMonth() == other.getMonth() &&
        this.getDay() == other.getDay()
    ;
}
/** END: Date */

/** Math */
Math.randInt = function(start, end){
    return Math.floor((Math.random() * (end - start)) + start)
}
/** END: Math */
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arr = position.map((p,i) => ({
        d: target - p,
        s: speed[i],
        p: p,
        timeNeeded: (target - p)/ speed[i]
    }))
    arr.sort((a,b) => b.p-a.p);
    
    const s = [];
    let ans = 0;
    arr.forEach((v) => {
        if(!s.length){
            s.push(v);
        }else{
            const t = s[s.length-1];
            if(v.timeNeeded <= t.timeNeeded && v.p <= t.p){
                s[s.length-1].v = Math.min(v.s, t.s);
                s[s.length-1].p = Math.min(v.p, t.p);
                s[s.length-1].timeNeeded = Math.max(v.timeNeeded, t.timeNeeded);
            }else{
                s.push(v);
            }
        }
    })


    return s.length;

};
/*Sources Used: I based some of my code off of some the content that we covered
in class (on the slides) as reference. As well as using slides to get notation correct and using ChatGPT to understand some concepts which was mainly used for the recurrence notation trying to understand the pattern */

function divideAndConquerSum(a) {
    if (a.length <= 1) {
        if (a.length === 0) return 0;
        else return a[0];
    }
    else {
        const mid1 = Math.floor(a.length / 3);
        const mid2 = Math.floor( 2 * a.length / 3)

        const temp1 = a.slice(0, mid1);
        const temp2 = a.slice(mid1, mid2);
        const temp3 = a.slice(mid2);

        return divideAndConquerSum(temp1) + divideAndConquerSum(temp2) + divideAndConquerSum(temp3);
    }
}

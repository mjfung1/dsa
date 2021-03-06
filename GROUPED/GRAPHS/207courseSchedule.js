var canFinish = function(numCourses, prerequisites) {
    const adjacency = {};
    const visited = {};
    
    for (let course = 0; course < numCourses; course++) {
        adjacency[course] = []
    }
    
    for (const prereq of prerequisites) {
        const [secondCourse, firstCourse] = prereq;
        adjacency[firstCourse].push(secondCourse);
    }
    
    for (let course = 0; course < numCourses; course++) {
        // false if cycle is found
        if (!dfs(course)) return false;
    }
 function dfs(course) {
        // if we run into a node that we saw earlier in current dfs, it's a cycle
        if (visited[course] === -1) return false;
        
        // if we run into a node that we saw earlier in separate cycle dfs, there's no problem
        if (visited[course] === 1) return true;
        
        // mark the current node as -1 (currently visiting)
        visited[course] = -1;
        
        
        if (adjacency[course]) { 
            for (const preReq of adjacency[course]) {
                if (!dfs(preReq)) {
                    return false;
                }
            }
        }
        
        visited[course] = 1;
        return true;
    }
    
     // if no cycles were found, return true;
    return true;
};



// TOPOLOGICAL SORT!!
var canFinish = function (numCourses, prerequisites) {
  const indegrees = new Array(numCourses).fill(0);
  for (let [course] of prerequisites) {
    indegrees[course]++;
  }

  const queue = [];
  for (let course = 0; course < numCourses; course++) {
    if (indegrees[course] === 0) queue.push(course);
  }

  while (queue.length) {
    numCourses--;
    let noPrereq = queue.shift();

    for (let [course, prereq] of prerequisites) {
      if (prereq === noPrereq) {
        indegrees[course]--;
        // if becomes 0 means no more prerequisites to take; so can finally take course
        if (indegrees[course] === 0) queue.push(course);
      }
    }
  }

  return numCourses === 0;
};